

# Remove Lovable Branding & Replace Emoji Icons

## Overview

Two issues to fix:
1. **Favicon**: The `public/favicon.ico` (Lovable default) overrides `favicon.png` in Google search results because browsers request `/favicon.ico` by default. Need to delete `favicon.ico` and ensure a proper Tea Mind favicon is in place.
2. **Emoji icons on homepage**: The Positioning, Innovations, and Society sections use emoji icons (🧭, 🏗️, 🎯, 🌍, 🤖, 🫖, 🤝, 📲, 🏆) which look unprofessional and don't match the premium design. Replace them with minimal decorative elements (accent-colored dashes, numbers, or simple SVG line icons from lucide-react).
3. **Lovable badge**: Hide the "Edit with Lovable" badge on published deployments.

## Files Changed

### 1. Delete `public/favicon.ico`
Remove the Lovable default favicon.ico so browsers use the `favicon.png` specified in index.html.

> Note: If `favicon.png` is also the Lovable default, we should ask the user for a Tea Mind favicon image. But first we remove the .ico override.

### 2. Hide Lovable badge
Use `publish_settings--set_badge_visibility` to hide the badge.

### 3. `src/lib/translations.ts` — Replace emoji icons

Replace all emoji `icon` values with either:
- Short accent labels like `"01"`, `"02"`, `"03"`, `"04"` for Positioning pillars
- Or descriptive icon keys (`"compass"`, `"build"`, `"target"`, `"globe"`) that map to lucide-react components

The cleaner approach matching the premium aesthetic: replace emoji strings with simple index-based markers or thin SVG icons.

**Positioning pillars** (3 languages × 4 pillars): Replace 🧭→"01", 🏗️→"02", 🎯→"03", 🌍→"04"

**Innovations cards** (3 languages × 2 cards): Replace 🤖→"01", 🫖→"02"

**Society pillars** (3 languages × 4 pillars): Replace 🤝→"01", 📲→"02", 🎯→"03", 🏆→"04"

### 4. `src/components/Positioning.tsx` — Update icon rendering

Change `<span className="text-2xl">{pillar.icon}</span>` to render the value as a styled number/label:
```tsx
<span className="font-serif text-lg font-medium text-accent flex-shrink-0 mt-1">{pillar.icon}</span>
```

### 5. `src/components/Innovations.tsx` — Update icon rendering

Change `<span className="text-3xl mb-4">{card.icon}</span>` to a styled accent label.

### 6. `src/components/Society.tsx` — Update icon rendering

Same pattern as Positioning — styled number labels instead of emoji.

## Technical Notes

- Numbered labels (01, 02, 03...) are a common premium design pattern and match the minimalist aesthetic
- No new dependencies needed
- All three languages updated consistently

