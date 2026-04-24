## Plan: Add Carla's and Carol's Photos to Home and About Pages

### Asset Setup
- Copy `user-uploads://Carol_Tavares.png` to `src/assets/carol-tavares.png`
- Copy `user-uploads://Carla_Vicente.png` to `src/assets/carla-vicente.png`

### Home Page — `src/components/Founders.tsx`
- Import both images as ES modules (so Vite optimizes/bundles them).
- Map by initials (`CT` → Carol, `CV` → Carla).
- Replace the placeholder `<span>` with serif initials inside `aspect-[4/5]` with an `<img>` using `w-full h-full object-cover object-top` (object-top to preserve faces in the editorial 4:5 crop).
- Keep existing border, hover effect (`hover:border-foreground/20`), and fade animations untouched.

### About Page — `src/pages/AboutPage.tsx`
- Import both images.
- Inside `FounderBlock`, replace the initials placeholder block with an `<img>` in the existing `aspect-[3/4]` container using `w-full h-full object-cover object-top`.
- Preserve the alternating left/right layout (`imageRight` prop), dark/light theme alternation (`isDark`), borders, and `Fade` animations.

### Quality / No regressions
- No layout shifts: image containers keep their existing aspect ratios.
- No changes to translations, routes, or copy.
- Alt text uses each founder's name for accessibility.

### Files to modify
- `src/components/Founders.tsx`
- `src/pages/AboutPage.tsx`

### Files to create
- `src/assets/carol-tavares.png` (from upload)
- `src/assets/carla-vicente.png` (from upload)
