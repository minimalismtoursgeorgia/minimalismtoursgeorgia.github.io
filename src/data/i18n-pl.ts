import { TOURS, type Tour, type OptionalExtra } from './tours';
import { DESTINATIONS, type Destination } from './destinations';
import { GUEST_REVIEWS, type GuestReview } from './reviews';
import type { Lang } from '../lib/i18n';

export const PL_SITE = {
  motto: 'Przełam Rutynę',
  campaignTagline: 'Gruzja poza pocztówką',
  description:
    'Licencjonowany operator turystyczny z Batumi i lokalne DMC w Adżarii. Kameralne, prywatne i B2B wycieczki przyrodnicze, lasy kolchidzkie UNESCO, spacery kulturowe oraz wyprawy kaukaskie w Gruzji.',
  officeHoursDisplay: 'Czynne całą dobę · Poniedziałek–Niedziela',
  cancellationPolicy: 'Bezpłatne anulowanie do 24 godzin przed wyjazdem',
  languages: ['Angielski', 'Gruziński (ქართული)', 'Polski (tłumaczenie strony)'],
};

export const PL_CATEGORY_LABELS: Record<Tour['category'], string> = {
  'Day Hike': 'Jednodniowy trekking',
  'Nature & Culture': 'Natura i kultura',
  'Culinary Hike': 'Trekking kulinarny',
  'Urban Walk': 'Spacer miejski',
  'Multi-Day Trek': 'Trekking wielodniowy',
  'Alpine Expedition': 'Wyprawa alpejska',
};

export const PL_DIFFICULTY_LABELS: Record<Tour['difficulty'], string> = {
  Easy: 'Łatwy',
  'Easy–Moderate': 'Łatwy–Umiarkowany',
  Moderate: 'Umiarkowany',
  'Moderate–Challenging': 'Umiarkowany–Wymagający',
  Challenging: 'Wymagający',
};

export const PL_MTIRALA_OPTIONAL_EXTRAS: Record<OptionalExtra['id'], OptionalExtra> = {
  zipline: {
    id: 'zipline',
    label: 'Tyrolka / Zipline (80 GEL)',
    shortLabel: 'Tyrolka · 80 GEL',
    detail: 'Opcjonalny zjazd tyrolką nad kanionem w Mtirali — 80 GEL (sezonowo, płatne na miejscu tylko na życzenie).',
  },
  atv: {
    id: 'atv',
    label: 'Jazda quadem ATV (150 GEL)',
    shortLabel: 'Quad ATV · 150 GEL',
    detail: 'Opcjonalna przejażdżka górskim quadem ATV po wyznaczonych trasach w dolinie — 150 GEL, na życzenie gości.',
  },
  honey: {
    id: 'honey',
    label: 'Lokalny miód górski — z plastrem lub płynny (50 GEL)',
    shortLabel: 'Miód · 50 GEL',
    detail: 'Opcjonalny autentyczny miód górski z Adżarii: z plastrem miodu lub odwirowany (ფიჭიანი / უფიჭო) — 50 GEL.',
  },
  propolis: {
    id: 'propolis',
    label: 'Propolis / დინდგელი (40 GEL)',
    shortLabel: 'Propolis · 40 GEL',
    detail: 'Opcjonalny naturalny propolis pszczeli (დინდგელი) od lokalnych pszczelarzy z Adżarii — 40 GEL.',
  },
  lunch: {
    id: 'lunch',
    label: 'Gruziński obiad (ustalany z przewodnikiem)',
    shortLabel: 'Obiad · Z przewodnikiem',
    detail: 'Opcjonalny domowy obiad adżarski w wiosce lub w nadrzecznej restauracji — proponowany i organizowany bezpośrednio z przewodnikiem.',
  },
};

export const PL_CONTENT_PILLARS = [
  {
    name: 'Natura',
    summary:
      'Pradawne lasy deszczowe Kolchidy, wulkaniczne doliny, alpejskie przełęcze i uczciwe informacje o realnych warunkach na szlaku i pogodzie.',
  },
  {
    name: 'Kultura',
    summary:
      'Architektoniczne historie Starego Batumi, średniowieczne kamienne mosty w Adżarii, domowe kuchnie i sprawdzona lokalna historia.',
  },
  {
    name: 'Ludzie',
    summary:
      'Kameralne rozmowy z lokalnymi przewodnikami i gospodarzami wiosek, gdzie prawdziwe relacje powstają z dala od masowych autokarów.',
  },
  {
    name: 'Planuj i rezerwuj',
    summary:
      'Jasny poziom trudności, potwierdzone miejsca zbiórki, przejrzysta lista świadczeń bez ukrytych opłat na miejscu oraz elastyczne anulowanie 24h.',
  },
] as const;

export const PL_SEASONS = [
  {
    id: 'jan-mar',
    months: 'Sty – Mar',
    title: 'Dziedzictwo wybrzeża i łagodne spacery leśne',
    focus:
      'Spokojne spacery architektoniczne po Starym Batumi, zimowa zieleń Ogrodu Botanicznego i niższe partie górskie Adżarii.',
    recommendedRegions: ['Batumi', 'Wybrzeże Botaniczne'],
    practicalNote: 'Zalecana warstwowa odzież przeciwdeszczowa; temperatury nad morzem są łagodniejsze niż w głębi gór.',
  },
  {
    id: 'apr-jun',
    months: 'Kwi – Cze',
    title: 'Kwitnienie lasów Kolchidy i wiosenne wodospady',
    focus:
      'Największy przepływ wodospadów w Parku Narodowym Mtirala, kwitnące rododendrony pontyjskie i dolina Machakhela z planem awaryjnym na deszcz.',
    recommendedRegions: ['Park Narodowy Mtirala', 'Machakhela', 'Kolchida'],
    practicalNote: 'Poranna kontrola pogody, buty z dobrą przyczepnością i elastyczne tempo pod osłoną lasu.',
  },
  {
    id: 'jul-sep',
    months: 'Lip – Wrz',
    title: 'Wysoki Kaukaz i szmaragdowe jeziora alpejskie',
    focus:
      'Chłodne górskie ucieczki od upału w Batumi: 2-dniowy trekking w Mtirali ze schroniskiem, Zielone Jezioro, granie Swanetii i wyprawy na Kazbek.',
    recommendedRegions: ['Mtirala', 'Zielone Jezioro', 'Kazbegi', 'Mestia'],
    practicalNote: 'Zalecana wcześniejsza rezerwacja na wielodniowe wyprawy alpejskie i letnie terminy weekendowe.',
  },
  {
    id: 'oct-dec',
    months: 'Paź – Gru',
    title: 'Jesienne barwy, stoły zbiorów i spokojna kultura',
    focus:
      'Złote lasy bukowe w Mtirali i Machakheli, domowe obiady adżarskie w wioskach oraz rześkie wieczorne spacery po Batumi.',
    recommendedRegions: ['Machakhela', 'Mtirala', 'Batumi'],
    practicalNote: 'Świetna widoczność jesienią wzdłuż wybrzeża; krótszy dzień sprzyja wyjazdom o 10:00.',
  },
];

