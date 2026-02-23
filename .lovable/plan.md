

# Redesign: Tea Mind Business Hub -- Visual Impact & New Logo

## What Changes

### 1. New Logo (larger, better quality)
- Replace the current `src/assets/tea-mind-logo.png` with the uploaded `Tea_Hub_Logo.png`
- Also copy it to `public/favicon.png` for use as favicon
- Update `index.html` to reference the new favicon
- Make the logo significantly larger in both Navbar (h-14 instead of h-10) and Footer (h-16)
- Remove the `brightness-0 invert` filter from the Footer logo (the new logo has its own colors and should display naturally)

### 2. Add Beautiful Imagery with Unsplash Photos
The current site is text-heavy with only SVG illustrations. We will add high-quality, editorial-style tea industry photography from Unsplash to bring visual richness:

- **Hero Section**: Add a stunning full-width background image (premium tea leaves, tea plantation landscape, or structured macro shot) with a dark overlay for text readability, replacing the plain off-white background with SVG lines
- **About Section**: Replace the abstract SVG composition with a real image -- a macro shot of premium tea leaves or a curated tea tasting setup, giving the section visual weight
- **Programs Section**: Add a background image or individual images per card (tea sourcing, sensory analysis, executive setting) to make cards visually engaging instead of plain bordered boxes
- **Society Section**: Add a subtle background image (dark-toned editorial photo) behind the Midnight Blue overlay to add depth and texture
- **Philosophy Section**: Add a full-width background image (tea plantation, structured rows) with overlay, making the quote section dramatic and visually memorable

### 3. Specific Image URLs (from Unsplash, free to use)
We will use high-quality Unsplash images via their CDN URLs:
- Hero: Aerial tea plantation or premium tea leaves macro
- About: Close-up tea leaves / curated tea setup
- Programs cards: Tea sourcing, sensory analysis, executive/business imagery
- Society: Dark-toned atmospheric tea image
- Philosophy: Wide landscape tea plantation rows

### 4. Layout Enhancements
- Hero becomes a full-bleed image hero with gradient overlay (dark green to transparent) and white text
- Programs cards get image headers above the text content
- Society and Philosophy sections use background images with color overlays for depth

## Technical Details

### Files to modify:
1. **Copy new logo**: `user-uploads://Tea_Hub_Logo.png` to `src/assets/tea-mind-logo.png` and `public/favicon.png`
2. **index.html**: Add favicon link tag referencing `/favicon.png`
3. **src/components/Navbar.tsx**: Increase logo size to h-14
4. **src/components/Hero.tsx**: Replace SVG-only background with a full-bleed Unsplash background image + gradient overlay; keep animated SVG lines on top for brand consistency; switch text to white
5. **src/components/About.tsx**: Replace SVG illustration with a real photo (img tag with Unsplash URL), styled with object-cover and rounded corners
6. **src/components/Programs.tsx**: Add an image header to each program card using Unsplash photos
7. **src/components/Society.tsx**: Add a background image with the Midnight Blue overlay for texture
8. **src/components/Philosophy.tsx**: Add a full-width background image with overlay behind the quote
9. **src/components/Footer.tsx**: Increase logo size, remove invert filter

### Image approach:
- Use Unsplash CDN URLs directly (e.g., `https://images.unsplash.com/photo-...?w=1200&q=80`)
- This avoids needing to download/store images and provides fast CDN delivery
- All images will have proper `alt` text for accessibility

