# Mend Roofing - Complete Rebranding Plan

## Project Overview
This document outlines the complete rebranding strategy to transform the "Good Guys Roofing" template into the **Mend Roofing** website, matching their existing brand identity and service offerings.

---

## 1. Brand Identity Analysis

### 1.1 Mend Roofing Brand Information
Based on the existing website at https://mendroofing.com/

**Company Name:** Mend Roofing  
**Tagline:** "REPAIR • RESTORE • PROTECT"  
**Owner/Leader:** Zach Garza  
**Experience:** 20+ years combined experience  
**Certification:** GAF Certified roofing company  
**Insurance Coverage:** $2,000,000 fully insured  

### 1.2 Brand Colors
**Primary Color:** Blue (appears to be a medium-dark blue, approximately #1E5BA8 or similar)  
**Secondary Color:** White (#FFFFFF)  
**Accent Color:** Red/Orange (for calls-to-action, approximately #FF6B35 or similar)  
**Text Colors:** 
- Primary text: Dark gray/Black (#333333)
- Secondary text: Medium gray

### 1.3 Logo
The logo features:
- Blue and white color scheme
- Bold text "MEND ROOFING"
- Circular design with "REPAIR • RESTORE • PROTECT" around the top
- Professional, modern appearance

### 1.4 Typography
- Heading Font: Bold, sans-serif (appears to be similar to current template)
- Body Font: Clean, readable sans-serif
- Professional and modern aesthetic

---

## 2. Contact Information Updates

### 2.1 Phone Numbers
- **Katy Office:** (346) 236-3652
- **Spring Office:** (281) 305-3162

### 2.2 Physical Addresses
**Katy Location:**
- 24285 Katy Fwy Suite 300-18
- Katy, TX 77494, United States

**Spring Location:**
- 24624 Interstate 45 200
- Spring, TX 77386, United States

### 2.3 Service Hours
- **24 Hours** (Emergency services available)

### 2.4 Service Areas
Primary locations in Texas:
- Spring
- Tomball
- Katy
- The Woodlands
- Conroe
- Magnolia
- Montgomery
- Pearland
- San Antonio
- Midtown Houston
- Galleria / Uptown
- Heights
- Montrose
- Sugar Land
- Pasadena
- Downtown Houston
- Clear Lake
- Cypress (mentioned as trusted area)

**Primary Service Region:** Houston, TX and Southeast Texas (Serving the Houston area)

---

## 3. Services Alignment

### 3.1 Services to KEEP (Mend Roofing Offers These)

**Residential Roofing:**
- Roof Replacement ✓
- Roof Repair ✓
- GAF Roofing System ✓
- Tile Roofing ✓
- Asphalt Shingle Roofing ✓
- Metal Roofing (mentioned on their site) ✓
- Roof Inspections ✓
- Roof Maintenance ✓

**Commercial Roofing:**
- Commercial Roof Replacement ✓
- Commercial Roof Restoration ✓
- TPO Roofing ✓
- Multi-Family Roofing ✓
- Flat Roofs ✓
- Roof Coating Systems ✓

**Storm Damage Services:**
- Storm Damage Repair ✓
- Insurance Claims Assistance ✓
- Hail Damage ✓
- Hurricane Damage (implied, serving Houston area) ✓

**Additional Services:**
- Slate Roofing ✓
- Emergency Roof Repair ✓
- Free Roof Inspections ✓
- Roof Leak Repair ✓

### 3.2 Services to REMOVE (Not Offered by Mend Roofing)
- ❌ Painting (Interior/Exterior)
- ❌ Siding (Replacement/Repair/Types)
- ❌ Gutters (Seamless Gutters/Gutter Guards)

### 3.3 Navigation Structure Changes

**Current Template Navigation:**
```
- Roofing
- Commercial Roofing
- Storm Damage
- Gutters (REMOVE)
- Siding (REMOVE)
- Painting (REMOVE)
- About
```

**New Mend Roofing Navigation:**
```
- Home
- About
  - Blog
  - FAQ
- Services (Dropdown)
  - Residential Roofing
    - Roof Replacement
    - GAF Roofing System
    - Tile Roofing
    - Asphalt Shingle Roofing
  - Commercial Roofing
    - Roof Replacement
    - Roof Restoration
    - TPO Roofing
    - Multi-Family Roofing
  - Roof Repair
    - Storm Damage
    - Roof Inspections
    - Roof Maintenance
- Financing
- Contact (Instant Estimator)
```

---

## 4. Technical Implementation Plan

### 4.1 Color System Updates

**File: `src/app/globals.css`**

Current colors (Good Guys - Red theme):
```css
--primary: 0 63% 40%;        /* Deep red */
--accent: 0 63% 50%;          /* Bright red */
```

New colors (Mend Roofing - Blue theme):
```css
--primary: 210 70% 45%;       /* Medium-dark blue */
--primary-foreground: 0 0% 98%;
--accent: 15 100% 60%;        /* Orange/Red accent */
--accent-foreground: 0 0% 98%;
```

### 4.2 Component Updates

#### A. Header Component (`src/components/header.tsx`)
- **Line 89-99:** Replace `GoodGuysLogo()` function with `MendRoofingLogo()`
- **Logo URL:** Update to Mend Roofing logo (need to obtain logo file)
- **Line 118:** Update banner text: "Do you live in Texas? See if we service your area here!"
- **Lines 176-178:** Update phone number to display both offices or primary: (346) 236-3652
- **Lines 13-87:** Restructure `navLinks` array to remove gutters, siding, painting

#### B. Footer Component (`src/components/footer.tsx`)
- **Lines 7-17:** Replace logo with Mend Roofing logo
- **Lines 36-38:** Update company description
- **Lines 52-56:** Update services list (remove siding & gutters)
- **Lines 61-63:** Update contact information (addresses, email, phone)
- **Line 86:** Update copyright: "© {year} Mend Roofing. All Rights Reserved."
- **Lines 78-81:** Update Google Reviews count (check current count for accuracy)

#### C. Layout Component (`src/app/layout.tsx`)
- **Line 12:** Update title: "Mend Roofing"
- **Line 13:** Update description: "Affordable & Reliable Roofing Services in Houston, TX - Expert roof repair, replacement, and installation for residential and commercial properties"

### 4.3 Homepage Updates (`src/app/page.tsx`)
- **Line 17:** Update title to "Mend Roofing | Expert Roofing Services in Houston, TX"
- **Line 18:** Update description with Mend Roofing specific content
- **Line 19:** Update keywords: "roofing, roof repair, roof installation, commercial roofing, Houston roofing, Mend Roofing, GAF certified"

### 4.4 Service Areas Component (`src/components/service-areas.tsx`)
Update to display Mend Roofing's 17+ service areas in Houston region

### 4.5 About Us Component (`src/components/about-us.tsx`)
Update with Mend Roofing specific information:
- Led by Zach Garza
- 20+ years combined experience
- GAF Certified
- $2M insured
- Core values: accountability, transparency, alignment

### 4.6 Files/Pages to DELETE
```
- src/app/painting/ (entire directory)
- src/app/siding/ (entire directory)
- src/app/siding-replacement-cost/ (directory)
- src/app/gutters/ (entire directory)
- public/images/siding/ (entire directory)
```

### 4.7 Metadata Updates Across All Pages
Update meta tags in all remaining pages:
- Company name: "Mend Roofing"
- Location: "Houston, TX" or "Spring, TX" or "Katy, TX"
- Service area mentions
- Phone numbers

---

## 5. Content Updates

### 5.1 Key Messaging Points
- **Experience:** "Over 20 years of combined experience"
- **Certification:** "GAF Certified roofing company"
- **Coverage:** "Fully insured up to $2,000,000"
- **Service:** "24-hour emergency services available"
- **Warranty:** "Industry-leading warranties"
- **Values:** "Accountability, transparency, and alignment"
- **Reviews:** "100+ 5-star reviews"

### 5.2 Call-to-Action Updates
- "GET A FREE ESTIMATE" (primary CTA)
- "Schedule Free Inspection!"
- "Contact Us"
- Phone CTAs: (346) 236-3652 or (281) 305-3162

### 5.3 Hero Section Updates
- Update hero messaging to match Mend Roofing's value proposition
- "Affordable & Reliable Roofing Services in Houston, TX"
- Highlight: Licensed, Insured & Certified
- Highlight: Affordable Payment Options
- Highlight: Peace of Mind Workmanship Warranties
- Highlight: Locally Owned Small Business

---

## 6. Forms and Lead Capture

### 6.1 Contact Form Updates
Update all forms to include:
- Full Name
- Email
- Phone
- Zip Code
- Service needed / How can we help?
- SMS consent checkbox

### 6.2 SMS Consent Language (IMPORTANT)
All forms must include Mend Roofing's consent language:
```
"By submitting this form, I consent to receive SMS messages from Mend Roofing. 
I understand that Message and data rates may apply and that I may reply STOP 
to opt-out of future messaging; reply HELP for additional messaging help. 
Message frequency may vary. See our PRIVACY POLICY"
```

### 6.3 Form Submissions
Ensure forms are configured to send to Mend Roofing's system

---

## 7. SEO Considerations

### 7.1 Primary Keywords
- Mend Roofing
- Houston roofing company
- roof repair Houston
- roof replacement Spring TX
- roof replacement Katy TX
- commercial roofing Houston
- GAF certified roofer
- storm damage repair Houston

### 7.2 Location-Specific Pages
Consider creating location-specific landing pages for:
- Mend Roofing Spring TX
- Mend Roofing Katy TX
- Mend Roofing The Woodlands
- Mend Roofing Houston

---

## 8. Implementation Checklist

### Phase 1: Brand Identity (Priority: HIGH)
- [ ] Obtain high-resolution Mend Roofing logo (SVG/PNG)
- [ ] Extract exact brand color codes from existing website
- [ ] Update CSS color variables
- [ ] Replace all logo instances
- [ ] Update company name in all files

### Phase 2: Contact Information (Priority: HIGH)
- [ ] Update phone numbers throughout site
- [ ] Update addresses in footer and contact pages
- [ ] Update service areas component
- [ ] Update email addresses
- [ ] Update business hours (24/7)

### Phase 3: Navigation & Structure (Priority: HIGH)
- [ ] Remove painting pages and components
- [ ] Remove siding pages and components
- [ ] Remove gutters pages and components
- [ ] Restructure navigation menu
- [ ] Update internal links
- [ ] Test all navigation paths

### Phase 4: Content Updates (Priority: MEDIUM)
- [ ] Update homepage hero section
- [ ] Update about us section (Zach Garza, 20 years, GAF certified)
- [ ] Update services descriptions
- [ ] Update testimonials/reviews section
- [ ] Update FAQ content
- [ ] Update blog posts (if applicable)

### Phase 5: Forms & Functionality (Priority: MEDIUM)
- [ ] Update contact form
- [ ] Update instant estimator form
- [ ] Add SMS consent language
- [ ] Configure form submissions to Mend Roofing's system
- [ ] Test all form submissions

### Phase 6: SEO & Metadata (Priority: MEDIUM)
- [ ] Update page titles across all pages
- [ ] Update meta descriptions
- [ ] Update keywords
- [ ] Update Open Graph tags
- [ ] Update schema markup
- [ ] Update sitemap.xml
- [ ] Update robots.txt

### Phase 7: Images & Assets (Priority: LOW)
- [ ] Replace stock images with Mend Roofing photos (if available)
- [ ] Update gallery with Mend Roofing project photos
- [ ] Update favicon
- [ ] Optimize all images

### Phase 8: Testing & QA (Priority: HIGH)
- [ ] Test all pages for broken links
- [ ] Test responsive design on all devices
- [ ] Test all forms and submissions
- [ ] Test phone number click-to-call
- [ ] Cross-browser testing
- [ ] Accessibility testing
- [ ] Performance testing

### Phase 9: Legal & Compliance (Priority: HIGH)
- [ ] Update privacy policy
- [ ] Update terms & conditions
- [ ] Update cookie policy
- [ ] Ensure SMS consent compliance
- [ ] Ensure TCPA compliance for phone/SMS collection

### Phase 10: Launch Preparation (Priority: HIGH)
- [ ] Set up analytics (Google Analytics)
- [ ] Set up Google Search Console
- [ ] Configure domain/hosting
- [ ] SSL certificate
- [ ] Backup original template
- [ ] Create staging environment
- [ ] Final review with stakeholder

---

## 9. Files Requiring Updates

### Critical Files (Must Update):
1. `src/app/globals.css` - Color scheme
2. `tailwind.config.ts` - Color configuration
3. `src/components/header.tsx` - Logo, navigation, phone
4. `src/components/footer.tsx` - Logo, contact info, copyright
5. `src/app/layout.tsx` - Metadata, title
6. `src/app/page.tsx` - Homepage metadata
7. `src/components/service-areas.tsx` - Service locations
8. `src/components/about-us.tsx` - Company information

### Files to Delete:
- `src/app/painting/` (entire directory)
- `src/app/siding/` (entire directory)
- `src/app/siding-replacement-cost/` (entire directory)
- `src/app/gutters/` (entire directory)
- `public/images/siding/` (entire directory)

### Files to Review/Update:
- All remaining page files for metadata
- All form components for contact info
- All service-related components
- Blog data files
- Offer data files

---

## 10. Brand Voice & Messaging Guidelines

### Tone
- Professional yet approachable
- Trustworthy and reliable
- Family-owned, local business feel
- Safety and quality-focused

### Key Messages
- "Locally owned small business"
- "GAF Certified at the highest levels"
- "Fully licensed and insured up to $2M"
- "Over 20 years of combined experience"
- "Premium materials and expert craftsmanship"
- "Serving Houston and Southeast Texas"
- "24/7 emergency services"

### Unique Value Propositions
1. Affordable payment options and financing
2. Industry-leading warranties
3. Third-party verified (Directorii, Google Guarantee)
4. Free inspections and consultations
5. 100+ 5-star reviews
6. Accountability, transparency, alignment

---

## 11. Next Steps

1. **Immediate Actions:**
   - Obtain Mend Roofing logo files
   - Confirm exact brand colors (use color picker on website)
   - Get approval on navigation structure changes
   - Confirm which forms should receive submissions

2. **Development Phase:**
   - Start with Phase 1 (Brand Identity)
   - Progress through phases systematically
   - Test after each major change
   - Keep backup of original template

3. **Review Milestones:**
   - After brand identity updates (logo, colors)
   - After navigation restructuring
   - After content updates
   - Before final launch

---

## 12. Resources & References

- **Mend Roofing Website:** https://mendroofing.com/
- **Current Template:** Good Guys Roofing (Red theme, Fort Worth area)
- **Technology Stack:** Next.js 15, React 18, Tailwind CSS, TypeScript
- **Key Dependencies:** Radix UI, Framer Motion, React Hook Form

---

## 13. Questions for Stakeholder

Before proceeding with implementation, confirm:

1. Do you have access to Mend Roofing logo files (SVG, PNG, white version)?
2. What are the exact brand color codes (hex values)?
3. Where should form submissions be sent?
4. Do you have Mend Roofing project photos for gallery?
5. Should we integrate with any existing CRM or marketing tools?
6. Are there any additional pages or features needed beyond the template?
7. What is the target launch date?
8. Is there a staging environment available for testing?

---

**Document Version:** 1.0  
**Created:** November 3, 2025  
**Project:** Mend Roofing Website Rebranding  
**Template Source:** Good Guys Roofing (US Roofing template)