export const PL_GENERAL_FAQS = [
  {
    question: 'Skąd odbierają jednodniowe wycieczki z Batumi?',
    answer:
      'Wszystkie jednodniowe wycieczki z Batumi obejmują odbiór i powrót w to samo miejsce w czterech sprawdzonych punktach w centrum: Plac Europy, Kolejka linowa Argo, Park Centralny Batumi oraz Hotel Euphoria Batumi. Indywidualny odbiór z hoteli w centrum można też potwierdzić przez WhatsApp.',
  },
  {
    question: 'Co się dzieje, jeśli w Parku Narodowym Mtirala pada deszcz?',
    answer:
      'Mtirala to umiarkowany las deszczowy Kolchidy — mgła i deszcz są częścią jego ekosystemu. Każdy trekking ma aktywny plan pogodowy z trasami pod koroną drzew, poradami dotyczącymi obuwia, suchym transportem czekającym w pobliżu oraz możliwością bezpłatnej zmiany terminu w ramach zasad 24h.',
  },
  {
    question: 'Czy na miejscu pojawiają się ukryte opłaty za bilety lub parki?',
    answer:
      'Zero ukrytych kosztów przy bramkach. Każda strona wycieczki dokładnie wskazuje, co jest w cenie (np. bilet do Ogrodu Botanicznego w wycieczce łączonej lub domowy obiad adżarski na trekkingu kulinarnym) przed potwierdzeniem. Opcjonalne atrakcje w Mtirali — tyrolka, quad ATV, degustacja miodu i obiad — organizowane są wyłącznie na życzenie gościa.',
  },
  {
    question: 'Jak działają ceny grupowe i zniżki dla dzieci?',
    answer:
      'Wycieczki prywatne i w małych grupach skalują się płynnie od 1 do 16 osób, dzięki czemu podróżni solo, pary i większe grupy widzą jasną cenę za osobę. Dzieci w wieku 0–17 lat otrzymują 25% zniżki (75% stawki dorosłego) na standardowych wycieczkach jednodniowych.',
  },
  {
    question: 'Jak zarezerwować wycieczkę bez opłat manipulacyjnych na stronie?',
    answer:
      'Wybierz liczbę osób i datę w kalkulatorze dowolnej wycieczki i kliknij Rezerwuj bezpośrednio przez WhatsApp lub Telegram — albo zarezerwuj na GetYourGuide. Przy rezerwacji bezpośredniej nie pobieramy żadnych opłat pośredników.',
  },
  {
    question: 'Czy można płacić kartą bankową, czy lepiej mieć gotówkę? Gdzie najlepiej wymienić walutę?',
    answer:
      'Karty płatnicze są akceptowane w Batumi i wielu restauracjach, ale w górach, wioskach oraz przy opcjonalnych atrakcjach na miejscu (tyrolka 80 GEL, quad ATV 150 GEL, miód 50 GEL, propolis 40 GEL lub obiad ustalany z przewodnikiem) znacznie wygodniej jest mieć gotówkę (GEL). Wskazówka lokalnych przewodników: najlepsze kursy wymiany gotówki znajdziesz w kantorach Rico Credit.',
  },
];

export const PL_PICKUP_POINTS: Record<string, { name: string; district: string; address: string }> = {
  'europe-square': {
    name: 'Plac Europy (Europe Square)',
    district: 'Centrum Starego Batumi',
    address: '29 Memed Abashidze Ave, Batumi, Gruzja',
  },
  'argo-cable-car': {
    name: 'Kolejka linowa Argo',
    district: 'Port i dolna stacja kolejki',
    address: '1 Bako Street, Batumi 6010, Gruzja',
  },
  'batumi-central-park': {
    name: 'Park Centralny Batumi',
    district: 'Park 6 Maja i promenada nad jeziorem',
    address: 'JJXH+6C3, H. Abashidze St, Batumi, Gruzja',
  },
  'euphoria-hotel': {
    name: 'Hotel Euphoria Batumi',
    district: 'Nowy Bulwar',
    address: '1 Lech and Maria Kaczynski St, Batumi, Gruzja',
  },
};

export const PL_VEHICLES = [
  {
    name: 'Komfortowy Sedan',
    capacity: 'Do 4 gości',
    idealFor: 'Podróżni solo, pary oraz nadmorskie dni kulturowe',
    amenities: ['Klimatyzacja', 'Wi-Fi na pokładzie', 'Ogrzewanie', 'System audio'],
  },
  {
    name: 'Van Turystyczny',
    capacity: 'Do 6 gości',
    idealFor: 'Rodziny i małe grupy trekkingowe z plecakami',
    amenities: ['Klimatyzacja', 'Wi-Fi na pokładzie', 'Ogrzewanie', 'System audio'],
  },
  {
    name: 'Górski SUV / Jeep 4x4',
    capacity: 'Do 7 gości',
    idealFor: 'Dojazdy do lasów Mtirali, przełęcze górskie i doliny Adżarii',
    amenities: ['Napęd 4x4', 'Klimatyzacja', 'Wi-Fi na pokładzie', 'Ogrzewanie'],
  },
  {
    name: 'Minibus Turystyczny / Sprinter',
    capacity: '8–16+ gości (autokary na życzenie)',
    idealFor: 'Grupy biur podróży, wyjazdy firmowe i delegacje uczelniane',
    amenities: ['Klimatyzacja', 'Wydzielony bagażnik', 'Wi-Fi na pokładzie', 'Odbiór bezpośrednio z hotelu lub portu'],
  },
];

export const PL_CERTIFICATIONS = [
  {
    title: 'Certyfikowani przewodnicy górscy i trekkingowi GMGA i FMGA',
    issuer: 'Stowarzyszenie Przewodników Górskich Gruzji i Federacja FMGA',
    scope: 'Protokoły bezpieczeństwa w górach, prowadzenie tras wysokogórskich i zarządzanie szlakami UNESCO',
  },
  {
    title: 'Przewodnictwo po Światowym Dziedzictwie Przyrodniczym UNESCO',
    issuer: 'Departament Turystyki Adżarii',
    scope: 'Ekologia lasów deszczowych Kolchidy, zasady ochrony przyrody i interpretacja dziedzictwa Mtirali/Kolchidy',
  },
  {
    title: 'Certyfikowany przewodnik trekkingowy i terenowy',
    issuer: 'Adventure Tourism School (Gruzja)',
    scope: 'Nawigacja górska, dobór tempa grupy, plany awaryjne na załamanie pogody i koordynacja zespołu',
  },
  {
    title: 'Pierwsza pomoc Czerwonego Krzyża i służb Adżarii',
    issuer: 'Gruziński Czerwony Krzyż i Departament Turystyki Adżarii',
    scope: 'Gotowość do stabilizacji urazów na szlaku i procedury opieki nad gośćmi w terenie',
  },
];

export const PL_B2B_PARTNER_TYPES = [
  {
    tag: 'DMC i Branża',
    title: 'Biura podróży i agencje DMC',
    summary:
      'Niezawodna obsługa naziemna w Batumi, Adżarii, Kolchidzie, Swanetii i Kazbegi z elastycznymi modelami współpracy B2B.',
    points: [
      'Stawki netto i prowizyjne dla partnerów na trasy od 1 do 5 dni',
      'Zespoły przewodnickie white-label lub co-branded (angielski i gruziński)',
      'Modułowe programy wielodniowe po zachodniej Gruzji i Kaukazie',
    ],
  },
  {
    tag: 'Hotelarstwo',
    title: 'Hotele i concierge w Batumi',
    summary:
      'Gotowe wycieczki codzienne z odbiorem z lobby, natychmiastowym potwierdzeniem i przejrzystymi cenami dla gości hotelowych.',
    points: [
      'Bezpośredni odbiór z hoteli w Batumi oraz 4 centralnych punktów zbiórki',
      'Szybkie potwierdzenia przez WhatsApp i Telegram na ten sam lub kolejny dzień',
      'Zero ukrytych opłat biletowych i gotowe trasy alternatywne na deszcz',
    ],
  },
  {
    tag: 'Firmy',
    title: 'Wyjazdy firmowe i integracyjne',
    summary:
      'Prywatne trekkingi w lasach Kolchidy, biesiady w wioskach, spacery po Batumi i logistyka wielopojazdowa dla zespołów do 16+ osób.',
    points: [
      'Dedykowane sedany, SUV-y 4x4, vany i minibusy Sprinter',
      'Starannie dobrane obiady wiejskie z opcjami wegetariańskimi i dietetycznymi',
      'Umiarkowane tempo od wybrzeża po góry dopasowane do zróżnicowanej kondycji',
    ],
  },
  {
    tag: 'Grupy specjalne',
    title: 'Grupy akademickie, rejsowe i tematyczne',
    summary:
      'Merytoryczne przewodnictwo przyrodnicze i kulturowe dopasowane do godzin zawinięcia statków do portu i harmonogramów uczelni.',
    points: [
      'Interpretacja terenowa lasów deszczowych UNESCO Kolchidy i mokradeł Kolchidy',
      'Wycieczki brzegowe zsynchronizowane z przypłynięciem do portu w Batumi',
      'Standardy bezpieczeństwa GMGA/FMGA oraz Pierwszej Pomocy Czerwonego Krzyża na każdym wyjściu',
    ],
  },
];

