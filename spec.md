# Property Inspector

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Homepage with hero section (headline, subtext, CTA) and services overview cards
- About Us page with company story, team section, and values
- Services page detailing: property inspection, buying/selling assistance, site visits, valuation, legal documentation help, and NRI services
- Property Listings section with 6-8 sample Mumbai properties (image placeholder, name, location, price, type, bedrooms)
- Client Inquiry / Contact form with fields: name, phone, email, property type (dropdown), location, budget (dropdown), and message
- Footer with contact details: address (Mumbai), phone, email, social links
- Multi-page navigation: Home, About, Services, Listings, Contact
- Backend: store and retrieve client inquiries submitted via the contact form
- Backend: store and retrieve property listings

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Motoko canister to store client inquiries (submitInquiry, getInquiries) and property listings (getListings, seed data for Mumbai properties)
2. Frontend: multi-page React app with react-router-style navigation (hash routing)
3. Pages: Home, About, Services, Listings, Contact
4. Reusable components: Navbar, Footer, PropertyCard, ServiceCard, InquiryForm
5. Sample data: 8 Mumbai properties across BKC, Bandra, Juhu, Powai, Andheri, Worli, Lower Parel, Thane
6. Inquiry form connected to backend submitInquiry call with validation and success state
