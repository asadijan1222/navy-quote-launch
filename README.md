# Usmani Interior
A navy-and-white, image-led interior décor website built with TanStack Start, React, TypeScript, Tailwind v4, and Lovable Cloud.

## Development
Install with `bun install`; run `bun run dev`. Lovable automatically verifies builds. `bun run test` runs tests. Publish through the Lovable editor after reviewing the business content.

## Content editing
Business contacts, categories, FAQs, image imports, and metadata helpers are in `src/lib/site-content.ts`. Page copy is in `src/routes`. Shared navigation/footer are in `src/components/site.tsx`. Category detail layouts are reusable through `src/components/category-page.tsx`. There is no CMS or admin dashboard.

## Images
The original uploaded logo is unchanged and served via the Lovable asset pointer in `src/assets/usmani-logo.jpg.asset.json`. It is never cropped. A small proportion-preserving copy is used as the favicon. The header places the full logo beside a readable brand name because the supplied square artwork has substantial white margins.
The three room photographs in `src/assets` are AI-generated illustrative inspiration, NOT customer projects, confirmed stock, or store photos. They are labeled accordingly. Replace them with approved business photography, and add genuine gallery entries before representing work visually as completed projects. No fake client names, locations, prices, ratings, or testimonials are used.

## Quote form
Requests are validated client-side and server-side with Zod, protected with a honeypot, and saved to the `quote_requests` table in Lovable Cloud. Anonymous visitors have insert access only, not read, update, or delete. View saved requests in Lovable Cloud's database view. The successful form state confirms storage only: email notification is not configured and no email delivery is claimed. WhatsApp provides the immediate direct-contact alternative. No customer login is necessary.
Server environment values `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` are supplied by Lovable Cloud; do not put private keys in source. No additional form configuration is required for storage. Backend rate limiting has no standard primitive; no ad-hoc limit is installed without explicit confirmation of that tradeoff. Honeypot protection does not replace robust rate limiting or CAPTCHA.

## Search and domain
Each content page has a unique title/description, canonical and social metadata. The homepage has factual HomeGoodsStore structured data, without unverified hours or ratings. Robots and sitemap use the provided intended domain `https://www.usmaniinteriors.store`. The domain is not yet connected or deployed; confirm it is the final domain and connect it in Lovable before publishing. Generated relative image imports are deliberately not added as absolute OG images.

## Analytics
No analytics, advertising pixels, or non-essential trackers run. Optional IDs to supply later: GA4 measurement ID, GTM container ID, Meta Pixel ID, Google Ads conversion ID/label. Implement consent appropriate to applicable requirements before activating any tracking. Proposed events: quote_form_submit, whatsapp_click, phone_click, product_inquiry, directions_click. These integrations and event collection are not active.

## Business approvals before publication
- Supply original store, product, and completed-project photographs.
- Confirm store hours, measurement, delivery, installation, interior finishing, and wall-to-wall carpeting availability. Conditional inquiries currently make no availability promises.
- Approve privacy/terms wording, actual retention practice, and order-specific policies.
- Supply verified social URLs if desired; none are invented.
- Email notifications, CMS, and analytics are not configured.