export const PL_B2B_GUARANTEES = [
  {
    title: 'Certyfikowane standardy przewodnickie',
    detail: 'Uprawnienia GMGA/FMGA, UNESCO World Natural Heritage, Adventure Tourism School i Pierwszej Pomocy Czerwonego Krzyża.',
  },
  {
    title: 'Wieloosobowa flota pojazdów',
    detail: 'Komfortowe sedany (1–4), vany (1–6), SUV-y 4x4 (1–7) oraz minibusy Sprinter (8–16+ gości).',
  },
  {
    title: 'Zero ukrytych opłat na miejscu',
    detail: 'Każda wycena B2B i dla gości jasno określa świadczenia — np. bilety do Ogrodu Botanicznego czy posiłki.',
  },
  {
    title: 'Aktywne plany pogodowe',
    detail: 'Trasy przygotowane na las deszczowy, suche pojazdy w pogotowiu i kulturowe alternatywy w Adżarii przy zmianie pogody.',
  },
  {
    title: 'Elastyczne warunki 24h',
    detail: 'Standardowe bezpłatne anulowanie do 24 godzin przed wyjazdem na wycieczkach jednodniowych i jasne zasady dla wypraw.',
  },
  {
    title: 'Całodobowe biuro operacyjne 24/7',
    detail: 'Bezpośredni kontakt przez WhatsApp (+995 592 04 30 80) i Telegram (@MinimalismToursGeorgia) do bieżącej dyspozycji.',
  },
];

const PL_DESTINATIONS_MAP: Record<string, Partial<Destination>> = {
  mtirala: {
    name: 'Park Narodowy Mtirala',
    regionLabel: 'Adżaria · Las deszczowy Kolchidy UNESCO',
    tagline: 'Mszyste korony buków, krystaliczne wodospady i ręczna kolejka linowa nad rzeką 45 minut od Morza Czarnego.',
    bestSeason: 'Kwiecień – Listopad (całoroczny dostęp do lasu przybrzeżnego)',
    driveTimeFromBatumi: '~45 min autem 4x4 / vanem',
    elevation: '250m – 1 381m',
    description:
      'Część Światowego Dziedzictwa Przyrodniczego UNESCO Lasy deszczowe i mokradła Kolchidy. Mtirala zatrzymuje wilgotne powietrze znad Morza Czarnego, utrzymując prastare lasy kasztanowe, bukowe i rododendrony pontyjskie nad górskimi rzekami.',
    highlights: [
      'Bioróżnorodność lasu deszczowego Kolchidy z listy UNESCO',
      'Szlak do wodospadu Tsablnari i górskiego jeziora',
      'Tradycyjna przeprawa ręczną kolejką linową nad rzeką',
      '2-dniowy trekking graniowy z noclegiem w drewnianym schronisku',
    ],
  },
  batumi: {
    name: 'Batumi i Zielony Przylądek',
    regionLabel: 'Adżaria · Wybrzeże Morza Czarnego',
    tagline: 'Fasady z epoki Belle Époque, tarasy botaniczne nad morzem i żywe historie portowego miasta.',
    bestSeason: 'Cały rok (łagodny klimat nadmorski)',
    driveTimeFromBatumi: 'Spacer w centrum Batumi · 20 min do Ogrodu Botanicznego',
    elevation: '0m – 160m',
    description:
      'Poza nowoczesnymi wieżowcami kryje się wielowarstwowy port czarnomorski ukształtowany przez kupców naftowych z początku XX wieku, gruzińskich pisarzy, brukowane zaułki Starego Miasta i tarasowe wzgórza Ogrodu Botanicznego w Batumi.',
    highlights: [
      'Dziedzińce Starego Miasta i historia architektury',
      'Plac Europy, pomnik Medei i nadmorski bulwar',
      'Tarasy nadmorskiej flory w Ogrodzie Botanicznym w Batumi',
    ],
  },
  machakhela: {
    name: 'Park Narodowy Machakhela',
    regionLabel: 'Adżaria · Wąwóz i dziedzictwo pogranicza',
    tagline: 'Zalesione wąwozy, średniowieczne kamienne mosty łukowe i spokojne górskie wioski Adżarii.',
    bestSeason: 'Kwiecień – Listopad',
    driveTimeFromBatumi: '~55 min na południowy wschód',
    elevation: '300m – 1 500m',
    description:
      'Ukryta na południowo-zachodnim krańcu Gruzji dolina Machakhela łączy ciche szlaki leśne, kaskadowe wodospady, wielowiekowe tradycje rusznikarskie i rolnicze oraz serdeczną wiejską gościnność.',
    highlights: [
      'Szlaki leśne Góry Archanioła i wąwozu',
      'Wodospad Mirveti i średniowieczny kamienny most Królowej Tamary',
      'Autentyczne wiejskie dziedzictwo Adżarii z dala od tłumów',
    ],
  },
  'green-lake': {
    name: 'Zielone Jezioro (Mtsvane Tba)',
    regionLabel: 'Górna Adżaria · Przełęcz Goderdzi',
    tagline: 'Szmaragdowe jezioro subalpejskie otoczone świerkowymi grzbietami i drewnianymi szałasami pasterskimi.',
    bestSeason: 'Czerwiec – Październik',
    driveTimeFromBatumi: '~3,5 godziny przez Khulo i Goderdzi',
    elevation: '2 058m',
    description:
      'Wysoko ponad dolinami Adżarii w pobliżu przełęczy Goderdzi bogate w minerały wody zachowują turkusowo-szmaragdowy kolor przez całe lato, a rodziny pasterskie wypasają bydło na alpejskich łąkach.',
    highlights: [
      'Subalpejskie jezioro na wysokości 2 058 m n.p.m.',
      'Malowniczy wjazd autem 4x4 przez przełęcz Goderdzi',
      'Dostępne w indywidualnych programach jednodniowych i z noclegiem',
    ],
  },
  kolkheti: {
    name: 'Park Narodowy Kolchidy',
    regionLabel: 'Samegrelo i Guria · Mokradła Paliastomi',
    tagline: 'Spokojne czarne rzeki, reliktowe olsy bagienne i szlaki przelotów ptaków w pobliżu Morza Czarnego.',
    bestSeason: 'Kwiecień – Październik (wiosenne i jesienne migracje ptaków)',
    driveTimeFromBatumi: '~1 godz. 15 min na północ',
    elevation: '0m – 10m',
    description:
      'Wpisany wraz z Mtiralą na listę dziedzictwa UNESCO Park Narodowy Kolchidy chroni pierwotne ekosystemy mokradeł, gdzie drewniane łodzie i ciche ścieżki prowadzą wzdłuż kanału rzeki Pichori.',
    highlights: [
      'Ekosystem Mokradeł Kolchidy z listy UNESCO',
      'Spokojne trasy wodne na jeziorze Paliastomi i rzece Pichori',
      'Prywatne wycieczki przyrodnicze i birdwatching z Batumi',
    ],
  },
  'kazbegi-svaneti': {
    name: 'Kazbegi i Górna Swanetia',
    regionLabel: 'Wielki Kaukaz · Strefa wysokogórska',
    tagline: 'Zlodowacone pięciotysięczniki, alpejskie granie i średniowieczne wioski z kamiennymi wieżami.',
    bestSeason: 'Czerwiec – Wrzesień',
    driveTimeFromBatumi: 'Wielodniowa wyprawa kaukaska (przez Kutaisi / Tbilisi / Mestię)',
    elevation: '1 400m – 5 054m',
    description:
      'Dla doświadczonych piechurów i alpinistów gotowych wyjść poza wybrzeże nasze letnie wyprawy łączą licencjonowane przewodnictwo Adventure Tourism School ze spokojną aklimatyzacją w Swanetii i na górze Kazbek (5 054 m).',
    highlights: [
      '5-dniowa wyprawa z przewodnikiem na szczyt Kazbek (5 054 m)',
      'Lodowiec Gergeti i schronisko Betlemi Hut (3 653 m)',
      'Indywidualne trekkingi graniowe w Swanetii z Mestii do Uszguli',
    ],
  },
};

