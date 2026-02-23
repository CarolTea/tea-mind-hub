
# Neurogastronomy Program Page

A dedicated page at `/neurogastronomy` (EN), `/es/neurogastronomia` (ES), and `/pt/neurogastronomia` (PT) showcasing the Neurogastronomy program with the same editorial luxury aesthetic of the main site.

---

## Page Structure

The page will be a long-form editorial layout with multiple visually distinct sections, alternating between light backgrounds, dark (primary) backgrounds, and accent overlays -- following the same pattern used across the existing site.

### Sections (top to bottom):

1. **Hero** -- Full-screen dark section with title "Neurogastronomia de Chas & Botanicos" (localized), subtitle, and a bold opening statement ("The experience does not happen in the cup. It happens in the brain.")

2. **The Science** -- Light background section explaining neurogastronomy and its application to tea/botanicals. Includes the text about aromatic complexity, phytochemical diversity, and the line "The professional who understands this architecture does not just prepare. They design."

3. **Experience as Competence** -- Dark (primary bg) section with the bullet list of applied neurogastronomy capabilities (multisensory experiences, sensory coherence, neuroscience-based pairings, etc.)

4. **Product Development & Positioning** -- Light background section covering innovation opportunities (blend creation, high-precision pairing, sensory design, botanical lines, premium positioning)

5. **Sector Context** -- Accent-toned section covering the GLP-1 / behavioral shift context and why tea/botanicals are strategically positioned

6. **Academic Structure** -- Light background section with the curriculum bullet list (neural flavor construction, olfactory processing, phytochemical sensory, Camellia sinensis, Brazilian botanicals, etc.)

7. **Pricing CTA** -- Visually prominent section displaying U$350, "Classes + AI trained in Neurogastronomy", with an enrollment/contact CTA button

8. **Academic Direction** -- Dark section with the three instructor profiles (Raquel Magalhaes, Carol Tavares, Carla Vicente) displayed in a 3-column grid with names, titles, and bios

9. **Footer** -- Reuses the existing site Footer component

---

## Files to Create/Modify

### New Files
- **`src/pages/Neurogastronomy.tsx`** -- The page component, composing all sections. Uses `LanguageProvider` wrapper like `Index.tsx`. Includes `Navbar` and `Footer`.
- **`src/lib/neuro-translations.ts`** -- All translated copy for EN, ES, PT in a dedicated translations file to keep things organized (same pattern as `translations.ts`)

### Modified Files
- **`src/App.tsx`** -- Add routes: `/neurogastronomy`, `/es/neurogastronomia`, `/pt/neurogastronomia`

---

## Design Details

- All sections use the existing color system: `bg-background` (warm cream), `bg-primary` (deep green), `bg-secondary` (dark navy), `accent` (gold)
- Typography: Playfair Display for headings, Inter for body -- same as current site
- Fade-in animations via `useFadeIn` hook
- The pricing section will feature a large serif "$350" with gold accent line and clean CTA button
- Instructor profiles in clean cards with name as serif heading and bio in sans-serif muted text
- Responsive: single column on mobile, multi-column on desktop
- Navbar reused as-is (links back to home sections still work)

---

## Technical Notes

- The `neuro-translations.ts` file will export a `neuroTranslations` object keyed by `Lang` type, containing all section copy in EN/ES/PT
- The page component will import this directly and use `useLang()` only for `lang` value to index into the translations
- The copy provided (in Portuguese) will be adapted to the site's tone of calm authority for EN and ES translations
- No new dependencies required
