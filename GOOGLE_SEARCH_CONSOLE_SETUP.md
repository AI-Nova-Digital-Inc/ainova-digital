# Google Search Console Setup — ainovadigital.ca

## Step 1: Add Your Property

1. Go to https://search.google.com/search-console/welcome
2. Under **"URL prefix"** (right box), enter: `https://ainovadigital.ca/`
3. Click **Continue**

> Use "URL prefix" — not "Domain". Easier to verify.

---

## Step 2: Verify Ownership

1. In the "Verify ownership" dialog, scroll past "HTML file" (recommended)
2. Click **"HTML tag"** to expand it
3. Google shows a tag like:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXX" />
   ```
4. Copy that tag and paste it into `index.html` inside `<head>`, after the `<meta charset>` line
5. Run:
   ```bash
   npm run build
   git add index.html
   git commit -m "add Google Search Console verification tag"
   git push origin main
   ```
6. Wait ~2 minutes for GitHub Pages to redeploy
7. Back in Search Console, click **Verify**
8. You should see **"Ownership verified"** (green banner)
9. Click **Go to Property**

---

## Step 3: Submit Your Sitemap

1. In Search Console left sidebar → **Sitemaps**
2. In the input box, type: `sitemap.xml`
   - The field already shows `https://ainovadigital.ca/` as prefix — just add `sitemap.xml`
3. Click **Submit**

> Status will show **"Couldn't fetch"** initially — this is normal for a new sitemap. Google crawls it within 24–48 hours automatically. No action needed.

If still "Couldn't fetch" after 48 hours:
- URL Inspection → enter `https://ainovadigital.ca/sitemap.xml` → Request Indexing
- Then resubmit the sitemap

---

## Step 4: Request Indexing of Homepage

1. Search Console → **URL Inspection** (search bar at top)
2. Enter: `https://ainovadigital.ca/`
3. Click **Request Indexing**

Tells Google to crawl immediately instead of waiting.

---

## Step 5: Also Submit to Bing (~10% of search traffic)

1. Go to https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Add site: `https://ainovadigital.ca/`
4. Submit sitemap: `https://ainovadigital.ca/sitemap.xml`

---

## What to Check After 1–2 Weeks

| Metric | Where to Find It |
|---|---|
| Pages indexed | Search Console → **Pages** |
| Search queries showing your site | Search Console → **Performance** |
| Crawl errors | Search Console → **Pages** → "Why pages aren't indexed" |
| Core Web Vitals | Search Console → **Core Web Vitals** |

---

## Notes

- Full indexing takes **1–4 weeks** for a new domain
- `ainovadigital.ca` is ~2 weeks old — Google may have already started crawling it
- Never remove the verification meta tag from `index.html` — losing it de-verifies the property
- Schema.org structured data is already live in `index.html` — helps Google understand the business type