const PL_REVIEWS_MAP: Record<string, Partial<GuestReview>> = {
  'tripadvisor-2026-11-batumi-waterfalls': {
    title: 'Wodospady koło Batumi',
    quote:
      'Mieliśmy wspaniałe doświadczenie odkrywając piękne wodospady w okolicach Batumi, a ogromna w tym zasługa naszego świetnego przewodnika! Był przyjazny, pełen wiedzy, profesjonalny i chętnie dzielił się ciekawostkami o regionie. Sprawił, że cała wycieczka była komfortowa i niezapomniana. Gorąco polecamy każdemu odwiedzającemu Batumi!',
    authorLabel: 'Recenzent Tripadvisor',
    dateLabel: 'Lis 2026',
    tourTitle: 'Mtirala: Jezioro i Wodospad',
  },
  'viator-2026-11-heavy-weather-refund': {
    title: 'Anulowanie z powodu załamania pogody i pełny zwrot',
    contextNote:
      'Silna prognoza burzowa przed wyjazdem — nasz przewodnik odmówił ryzykowania niebezpiecznego szlaku, doradził odwołanie i zorganizował pełny zwrot środków.',
    quote:
      'Dziękuję za wszystko, pieniądze zostały zwrócone. Kiedy wrócę, na pewno znów się do was zgłoszę i polecę znajomym.',
    authorLabel: 'Gość Viator',
    dateLabel: 'Lis 2026',
    country: 'Litwa',
    tourTitle: 'Mtirala: Jezioro i Wodospad',
  },
  'tripadvisor-2024-07-dream-to-do-again': {
    title: 'Wycieczka, o której marzymy, by ją powtórzyć',
    quote:
      'Spędziliśmy niesamowity czas z naszym przewodnikiem! Brak słów, by opisać ogromną troskę, życzliwość i profesjonalizm — indywidualne podejście, mnóstwo informacji i pełne bezpieczeństwo.',
    authorLabel: 'Recenzent Tripadvisor',
    dateLabel: 'Lip 2024',
    tourTitle: 'Mtirala: Jezioro i Wodospad',
  },
  'whatsapp-2026-07-machakhela-weather-safety': {
    title: 'Uczciwa decyzja o bezpieczeństwie przed rodzinnym trekkingiem',
    contextNote:
      'Silne opady deszczu w górach przed 4-osobową wycieczką rodzinną z dziećmi — nasz przewodnik postawił bezpieczeństwo na pierwszym miejscu i szczerze doradził anulowanie.',
    quote:
      'Dobrze, niestety będziemy musieli odwołać. To naprawdę szkoda, ale dziękujemy za szczerość i profesjonalizm. Bardzo dziękuję za cały wysiłek — to było niezwykle odpowiedzialne z waszej strony.',
    authorLabel: 'Rodzina na trekkingu (4 osoby)',
    dateLabel: 'Lip 2026',
    country: 'Izrael',
    tourTitle: 'Trekking w Wąwozie Machakhela',
  },
  'whatsapp-2026-06-private-group-trip': {
    title: 'Idealna i niezapomniana wycieczka',
    quote:
      'Jesteście absolutnie niesamowici i zasługujecie na wszystkie pochwały. Sprawiliście, że nasza podróż była idealna i niezapomniana.',
    authorLabel: 'Gość grupy prywatnej',
    dateLabel: 'Cze 2026',
    country: 'Izrael',
  },
  'whatsapp-2026-10-rahhalah-b2b': {
    title: 'Profesjonalizm i opieka nad gośćmi w Wysokim Kaukazie',
    contextNote:
      'Wielodniowy program trekkingowy w Wysokim Kaukazie (Juta, Gergeti–Sabertse i Dolina Truso) zrealizowany dla międzynarodowego touroperatora.',
    quote:
      'Naprawdę doceniamy wasz profesjonalizm, wsparcie i opiekę okazaną gościom podczas całego pobytu. Dziękujemy za wszystkie starania — to była świetna wyprawa dzięki wam. Do następnego razu.',
    authorLabel: 'Zespół operacyjny Rahhalah',
    dateLabel: 'Wrz–Paź 2026',
    country: 'ZEA',
    tourTitle: 'Kazbegi i Wysoki Kaukaz',
  },
};

type TourOverride = Partial<Omit<Tour, 'pricingTiers' | 'optionalExtras'>> & {
  pricingTierLabels?: string[];
  optionalExtraIds?: OptionalExtra['id'][];
};

