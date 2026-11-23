// Shared Progressive-Enhancement Scripts:
// 1) Shrinking Header scroll fallback (only when CSS scroll-timeline unsupported)
// 2) Dialog closedBy="any" pointer-bounds fallback (Safari)
// 3) Accordion Expand/Collapse All fallback (when Invoker Commands unsupported)
// 4) Accessible form validation sync (:user-invalid + aria-invalid + live region)

function initHeaderShrinkFallback() {
  if (CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
    return;
  }
  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;

  const initialHeight = 82;
  const finalHeight = 64;
  const scrollDistance = 140;

  const update = () => {
    const pct = Math.min(1, Math.max(0, window.scrollY / scrollDistance));
    const h = initialHeight - (initialHeight - finalHeight) * pct;
    header.style.height = `${h}px`;
    if (pct > 0.25) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.96)';
      header.style.boxShadow = '0 6px 24px rgba(22, 32, 28, 0.08)';
    } else {
      header.style.backgroundColor = 'rgba(250, 248, 245, 0.9)';
      header.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initDialogFallbacks() {
  // Invoker command="show-modal" / "close" fallback for browsers missing Invoker Commands
  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    document.addEventListener('click', (e) => {
      const btn = (e.target as Element | null)?.closest<HTMLButtonElement>('[command][commandfor]');
      if (!btn) return;
      const targetId = btn.getAttribute('commandfor');
      const command = btn.getAttribute('command');
      if (!targetId || !command) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      if (command === 'show-modal' && target instanceof HTMLDialogElement) {
        target.showModal();
      } else if (command === 'close' && target instanceof HTMLDialogElement) {
        target.close();
      } else if (command === '--toggle-all') {
        const expand = btn.getAttribute('aria-expanded') !== 'true';
        target.querySelectorAll<HTMLDetailsElement>(':scope > details').forEach((d) => {
          d.open = expand;
        });
      }
    });
  }

  // Accordion native Invoker Commands handler
  document.addEventListener(
    'command',
    (event: Event) => {
      const cmdEvent = event as Event & { command?: string; source?: HTMLElement };
      if (cmdEvent.command !== '--toggle-all' || !cmdEvent.source) return;
      const expand = cmdEvent.source.getAttribute('aria-expanded') !== 'true';
      const target = event.target as HTMLElement | null;
      if (!target) return;
      target.querySelectorAll<HTMLDetailsElement>(':scope > details').forEach((d) => {
        d.open = expand;
      });
    },
    { capture: true }
  );

  // Keep Expand/Collapse All aria-expanded synced whenever any <details> toggles
  document.addEventListener(
    'toggle',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLDetailsElement)) return;
      const accordion = target.closest('.accordion');
      if (!accordion) return;
      const btn = accordion.querySelector<HTMLButtonElement>('[command="--toggle-all"]');
      if (!btn) return;
      const items = accordion.querySelectorAll<HTMLDetailsElement>(':scope > details');
      const allOpen = Array.prototype.every.call(items, (d: HTMLDetailsElement) => d.open);
      btn.setAttribute('aria-expanded', String(allOpen));
    },
    { capture: true }
  );

  // closedBy="any" pointer-bounds fallback (Safari / older engines)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e: PointerEvent, dialog: HTMLDialogElement) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    document.querySelectorAll<HTMLDialogElement>('dialog[closedby="any"]').forEach((dialog) => {
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => {
        pressedOutside = outside(e, dialog);
      });
      dialog.addEventListener('pointerup', (e) => {
        if (pressedOutside && outside(e, dialog)) dialog.close();
      });
    });
  }

  // Clear dialog returnValue on close so stale button values never leak
  document.querySelectorAll<HTMLDialogElement>('dialog').forEach((dialog) => {
    dialog.addEventListener('close', () => {
      dialog.returnValue = '';
    });
  });
}

