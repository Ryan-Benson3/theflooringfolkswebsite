# Google Analytics 4 (GA4) Setup Guide — The Flooring Folks

## Step 1: Create a GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click **Admin** (gear icon, bottom-left)
4. Click **Create Property**
5. Enter:
   - **Property name:** `The Flooring Folks`
   - **Time zone:** `Central Time (US)`
   - **Currency:** `US Dollar`
6. Click **Next** → fill in business info → click **Create**
7. Accept the Terms of Service

## Step 2: Set Up a Web Data Stream

1. In the property you just created, click **Data Streams** → **Web**
2. Enter:
   - **Website URL:** `https://theflooringfolks.com`
   - **Stream name:** `The Flooring Folks Website`
3. Click **Create stream**
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 3: Add Measurement ID to the Website

1. Open `src/app/layout.tsx`
2. Find this line near the top:

```tsx
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Commit and deploy — analytics will start tracking immediately

## Step 4: Set Up Conversion Events

After GA4 starts collecting data (usually within 24 hours), set up these key conversion events:

### A. Phone Call Clicks

In GA4 Admin → **Events** → **Create Event**:
- **Event name:** `phone_click`
- **Matching conditions:**
  - `event_name` equals `click`
  - `link_url` contains `tel:`
- Mark as **Conversion**

> **Note:** You'll need to add click tracking to phone links. Add this to any phone link component:
> ```tsx
> onClick={() => window.gtag?.("event", "phone_click", { phone_number: "(262) 327-3989" })}
> ```

### B. Form Submissions

In GA4 Admin → **Events** → **Create Event**:
- **Event name:** `generate_lead`
- Mark as **Conversion**

> **Note:** Fire this event when a contact form is successfully submitted:
> ```tsx
> window.gtag?.("event", "generate_lead", { form_type: "contact" })
> ```

### C. Direction Clicks

In GA4 Admin → **Events** → **Create Event**:
- **Event name:** `directions_click`
- **Matching conditions:**
  - `event_name` equals `click`
  - `link_url` contains `google.com/maps` or `maps.google.com`
- Mark as **Conversion**

> **Note:** You can also fire a custom event on direction links:
> ```tsx
> onClick={() => window.gtag?.("event", "directions_click", { location: "business_address" })}
> ```

## Step 5: Verify Tracking

1. Go to **Admin** → **Data Streams** → click your stream
2. Click **View tag instructions** → **Google Tag**
3. Or use [Google Tag Assistant](https://tagassistant.google.com/) to verify on the live site
4. Check **Realtime** report in GA4 to see live visitors

---

**Status:** The `GoogleAnalytics` component is already integrated into `layout.tsx`. It will not load any scripts until you replace the placeholder Measurement ID.