const PL_TOURS_MAP: Record<string, TourOverride> = {
  'mtirala-lake-waterfall-hike': {
    title: 'Z Batumi: Park Narodowy Mtirala UNESCO — Trekking nad Jezioro i Wodospad',
    shortTitle: 'Mtirala: Jezioro i Wodospad',
    statusLabel: 'Natychmiastowa rezerwacja · Codzienne wyjazdy',
    pricingNote: 'Przejrzysta cena grupowa dla 1–16 gości. Bez ukrytych opłat na miejscu.',
    region: 'Park Narodowy Mtirala (Adżaria)',
    duration: '~6 godz. 15 min',
    groupSize: '1–16 gości (prywatnie lub w małej grupie)',
    minAge: 'Wszystkie grupy wiekowe (0–17 lat: 25% zniżki)',
    cardTags: ['Jednodniowy trekking', 'UNESCO Mtirala', '~6 godz. 15 min'],
    summary:
      'Wyrusz z Batumi autem 4x4 do chronionego przez UNESCO lasu deszczowego Kolchidy w Mtirali. Przepraw się ręczną kolejką linową nad rzeką i przejdź malowniczy szlak do wodospadu Tsablnari oraz górskiego jeziora.',
    highlights: [
      'Pradawny las deszczowy Kolchidy z listy UNESCO, 45 minut od wybrzeża Batumi',
      'Tradycyjna przeprawa ręczną kolejką linową nad krystaliczną górską rzeką',
      'Leśny szlak 9 km do wodospadu Tsablnari i szmaragdowego jeziora',
      'Licencjonowany lokalny przewodnik GMGA/FMGA oraz pierwsza pomoc Czerwonego Krzyża',
    ],
    itinerary: [
      {
        timeOrDuration: '09:45 – 10:00',
        title: 'Zbiórka i odbiór w Batumi',
        detail: 'Spotkanie z przewodnikiem na Placu Europy, przy kolejce Argo, w Parku Centralnym lub hotelu Euphoria.',
      },
      {
        timeOrDuration: '~45 min',
        title: 'Przejazd górską drogą do Parku Narodowego Mtirala',
        detail: 'Malownicza droga wzdłuż doliny rzeki Chakvistskali w głąb podzwrotnikowego lasu bukowego i kasztanowego.',
      },
      {
        timeOrDuration: '~3,5 godz.',
        title: 'Trekking do wodospadu i jeziora + kolejka linowa',
        detail: 'Przejście 9 km ścieżkami leśnymi pod mszystymi drzewami, przekroczenie rzeki ręczną kolejką i przerwa na zdjęcia przy wodospadzie.',
      },
      {
        timeOrDuration: '~45 min (opcjonalnie)',
        title: 'Opcjonalne przerwy na życzenie',
        detail: 'Na życzenie grupy postój na lokalny miód górski, tyrolkę, quad ATV lub domowy adżarski obiad w wiosce.',
      },
      {
        timeOrDuration: '~16:15',
        title: 'Powrót do Batumi',
        detail: 'Odwiezienie do pierwotnego miejsca odbioru lub hotelu w centrum Batumi.',
      },
    ],
    included: [
      'Odbiór i powrót w wybranym punkcie w Batumi',
      'Transport górskim SUV-em 4x4 lub vanem z klimatyzacją',
      'Opieka certyfikowanego przewodnika anglo-/gruzińskojęzycznego',
      'Wszystkie opłaty za przejazd i przeprawę ręczną kolejką linową',
    ],
    excluded: [
      'Opcjonalne atrakcje (tyrolka, quad ATV, degustacja miodu, obiad — tylko na życzenie)',
      'Wydatki osobiste i napiwki',
    ],
    optionalExtraIds: ['zipline', 'atv', 'honey', 'propolis', 'lunch'],
    weatherPlan:
      'Mtirala jest lasem deszczowym — lekkie opady tworzą niepowtarzalną mglistą atmosferę. Zapewniamy trasy pod gęstą koroną drzew i suchy transport w pobliżu; przy silnych burzach szlak przekładamy lub zwracamy 100% wpłaty.',
    packingList: [
      'Wygodne buty trekkingowe lub sportowe z dobrą podeszwą',
      'Lekka kurtka przeciwdeszczowa lub peleryna',
      'Woda pitna (min. 1 l) i drobna przekąska',
      'Dodatkowa warstwa odzieży (w górach jest o 4–6°C chłodniej niż w Batumi)',
    ],
    faqs: [
      {
        question: 'Czy szlak jest odpowiedni dla dzieci i początkujących?',
        answer:
          'Tak. Trasa ma łagodne nachylenie i szerokie leśne ścieżki. Tempo dostosowujemy do najmłodszych i seniorów.',
      },
      {
        question: 'Czy można popływać pod wodospadem?',
        answer:
          'Latem (czerwiec–wrzesień) woda w jeziorze górskim i przy wodospadzie jest orzeźwiająco chłodna i krystalicznie czysta — chętni mogą zażyć kąpieli.',
      },
      {
        question: 'Czy można płacić kartą bankową, czy lepiej mieć gotówkę? Gdzie wymienić walutę?',
        answer:
          'W Batumi i wielu restauracjach zapłacisz kartą, ale w górach, wioskach i za opcjonalne atrakcje na miejscu (tyrolka 80 GEL, quad ATV 150 GEL, miód 50 GEL, propolis 40 GEL, obiad z przewodnikiem) znacznie łatwiej płacić gotówką (GEL). Wskazówka lokalnych przewodników: najlepsze kursy wymiany gotówki oferują kantory Rico Credit.',
      },
    ],
    seoDescription:
      'Jednodniowa wycieczka z Batumi do Parku Narodowego Mtirala UNESCO: 9 km leśnego trekkingu, wodospad Tsablnari, ręczna kolejka nad rzeką i certyfikowany przewodnik.',
    keywords: ['Mtirala wycieczka z Batumi', 'Park Narodowy Mtirala trekking', 'wodospad Batumi wycieczka'],
    pricingTierLabels: ['1 Gość (Wycieczka prywatna)', '2–4 Gości (Kameralna grupa)', '5–8 Gości', '9–16 Gości'],
  },
  'mtirala-botanical-garden-tour': {
    title: 'Z Batumi: Park Narodowy Mtirala i Ogród Botaniczny (Bilet w cenie)',
    shortTitle: 'Mtirala + Ogród Botaniczny',
    statusLabel: 'Natychmiastowa rezerwacja · Bilet w cenie',
    pricingNote: 'Bilet wstępu do Ogrodu Botanicznego w Batumi jest już wliczony w cenę.',
    region: 'Mtirala i Zielony Przylądek (Adżaria)',
    duration: '~6 godz. 20 min',
    groupSize: '1–16 gości',
    minAge: 'Wszystkie grupy wiekowe (0–17 lat: 25% zniżki)',
    cardTags: ['Natura i kultura', 'Bilet w cenie', '~6 godz. 20 min'],
    summary:
      'Połącz dwa największe przyrodnicze skarby Adżarii w jeden płynny dzień: dziki las deszczowy Mtirali rano i tarasowy Ogród Botaniczny nad Morzem Czarnym po południu — z biletem wstępu w cenie.',
    highlights: [
      'Wstęp do Ogrodu Botanicznego w Batumi wliczony w cenę bez ukrytych dopłat',
      'Pradawny las kolchidzki w Parku Narodowym Mtirala i wodospad Tsablnari',
      'Panoramiczne tarasy z egzotyczną florą z 9 stref klimatycznych nad brzegiem morza',
      'Wygodny transport door-to-door z Batumi bez konieczności szukania taksówek',
    ],
    itinerary: [
      {
        timeOrDuration: '10:00',
        title: 'Wyjazd z Batumi do Mtirali',
        detail: 'Odbiór z wybranego punktu w Batumi i 45-minutowy przejazd w głąb zielonej doliny.',
      },
      {
        timeOrDuration: '~3 godz.',
        title: 'Spacer i trekking w Parku Narodowym Mtirala',
        detail: 'Szlaki leśne, ręczna kolejka linowa nad rzeką oraz wizyta przy wodospadzie.',
      },
      {
        timeOrDuration: '~2 godz.',
        title: 'Ogród Botaniczny w Batumi (bilet w cenie)',
        detail: 'Spacer z przewodnikiem po nadmorskich tarasach na Zielonym Przylądku z widokiem na zatokę Batumi.',
        ticketNote: 'Bilet wstępu wliczony w cenę wycieczki',
      },
      {
        timeOrDuration: '~16:20',
        title: 'Powrót do centrum Batumi',
        detail: 'Zakończenie w punkcie zbiórki lub w centrum miasta.',
      },
    ],
    included: [
      'Bilet wstępu do Ogrodu Botanicznego w Batumi',
      'Transport z odbiorem i powrotem w Batumi',
      'Opieka certyfikowanego przewodnika',
      'Przeprawa ręczną kolejką linową w Mtirali',
    ],
    excluded: [
      'Meleks elektryczny wewnątrz Ogrodu Botanicznego (opcjonalnie na miejscu)',
      'Obiad i opcjonalne atrakcje w Mtirali (tyrolka, ATV, miód)',
    ],
    optionalExtraIds: ['zipline', 'atv', 'honey', 'propolis', 'lunch'],
    weatherPlan:
      'Oba miejsca znajdują się blisko siebie i oferują naturalne osłony. Przy większym deszczu skracamy pętlę w górach na rzecz osłoniętych alejek Ogrodu Botanicznego.',
    packingList: [
      'Wygodne buty do chodzenia po lesie i alejkach',
      'Lekka kurtka przeciwdeszczowa',
      'Woda i nakrycie głowy w słoneczne dni',
    ],
    faqs: [
      {
        question: 'Czy bilet do Ogrodu Botanicznego naprawdę jest w cenie?',
        answer: 'Tak, bilet wstępu jest w 100% opłacony w cenie wyjazdu — żadnych dodatkowych kolejek przy kasie.',
      },
    ],
    seoDescription:
      'Wycieczka łączona z Batumi: Park Narodowy Mtirala i Ogród Botaniczny w Batumi z biletem wstępu w cenie. Idealna mieszanka gór i morza w Adżarii.',
    keywords: ['Ogród Botaniczny Batumi wycieczka', 'Mtirala i Ogród Botaniczny'],
    pricingTierLabels: ['1 Gość (Prywatnie)', '2–4 Gości', '5–8 Gości', '9–16 Gości'],
  },
  'mtirala-hike-homemade-food': {
    title: 'Park Narodowy Mtirala: Trekking i Domowy Obiad Adżarski',
    shortTitle: 'Mtirala: Szlak + Domowy Obiad',
    statusLabel: 'Natychmiastowa rezerwacja · Obiad w cenie',
    pricingNote: 'Autentyczny domowy obiad adżarski u lokalnych gospodarzy wliczony w cenę.',
    region: 'Mtirala i wioski Adżarii',
    duration: '~7 godz.',
    groupSize: '1–16 gości',
    minAge: 'Wszystkie grupy wiekowe (0–17 lat: 25% zniżki)',
    meals: 'Domowy obiad adżarski w cenie (opcje wegetariańskie)',
    cardTags: ['Trekking kulinarny', 'Obiad w cenie', '~7 godz.'],
    summary:
      'Połącz poranny trekking przez las deszczowy Mtirali z biesiadą przy rodzinnym stole w adżarskiej wiosce — świeże chaczapuri, sery z gór, sezonowe warzywa i lokalne wino lub napary.',
    highlights: [
      'Pełny domowy obiad adżarski przygotowany ze świeżych produktów z gospodarstwa (dostępne menu wegetariańskie)',
      'Szlaki lasu deszczowego UNESCO w Mtirali i wodospad Tsablnari',
      'Bezpośrednie spotkanie z lokalną rodziną z dala od restauracji nastawionych na masową turystykę',
      'Komfortowy transport 4x4 z Batumi i z powrotem',
    ],
    itinerary: [
      {
        timeOrDuration: '10:00',
        title: 'Odbiór w Batumi i wyjazd w góry',
        detail: 'Przejazd z centrum Batumi w kierunku doliny rzeki Chakvistskali.',
      },
      {
        timeOrDuration: '~3 godz.',
        title: 'Trekking w Mtirali do wodospadu i jeziora',
        detail: 'Przejście malowniczą trasą leśną z przewodnikiem oraz przeprawa kolejką nad rzeką.',
      },
      {
        timeOrDuration: '~1,5 godz.',
        title: 'Domowy obiad adżarski w wiosce',
        detail: 'Ciepły posiłek u zaprzyjaźnionej rodziny: lokalne sery, pieczywo, dania z bakłażana i orzechów, sałatki i napoje.',
      },
      {
        timeOrDuration: '~17:00',
        title: 'Powrót do Batumi',
        detail: 'Spokojny zjazd nad Morze Czarne i powrót do miejsca zbiórki.',
      },
    ],
    included: [
      'Domowy obiad adżarski w wiosce (również w wersji wegetariańskiej)',
      'Transport z odbiorem i powrotem w Batumi',
      'Opieka certyfikowanego przewodnika',
      'Przeprawa kolejką linową nad rzeką w Mtirali',
    ],
    excluded: [
      'Opcjonalne atrakcje dodatkowe (tyrolka, quad ATV)',
      'Wydatki osobiste',
    ],
    optionalExtraIds: ['zipline', 'atv', 'honey', 'propolis'],
    weatherPlan:
      'Obiad odbywa się pod zadaszoną, przytulną werandą lub w domu gospodarzy — nawet deszczowy dzień w górach kończy się przy ciepłym stole.',
    packingList: [
      'Wygodne buty trekkingowe',
      'Kurtka przeciwdeszczowa',
      'Informacja o alergiach lub diecie wegetariańskiej przy rezerwacji',
    ],
    faqs: [
      {
        question: 'Czy przygotowujecie wersję wegetariańską lub bezmięsną?',
        answer: 'Tak, kuchnia adżarska słynie ze wspaniałych dań warzywnych z pastą orzechową, serów i wypieków.',
      },
    ],
    seoDescription:
      'Trekking w Parku Narodowym Mtirala połączony z domowym obiadem adżarskim u lokalnych gospodarzy. Opcje wegetariańskie, transport 4x4 z Batumi.',
    keywords: ['Mtirala obiad wycieczka', 'kuchnia adżarska wycieczka Batumi'],
    pricingTierLabels: ['1 Gość (Prywatnie)', '2–4 Gości', '5–8 Gości', '9–16 Gości'],
  },
  'machakhela-guided-hiking': {
    title: 'Park Narodowy Machakhela: Trekking Wąwozem, Wodospad Mirveti i Most Królowej Tamary',
    shortTitle: 'Trekking w Wąwozie Machakhela',
    statusLabel: 'Natychmiastowa rezerwacja · Codzienne wyjazdy',
    pricingNote: 'Przejrzyste stawki grupowe bez ukrytych dopłat.',
    region: 'Park Narodowy Machakhela (Adżaria)',
    duration: '~6 godz.',
    groupSize: '1–16 gości',
    minAge: 'Wszystkie grupy wiekowe (0–17 lat: 25% zniżki)',
    cardTags: ['Jednodniowy trekking', 'Wodospad i mosty', '~6 godz.'],
    summary:
      'Odkryj zielone pogranicze Adżarii: średniowieczny kamienny most Królowej Tamary, ukryty wodospad Mirveti w lesie bukszpanowym oraz ciche górskie szlaki Parku Narodowego Machakhela.',
    highlights: [
      'Średniowieczny kamienny most łukowy Królowej Tamary nad górską rzeką',
      'Malowniczy wodospad Mirveti ukryty w omszałym lesie bukszpanowym',
      'Spokojne szlaki Parku Narodowego Machakhela z dala od zgiełku miasta',
      'Opowieści o lokalnej historii, pszczelarstwie i tradycjach pogranicza',
    ],
    itinerary: [
      {
        timeOrDuration: '10:00',
        title: 'Wyjazd z Batumi w dolinę Chorokhi',
        detail: 'Przejazd południową trasą widokową wzdłuż największej rzeki Adżarii.',
      },
      {
        timeOrDuration: '~1 godz.',
        title: 'Wodospad Mirveti i kamienny most',
        detail: 'Krótki spacer przez most wiszący i zagajnik bukszpanowy do kaskady Mirveti oraz zabytkowego mostu łukowego.',
      },
      {
        timeOrDuration: '~3 godz.',
        title: 'Trekking w Parku Narodowym Machakhela',
        detail: 'Wędrówka leśnymi grzbietami i punktami widokowymi w sercu parku narodowego.',
      },
      {
        timeOrDuration: '~16:00',
        title: 'Powrót do Batumi',
        detail: 'Powrót do centrum Batumi w godzinach popołudniowych.',
      },
    ],
    included: [
      'Odbiór i powrót w Batumi',
      'Transport z klimatyzacją',
      'Certyfikowany przewodnik górski',
    ],
    excluded: [
      'Posiłki i napoje (możliwość postoju w lokalnej restauracji na życzenie)',
      'Wydatki osobiste',
    ],
    weatherPlan:
      'W razie prognozy ulewnych burz w wąwozie szlak przekładamy lub oferujemy bezpieczny spacer kulturowy po wybrzeżu albo bezpłatne anulowanie.',
    packingList: [
      'Buty sportowe lub trekkingowe',
      'Woda pitna',
      'Lekka kurtka na wypadek przelotnego deszczu',
    ],
    faqs: [
      {
        question: 'Czym Machakhela różni się od Mtirali?',
        answer:
          'Machakhela jest bardziej otwarta i pełna zabytków — kamiennych mostów, historii wiosek pogranicza i widoków na wąwóz, podczas gdy Mtirala to gęsty, wilgotny las deszczowy.',
      },
    ],
    seoDescription:
      'Wycieczka trekkingowa z Batumi do Parku Narodowego Machakhela: wodospad Mirveti, średniowieczny most Królowej Tamary i górskie szlaki Adżarii.',
    keywords: ['Machakhela wycieczka z Batumi', 'wodospad Mirveti Batumi'],
    pricingTierLabels: ['1 Gość (Prywatnie)', '2–4 Gości', '5–8 Gości', '9–16 Gości'],
  },
  'batumi-architecture-walking-tour': {
    title: 'Spacer po Starym Batumi: Architektura, Podwórka i Historie Miasta',
    shortTitle: 'Spacer Architektoniczny Batumi',
    statusLabel: 'Całoroczny · Wyjazdy codziennie',
    pricingNote: 'Najbardziej przystępny cenowo sposób na poznanie prawdziwej historii Batumi.',
    region: 'Stare Batumi i Bulwar Nadmorski',
    duration: '~3 godz.',
    groupSize: '1–16 gości',
    minAge: 'Wszystkie grupy wiekowe (0–17 lat: 25% zniżki)',
    cardTags: ['Spacer miejski', 'Cały rok', '~3 godz.'],
    summary:
      'Zejdź z głównego deptaku w ukryte podwórka Starego Batumi. Poznaj XIX-wieczne kamienice kupców naftowych, secesyjne fasady, legendę o Medei i przemianę portu nad Morzem Czarnym.',
    highlights: [
      'Ukryte wewnętrzne podwórka Starego Batumi z drewnianymi balkonami',
      'Secesyjne i neoklasycystyczne fasady z przełomu XIX i XX wieku',
      'Plac Europy, Plac Piazza, meczet Orta Jame i kościoły różnych wyznań',
      'Nadmorski Bulwar Batumi i opowieści o dawnym porcie wolnocłowym',
    ],
    itinerary: [
      {
        timeOrDuration: '10:00 (lub popołudnie)',
        title: 'Spotkanie na Placu Europy',
        detail: 'Wprowadzenie do historii Batumi pod pomnikiem Medei i Złotego Runa.',
      },
      {
        timeOrDuration: '~1,5 godz.',
        title: 'Zaułki i podwórka Starego Miasta',
        detail: 'Odkrywanie zabytkowych kamienic, dzielnicy tureckiej, dawnych konsulatów i kawiarni.',
      },
      {
        timeOrDuration: '~1 godz.',
        title: 'Nadmorski Bulwar i okolice portu',
        detail: 'Spacer aleją palmową, latarnia morska, Ali i Nino oraz współczesna panorama wybrzeża.',
      },
    ],
    included: [
      '3-godzinny spacer z licencjonowanym lokalnym przewodnikiem',
      'Rekomendacje najlepszych kawiarni, piekarni i restauracji w Batumi',
    ],
    excluded: [
      'Kawa, przekąski i bilety do opcjonalnych muzeów',
    ],
    weatherPlan:
      'Spacer miejski odbywa się przez cały rok; przy przelotnym deszczu trasa wykorzystuje zadaszone arkady i klimatyczne kawiarnie.',
    packingList: [
      'Wygodne obuwie miejskie',
      'Woda oraz parasolka lub lekka kurtka w razie zmiennej pogody',
    ],
    faqs: [
      {
        question: 'Czy spacer nadaje się jako pierwsza aktywność po przylocie do Batumi?',
        answer: 'Tak — daje świetną orientację w mieście, jego historii i praktycznych miejscach na resztę pobytu.',
      },
    ],
    seoDescription:
      'Piesza wycieczka z przewodnikiem po Starym Batumi: zabytkowa architektura, ukryte podwórka, Plac Europy i Bulwar Nadmorski.',
    keywords: ['zwiedzanie Batumi przewodnik', 'Stare Batumi spacer'],
    pricingTierLabels: ['1 Gość (Prywatnie)', '2–4 Gości', '5–8 Gości', '9–16 Gości'],
  },
  'mtirala-2-day-shelter-hike': {
    title: 'Mtirala 2-Dniowy Trekking z Noclegiem w Górskim Schronisku (17 km)',
    shortTitle: 'Mtirala 2-Dniowy Trekking',
    statusLabel: 'Wyprawa sezonowa · Kwiecień–Październik',
    pricingNote: 'Nocleg w górskim drewnianym schronisku w sercu lasu deszczowego.',
    region: 'Granie Parku Narodowego Mtirala',
    duration: '2 dni / 1 noc',
    groupSize: '2–10 gości',
    minAge: 'Od 14 lat (dobra kondycja)',
    cardTags: ['Trekking wielodniowy', '2 dni / 1 noc', 'Schronisko górskie'],
    summary:
      'Zostaw miasto daleko za sobą podczas dwudniowej wyprawy przez mgliste lasy bukowe Mtirali z noclegiem w drewnianym schronisku na wysokości ponad 1 000 m n.p.m.',
    highlights: [
      'Pełna pętla 17 km z dala od jednodniowych tras turystycznych',
      'Nocleg w drewnianym schronisku typu A-frame pośród pradawnych buków',
      'Wieczór przy ognisku, gwiazdy nad górami Adżarii i poranek we mgle',
      'Certyfikowany przewodnik górski i wsparcie logistyczne z Batumi',
    ],
    itinerary: [
      {
        timeOrDuration: 'Dzień 1',
        title: 'Wejście z doliny do schroniska w lesie bukowym',
        detail: 'Przejazd z Batumi, podejście szlakiem przez las kolchidzki i rozbicie obozu w drewnianym schronisku.',
      },
      {
        timeOrDuration: 'Dzień 2',
        title: 'Zejście granią przez wodospady i powrót do Batumi',
        detail: 'Poranna kawa w górach, zejście alternatywną trasą leśną i powrót nad morze po południu.',
      },
    ],
    included: [
      'Transfer z Batumi i z powrotem',
      'Opieka certyfikowanego przewodnika GMGA/FMGA przez 2 dni',
      'Rezerwacja noclegu w schronisku górskim',
    ],
    excluded: [
      'Śpiwór i karimata (możliwość wypożyczenia na życzenie)',
      'Wyżywienie na szlaku (ustalamy listę zakupów lub pakiet prowiantowy)',
    ],
    weatherPlan:
      'Przy prognozie burz na grani trasę przekładamy na bezpieczny termin lub zamieniamy na nocleg w pensjonacie w dolinie.',
    packingList: [
      'Solidne buty trekkingowe za kostkę',
      'Plecak 35–45 l, ciepła bluza, kurtka przeciwdeszczowa',
      'Czołówka i osobista butelka na wodę',
    ],
    faqs: [
      {
        question: 'Czy w schronisku są łóżka?',
        answer: 'Tak, drewniane schronisko posiada prycze/miejsca do spania pod dachem — potrzebny jest własny lub wypożyczony śpiwór.',
      },
    ],
    seoDescription:
      '2-dniowy trekking w Parku Narodowym Mtirala z noclegiem w drewnianym schronisku górskim. 17 km dzikiego lasu kolchidzkiego z przewodnikiem z Batumi.',
    keywords: ['Mtirala 2 dni nocleg', 'trekking wielodniowy Adżaria'],
    pricingTierLabels: ['2 Gości', '3–4 Gości', '5–8 Gości', '9–10 Gości'],
  },
  'kazbegi-mount-kazbek-expedition': {
    title: 'Wyprawa na Kazbek (5 054 m): 5-Dniowy Alpejski Szczyt w Wielkim Kaukazie',
    shortTitle: 'Kazbek (5 054 m) 5-Dniowa Wyprawa',
    statusLabel: 'Lato 2026–2027 · Czerwiec–Wrzesień',
    pricingNote: 'Wycena indywidualna w zależności od liczby osób i terminu.',
    quoteLabel: 'Wyprawa alpejska',
    region: 'Stepancminda / Kazbegi (Wielki Kaukaz)',
    duration: '5 dni / 4 noce',
    groupSize: '1–8 alpinistów',
    minAge: 'Od 18 lat (wymagana dobra kondycja)',
    season: 'Czerwiec – Wrzesień',
    cardTags: ['Wyprawa alpejska', '5 dni', '5 054 m'],
    summary:
      'Bezpieczne, dobrze zaplanowane wejście na jeden z najsłynniejszych pięciotysięczników Kaukazu — Górę Kazbek (5 054 m) przez klasztor Gergeti, lodowiec i stację meteo Betlemi Hut (3 653 m).',
    highlights: [
      'Prowadzenie przez certyfikowanego przewodnika wysokogórskiego GMGA',
      'Przemyślana aklimatyzacja w Stepancmindzie (1 740 m) i Betlemi Hut (3 653 m)',
      'Przejście lodowcem Gergeti w zespołach linowych',
      'Pełna koordynacja logistyki naziemnej w Gruzji',
    ],
    itinerary: [
      { timeOrDuration: 'Dzień 1', title: 'Stepancminda i wyjście aklimatyzacyjne do Gergeti', detail: 'Spotkanie z przewodnikiem i podejście powyżej klasztoru Cminda Sameba.' },
      { timeOrDuration: 'Dzień 2', title: 'Podejście do Betlemi Hut (3 653 m)', detail: 'Przejście przez przełęcz Sabertse i skraj lodowca Gergeti do stacji wysokogórskiej.' },
      { timeOrDuration: 'Dzień 3', title: 'Dzień aklimatyzacyjny i trening lodowcowy', detail: 'Ćwiczenia z rakami, czekanem i asekuracją na lodowcu oraz podejście do kapliczki na 4 000 m.' },
      { timeOrDuration: 'Dzień 4', title: 'Atak szczytowy na Kazbek (5 054 m)', detail: 'Wyjście nocą (ok. 02:00), wejście na wierzchołek i zejście do schroniska.' },
      { timeOrDuration: 'Dzień 5', title: 'Zejście do Stepancmindy', detail: 'Powrót doliną do cywilizacji i zakończenie wyprawy.' },
    ],
    included: [
      'Certyfikowany przewodnik wysokogórski (maks. 1:3 na ataku szczytowym)',
      'Sprzęt zespołowy (liny, karabinki, śruby lodowe)',
      'Logistyka i wsparcie przed wyprawą',
    ],
    excluded: [
      'Noclegi w schronisku i wyżywienie w górach',
      'Osobisty sprzęt alpinistyczny (możliwość wypożyczenia w Stepancmindzie)',
      'Obowiązkowe ubezpieczenie wysokogórskie powyżej 5 000 m',
    ],
    weatherPlan:
      'Okno pogodowe ma najwyższy priorytet na wysokości powyżej 4 000 m — harmonogram uwzględnia dzień zapasowy i decyzję przewodnika o bezpieczeństwie.',
    packingList: [
      'Buty wysokogórskie pod raki półautomatyczne lub automatyczne',
      'Kurtka i spodnie hardshell (Gore-Tex), ciepła puchówka',
      'Raki, czekan, uprząż, kask (dostępne do wypożyczenia)',
    ],
    faqs: [
      {
        question: 'Czy potrzebuję doświadczenia z rakami i czekanem?',
        answer: 'Podstawowe doświadczenie w górach zimą jest dużym plusem; 3. dnia wyprawy prowadzimy obowiązkowe szkolenie lodowcowe.',
      },
    ],
    seoDescription:
      '5-dniowa wyprawa z przewodnikiem na Górę Kazbek (5 054 m) w Gruzji. Bezpieczna aklimatyzacja, lodowiec Gergeti i certyfikowani przewodnicy GMGA.',
    keywords: ['Kazbek wyprawa z przewodnikiem', 'wejście na Kazbek 5054'],
  },
  'student-beginner-ski-bakuriani': {
    title: 'Program dla grup studenckich i początkujących: Narty w Bakuriani i Kultura Batumi (8 Dni / 7 Nocy)',
    shortTitle: 'Studencki Obóz Narciarski Bakuriani (8 Dni)',
    statusLabel: 'Program grupowy · Zima / Wczesna wiosna',
    pricingNote: 'Specjalne pakiety grupowe dla uczelni, grup studenckich i początkujących narciarzy.',
    quoteLabel: 'Program grupowy 8 dni',
    region: 'Bakuriani i Batumi',
    duration: '8 dni / 7 nocy',
    groupSize: '15–45 gości (grupy zorganizowane)',
    minAge: '18+ (grupy studenckie i młodzieżowe)',
    meals: 'Pełne wyżywienie (3 posiłki dziennie)',
    season: 'Grudzień – Marzec',
    cardTags: ['Grupy studenckie', '8 dni / 7 nocy', 'Pełne wyżywienie'],
    summary:
      'Kompleksowy 8-dniowy wyjazd łączący naukę jazdy na nartach w łagodnym kurorcie Bakuriani z pełnym wyżywieniem, opieką przewodników i odkrywaniem czarnomorskiego Batumi.',
    highlights: [
      '5 dni na łagodnych stokach Bakuriani idealnych dla początkujących',
      'Pełne wyżywienie (3 posiłki dziennie) oraz zakwaterowanie w hotelu',
      'Zwiedzanie Batumi i wybrzeża Morza Czarnego',
      'Pełna opieka logistyczna, transfery i obsługa grupy od przylotu do wylotu',
    ],
    itinerary: [
      { timeOrDuration: 'Dzień 1', title: 'Przylot i zakwaterowanie', detail: 'Odbiór grupy z lotniska i transfer do hotelu.' },
      { timeOrDuration: 'Dni 2–6', title: 'Szkolenie narciarskie w Bakuriani', detail: 'Codzienne zajęcia na stoku, wypożyczenie sprzętu i wieczorne integracje.' },
      { timeOrDuration: 'Dzień 7', title: 'Wybrzeże Batumi', detail: 'Zwiedzanie Starego Batumi i pożegnalna kolacja gruzińska.' },
      { timeOrDuration: 'Dzień 8', title: 'Transfer na lotnisko', detail: 'Zakończenie programu i odlot.' },
    ],
    included: [
      'Zakwaterowanie na 7 nocy z pełnym wyżywieniem (3 posiłki dziennie)',
      'Wszystkie transfery grupowe prywatnym autokarem/minibusem',
      'Opieka koordynatora i przewodników przez cały wyjazd',
    ],
    excluded: [
      'Bilety lotnicze i ubezpieczenie narciarskie',
      'Karnety i wypożyczenie sprzętu (wyceniane w pakiecie według rozmiaru grupy)',
    ],
    weatherPlan: 'Stoki w Bakuriani są naśnieżane; w razie załamania pogody organizujemy wycieczki do Borjomi i twierdzy Rabati.',
    packingList: ['Kurtka i spodnie narciarskie', 'Rękawice, gogle i krem z filtrem UV'],
    faqs: [
      {
        question: 'Czy wyjazd nadaje się dla osób, które nigdy nie stały na nartach?',
        answer: 'Tak, cały program jest zaprojektowany specjalnie dla początkujących.',
      },
    ],
    seoDescription:
      '8-dniowy program narciarski w Bakuriani dla grup studenckich i początkujących z pełnym wyżywieniem i zwiedzaniem Batumi.',
    keywords: ['Bakuriani narty dla grup', 'wyjazd studencki Gruzja'],
  },
  'jorunners-mountain-lodge-program': {
    title: 'Program Biegowo-Trekkingowy Jorunners: 8 Dni / 7 Nocy w Górskich Schroniskach (Pełne Wyżywienie)',
    shortTitle: 'Jorunners: Górski Obóz 8 Dni',
    statusLabel: 'Program grupowy · Lato / Jesień',
    pricingNote: 'Dwie dopracowane trasy (~50 km łatwych szlaków) z pełnym wyżywieniem.',
    quoteLabel: 'Program grupowy 8 dni',
    region: 'Kazbegi (Stepancminda) lub Swanetia (Mestia–Uszguli)',
    duration: '8 dni / 7 nocy',
    groupSize: '8–24 gości',
    minAge: '18+ (dla biegaczy trailowych i piechurów)',
    meals: 'Pełne wyżywienie (3 posiłki dziennie)',
    season: 'Maj – Październik',
    cardTags: ['Biegi i trekking', '8 dni / 7 nocy', 'Pełne wyżywienie'],
    summary:
      '8-dniowy program górski (~50 km malowniczych tras o łagodnym przewyższeniu) zaprojektowany dla klubów biegowych i grup aktywnych z pełnym wyżywieniem oraz zakwaterowaniem w górskich pensjonatach.',
    highlights: [
      'Do wyboru 2 sprawdzone trasy: Opcja A (Baza w Kazbegi) lub Opcja B (Swanetia: Mestia–Uszguli)',
      'Łącznie ~50 km widokowych górskich ścieżek w komfortowym tempie',
      'Pełne wyżywienie (3 domowe posiłki dziennie) wspierające regenerację',
      'Wsparcie samochodami 4x4, transport bagażu i certyfikowani przewodnicy',
    ],
    itinerary: [
      { timeOrDuration: 'Dzień 1', title: 'Przylot i transfer w góry', detail: 'Przejazd w Kaukaz i odprawa trasowa przy kolacji.' },
      { timeOrDuration: 'Dni 2–6', title: '5 dni biegów i wędrówek widokowych', detail: 'Codzienne odcinki po 8–12 km dolinami i grzbietami z wozem wsparcia.' },
      { timeOrDuration: 'Dzień 7', title: 'Powrót do Tbilisi / Batumi i wieczór finałowy', detail: 'Relaks po tygodniu w górach i uroczysta kolacja.' },
      { timeOrDuration: 'Dzień 8', title: 'Wylot', detail: 'Transfer na lotnisko.' },
    ],
    included: [
      '7 noclegów w górskich pensjonatach/schroniskach z pełnym wyżywieniem',
      'Transport bagażu i transfery na całej trasie',
      'Opieka certyfikowanych przewodników terenowych',
    ],
    excluded: ['Bilety lotnicze i ubezpieczenie sportowe'],
    weatherPlan: 'Elastyczna modyfikacja dziennych odcinków dolinowych przy gorszej pogodzie.',
    packingList: ['Buty do biegania w terenie lub lekkie buty trekkingowe', 'Kamizelka biegowa i lekka kurtka wiatroodporna'],
    faqs: [
      {
        question: 'Czym różnią się Opcja A i Opcja B?',
        answer: 'Opcja A to stała baza w Stepancmindzie (bez codziennego pakowania walizek); Opcja B to klasyczny trekking od wioski do wioski z Mestii do Uszguli (czerwiec–wrzesień).',
      },
    ],
    seoDescription:
      '8-dniowy górski obóz biegowo-trekkingowy w Gruzji (Kazbegi lub Swanetia) z pełnym wyżywieniem i obsługą logistyczną.',
    keywords: ['obóz biegowy Gruzja', 'Jorunners Kaukaz'],
  },
};

