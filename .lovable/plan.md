

# Fix Logo White Background

## Problem
The logo displays with a white background despite uploading a transparent PNG multiple times. Previous attempts copied the file to the same path (`src/assets/tea-mind-logo.png`), which may cause caching or overwrite issues in the build pipeline.

## Solution
Use a **new filename** to force a clean replacement and bust any caching:

1. **Copy the transparent logo** from `user-uploads://Tea_Hub_Logo_1.png` to a new path: `src/assets/tea-mind-logo-transparent.png`
2. **Copy to favicon**: `public/favicon.png` (overwrite)
3. **Update Navbar.tsx** — change the import to reference `tea-mind-logo-transparent.png`
4. **Update Footer.tsx** — change the import to reference `tea-mind-logo-transparent.png`
5. **Delete old file** `src/assets/tea-mind-logo.png` to avoid confusion

## Files Modified
- `src/assets/tea-mind-logo-transparent.png` (new — copied from upload)
- `public/favicon.png` (overwritten)
- `src/components/Navbar.tsx` — update import path
- `src/components/Footer.tsx` — update import path

This approach guarantees the build system picks up the new file since it has a completely different name and path.

