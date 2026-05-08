# Google Search Console Setup Guide — The Flooring Folks

## Step 1: Add Property to Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **Add Property** (top-left dropdown)
4. Select **URL prefix**
5. Enter: `https://theflooringfolks.com`
6. Click **Continue**

## Step 2: Verify Ownership via HTML Tag

1. In the verification dialog, select **HTML tag**
2. Google will show a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
3. Copy the verification code (the value after `content="`)

## Step 3: Add Verification Code to the Website

1. Open `src/app/layout.tsx`
2. In the `metadata` export, add the `verification` field:

```tsx
export const metadata: Metadata = {
  // ... existing metadata ...
  verification: {
    google: "YOUR_VERIFICATION_CODE",
  },
};
```

3. Replace `YOUR_VERIFICATION_CODE` with the code from Step 2
4. Commit and deploy the site

## Step 4: Confirm Verification

1. Go back to Search Console
2. Click **Verify**
3. Google will check for the meta tag on your live site
4. You should see **Ownership verified** ✅

> **Note:** If verification fails, wait 5-10 minutes for the deployment to complete, then try again.

## Step 5: Submit Sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml` in the "Add a new sitemap" field
3. Click **Submit**
4. The sitemap URL is: `https://theflooringfolks.com/sitemap.xml`

The site has 34 pages including:
- 1 Homepage
- 8 Service pages
- 6 City pages
- 5 Blog articles
- Static pages (contact, about, etc.)

## Step 6: Request Indexing

1. Use the **URL Inspection** tool (top bar) to test key pages
2. Click **Request Indexing** for each important page
3. Priority pages to index first:
   - `https://theflooringfolks.com/` (homepage)
   - `https://theflooringfolks.com/services/` (services overview)
   - Individual service pages
   - City pages
   - Blog articles

## What to Expect

- **First 1-3 days:** Google crawls the sitemap
- **First 1-2 weeks:** Pages start appearing in search results
- **After 30 days:** Use the **Performance** report to see impressions, clicks, and average position
- The `robots.txt` and `canonical` URLs are already configured on the site

---

**Status:** The site is fully ready for Search Console verification. Just add the verification code to `layout.tsx` metadata and deploy.
