# Publish Free with GitHub Desktop & GitHub Pages

You do **not** need paid hosting or a paid domain to put **Minimalism Tours Georgia** live on the internet. Follow these steps once — after that, every commit you push in **GitHub Desktop** automatically updates your live site in ~60 seconds.

---

## Step 1: Connect This Folder in GitHub Desktop
1. Open **GitHub Desktop** on your Mac and sign in to your GitHub account.
2. In the menu bar click **File → Add Local Repository...** (or press `⌘O`).
3. Click **Choose...** and select:
   `/Users/bekage/Downloads/🤖 AI & Technology/Gemini/minimalismtoursgeorgia`
4. Click **Add Repository**.
5. Click **Publish repository** in the top bar:
   - **Name:** `minimalismtoursgeorgia`
   - Uncheck **"Keep this code private"** (GitHub Pages free hosting on personal accounts works cleanly on public repositories).
   - Click **Publish Repository**.

---

## Step 2: Turn On Free GitHub Pages Hosting
1. Click **Repository → View on GitHub** (`⇧⌘G`) in GitHub Desktop to open your repository in your browser.
2. Go to **Settings → Pages** (left sidebar).
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Wait ~1 minute and check the **Actions** tab — you will see **"Deploy Minimalism Tours Georgia to GitHub Pages"** turn green and show your live free URL, such as:
   `https://<your-github-username>.github.io/minimalismtoursgeorgia/`

*(If your Actions run didn't trigger on the first publish, click **Actions → Deploy Minimalism Tours Georgia to GitHub Pages → Run workflow** once.)*

---

## Step 3: Everyday Updates via GitHub Desktop
Whenever you change tour prices in `src/data/tours.ts` or add new photos into `public/images/`:
1. Open **GitHub Desktop** — it automatically lists modified files on the left.
2. Write a short Summary (e.g. `Update summer Kazbek schedule`), click **Commit to main**, then click **Push origin**.
3. GitHub rebuilds and deploys your changes automatically!

---

## Step 4 (Later): Connecting Your Custom Domain & Google Search Console
Whenever you buy a domain (for example `minimalismtoursgeorgia.com`):
1. Open your GitHub repository → **Settings → Pages → Custom domain**, enter `minimalismtoursgeorgia.com`, and click **Save** (turn on **Enforce HTTPS** once DNS finishes).
2. Add GitHub's 4 `A` DNS records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) plus a `www` `CNAME` record pointing to `<your-github-username>.github.io` at your domain registrar.
3. Re-run the **Actions** workflow (or push a tiny edit) — `.github/workflows/deploy.yml` automatically updates all canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml` to your custom domain!
4. Verify your live URL in **Google Search Console** and submit `sitemap.xml` so Google indexes every English tour page and `/ka/` Georgian page.