function initAccessibleFormValidation() {
  const forms = document.querySelectorAll<HTMLFormElement>('form[data-enhanced-validation]');
  if (!forms.length) return;

  const supportsUserInvalid = CSS.supports('selector(:user-invalid)');
  const dirtyState = new WeakMap<Element, { hasInteracted: boolean; hasBlurred: boolean }>();

  const linkError = (el: HTMLElement, shown: boolean) => {
    const errorId = el.dataset.error;
    if (!errorId) return;
    const ids = (el.getAttribute('aria-describedby') || '')
      .split(/\s+/)
      .filter((id) => id && id !== errorId);
    if (shown) ids.push(errorId);
    if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
    else el.removeAttribute('aria-describedby');
  };

  let announcer = document.getElementById('form-error-announcer');
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'form-error-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.className = 'visually-hidden';
    document.body.append(announcer);
  }

  let announceTimer: ReturnType<typeof setTimeout> | undefined;
  let announcedField: Element | undefined;

  const spokenText = (node: Element) => {
    const copy = node.cloneNode(true) as Element;
    copy.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
    copy.querySelectorAll('[role="img"][aria-label]').forEach((n) => {
      n.replaceWith(`${n.getAttribute('aria-label')}: `);
    });
    return (copy.textContent || '').replace(/\s+/g, ' ').trim();
  };

  const announceError = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const errId = el.dataset.error;
    if (!errId) return;
    const errNode = document.getElementById(errId);
    if (!errNode || !announcer) return;
    const label = el.labels?.[0] ? `${spokenText(el.labels[0])}: ` : '';
    clearTimeout(announceTimer);
    announcer.textContent = '';
    announcedField = el;
    announceTimer = setTimeout(() => {
      if (announcer) announcer.textContent = label + spokenText(errNode);
    }, 450);
  };

  const flagged = new WeakSet<Element>();
  const announced = new WeakSet<Element>();

  const syncControl = (
    el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    announce = false,
    forceCheck = false
  ) => {
    let isInvalid = false;
    if (supportsUserInvalid) {
      isInvalid = el.matches(':user-invalid') || (forceCheck && !el.validity.valid);
    } else {
      const state = dirtyState.get(el);
      if (forceCheck || (state && state.hasBlurred && state.hasInteracted)) {
        isInvalid = !el.validity.valid;
        el.classList.toggle('user-invalid-fallback', isInvalid);
        el.classList.toggle('user-valid-fallback', !isInvalid);
      }
    }

    if (isInvalid) {
      if (announce && !announced.has(el)) {
        announceError(el);
        announced.add(el);
      }
      el.setAttribute('aria-invalid', 'true');
      linkError(el, true);
      flagged.add(el);
    } else if (flagged.has(el) || el.getAttribute('aria-invalid') !== 'true') {
      el.setAttribute('aria-invalid', 'false');
      linkError(el, false);
      flagged.delete(el);
      announced.delete(el);
      if (announcedField === el && announcer) {
        clearTimeout(announceTimer);
        announcer.textContent = '';
      }
    }
  };

  forms.forEach((form) => {
    const controls = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      'input, select, textarea'
    );
    controls.forEach((el) => el.setAttribute('aria-invalid', 'false'));

    form.addEventListener(
      'blur',
      (e) => {
        const el = e.target;
        if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement))
          return;
        const st = dirtyState.get(el) || { hasInteracted: false, hasBlurred: false };
        st.hasBlurred = true;
        dirtyState.set(el, st);
        syncControl(el, true);
      },
      true
    );

    form.addEventListener('input', (e) => {
      const el = e.target;
      if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement))
        return;
      const st = dirtyState.get(el) || { hasInteracted: false, hasBlurred: false };
      st.hasInteracted = true;
      dirtyState.set(el, st);
      if (el.hasAttribute('aria-invalid')) syncControl(el, false);
    });

    form.addEventListener(
      'change',
      (e) => {
        const el = e.target;
        if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement))
          return;
        const st = dirtyState.get(el) || { hasInteracted: false, hasBlurred: false };
        st.hasInteracted = true;
        st.hasBlurred = true;
        dirtyState.set(el, st);
        syncControl(el, true);
      },
      true
    );

    form.addEventListener(
      'invalid',
      (e) => {
        const el = e.target;
        if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement))
          return;
        dirtyState.set(el, { hasInteracted: true, hasBlurred: true });
        announced.add(el);
        syncControl(el, false, true);
      },
      true
    );

    form.addEventListener(
      'reset',
      () => {
        setTimeout(() => {
          controls.forEach((el) => {
            dirtyState.delete(el);
            el.classList.remove('user-invalid-fallback', 'user-valid-fallback');
            el.setAttribute('aria-invalid', 'false');
            linkError(el, false);
            flagged.delete(el);
            announced.delete(el);
          });
        });
      },
      true
    );
  });
}

function initQuickInquiryModal() {
  const form = document.getElementById('quick-inquiry-form') as HTMLFormElement | null;
  if (!form) return;

  const waAnchor = document.getElementById('quick-wa-send') as HTMLAnchorElement | null;
  const emailAnchor = document.getElementById('quick-email-send') as HTMLAnchorElement | null;

  const buildMessage = () => {
    const data = new FormData(form);
    const lines = [
      'Hello Minimalism Tours Georgia,',
      `Name: ${data.get('name') || 'Guest'}`,
      `Interest: ${data.get('tour') || 'Custom Tour in Georgia'}`,
      `Preferred Date: ${data.get('date') || 'Flexible'}`,
      `Group Size: ${data.get('guests') || '2'} travelers`,
      data.get('notes') ? `Notes: ${data.get('notes')}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const msg = buildMessage();
    const waUrl = `https://wa.me/995557204307?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });

  const syncLinks = () => {
    const msg = buildMessage();
    if (waAnchor) {
      waAnchor.href = `https://wa.me/995557204307?text=${encodeURIComponent(msg)}`;
    }
    if (emailAnchor) {
      emailAnchor.href = `mailto:beqa.gelashvili.2@gmail.com?subject=${encodeURIComponent(
        'Tour Inquiry — Minimalism Tours Georgia'
      )}&body=${encodeURIComponent(msg)}`;
    }
  };

  form.addEventListener('input', syncLinks);
  form.addEventListener('change', syncLinks);
  syncLinks();
}

initHeaderShrinkFallback();
initDialogFallbacks();
initAccessibleFormValidation();
initQuickInquiryModal();