export function getToursForLang(lang: Lang): Tour[] {
  if (lang !== 'pl') return TOURS;
  return TOURS.map((tour) => {
    const ov = PL_TOURS_MAP[tour.slug];
    if (!ov) return tour;
    return {
      ...tour,
      ...ov,
      pricingTiers: tour.pricingTiers.map((tier, idx) => ({
        ...tier,
        label: ov.pricingTierLabels?.[idx] || tier.label,
      })),
      optionalExtras: ov.optionalExtraIds
        ? ov.optionalExtraIds.map((id) => PL_MTIRALA_OPTIONAL_EXTRAS[id])
        : tour.optionalExtras,
    };
  });
}

export function getTourForLang(slug: string, lang: Lang): Tour | undefined {
  return getToursForLang(lang).find((t) => t.slug === slug);
}

export function getDestinationsForLang(lang: Lang): Destination[] {
  if (lang !== 'pl') return DESTINATIONS;
  return DESTINATIONS.map((d) => ({
    ...d,
    ...(PL_DESTINATIONS_MAP[d.slug] || {}),
  }));
}

export function getReviewsForLang(lang: Lang): GuestReview[] {
  if (lang !== 'pl') return GUEST_REVIEWS;
  return GUEST_REVIEWS.map((r) => ({
    ...r,
    ...(PL_REVIEWS_MAP[r.id] || {}),
  }));
}
