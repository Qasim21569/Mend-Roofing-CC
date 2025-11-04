# Mend Roofing - Brand Assets Documentation

## Logo Information

### Logo Description
Based on the website analysis:
- Circular design with "MEND ROOFING" text
- Tagline: "REPAIR • RESTORE • PROTECT" around the top arc
- Blue and white color scheme
- Professional, modern appearance

### Logo Usage Notes
- The logo appears prominently in the header and footer
- White version used on blue backgrounds
- Full-color version on white backgrounds

---

## Color Palette

### Primary Colors
Based on website analysis from mendroofing.com:

**Primary Blue:**
- Approximate: `#1E5BA8` to `#2563EB` (Medium-dark blue)
- HSL: `210 70% 45%` (for Tailwind CSS variables)
- Usage: Primary brand color, headers, buttons, navigation background

**White:**
- Hex: `#FFFFFF`
- Usage: Text on blue backgrounds, clean sections

### Accent Colors

**Accent Orange/Red:**
- Approximate: `#FF6B35` to `#F97316` 
- HSL: `15 100% 60%`
- Usage: Call-to-action buttons, highlights, important elements

**Text Colors:**

**Primary Text (Dark):**
- Hex: `#333333`
- Usage: Main body text, headings on white backgrounds

**Secondary Text (Gray):**
- Hex: `#666666` to `#737373`
- Usage: Secondary information, captions

**Light Text:**
- Hex: `#F5F5F5` to `#FFFFFF`
- Usage: Text on dark/blue backgrounds

---

## Typography

### Font Families
Based on website styling:

**Headings:**
- Font: Sans-serif (Bold, clean)
- Weight: 500-700
- Professional and modern appearance

**Body Text:**
- Font: Sans-serif (Regular, readable)
- Weight: 400
- Clean and professional

---

## Tailwind CSS Color Variables

### Updated Color Scheme for globals.css

```css
:root {
  /* Base colors */
  --background: 0 0% 100%;
  --foreground: 0 0% 20%;
  
  /* Primary - Mend Roofing Blue */
  --primary: 210 70% 45%;
  --primary-foreground: 0 0% 98%;
  
  /* Accent - Orange/Red for CTAs */
  --accent: 15 100% 60%;
  --accent-foreground: 0 0% 98%;
  
  /* Secondary */
  --secondary: 210 20% 96%;
  --secondary-foreground: 210 10% 20%;
  
  /* Muted */
  --muted: 210 20% 96%;
  --muted-foreground: 0 0% 45%;
  
  /* Card */
  --card: 0 0% 100%;
  --card-foreground: 0 0% 20%;
  
  /* Border & Input */
  --border: 210 20% 90%;
  --input: 210 20% 90%;
  
  /* Ring */
  --ring: 210 70% 45%;
}
```

---

## Implementation Status

- [ ] Logo extracted and saved
- [ ] Colors documented
- [ ] Colors applied to CSS
- [ ] Typography verified
- [ ] Brand guidelines documented

---

**Last Updated:** November 3, 2025


