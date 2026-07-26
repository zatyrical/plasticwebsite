# Aesthetic surgery AI image brief

Reference direction: full-bleed editorial photo tiles with close anatomical cropping, muted teal/emerald overlay, large elegant serif labels, and subtle motion reveal. Do not copy the reference site. Adapt for Dr Jeremy Sun’s cream / emerald / gold brand, Asian-focused anatomy, and Singapore medical-advertising sensitivity.

## Global style

- Premium clinical editorial photography, realistic human anatomy, Asian patients/models, anonymous/non-identifiable crops where possible.
- Cropped anatomical details rather than full glamour poses.
- Warm ivory, muted teal/emerald shadows, restrained gold highlights.
- Clean studio background, soft directional light, minimal clinical texture.
- No before/after implication, no exaggerated beauty outcome, no blood, no instruments entering skin, no visible genitalia.
- For breast/body images: modest styling with black/cream medical lingerie or draping; avoid nipple/areola exposure.
- Output: square or 4:5 images for homepage cards; safe area left/bottom for white serif overlay text.

## Suggested images / prompts

### 1. Asian rhinoplasty
Premium clinical editorial photograph, close-up side profile of an Asian woman’s nose, lips and chin only, non-identifiable crop, refined nasal tip and dorsal aesthetic line, natural skin texture, soft teal/emerald color grade, warm ivory highlights, elegant luxury plastic surgery website image, shallow depth of field, no text, no before-after comparison, no surgical instruments, no blood.

### 2. Eyelid surgery
Premium clinical editorial photograph, close-up of an Asian upper eyelid and brow region, eye gently closed, delicate blue surgical planning markings on the upper eyelid crease, natural skin texture, non-identifiable crop, clean clinical studio lighting, muted teal overlay and warm ivory highlights, tasteful medical aesthetic website image, no blood, no scalpel, no needles, no text.

### 3. Breast aesthetic surgery
Premium clinical editorial photograph, cropped lower breast / inframammary fold and upper abdomen only on an adult Asian woman, modest black or cream bra/drape, no nipple or areola visible, no full breast exposure, soft shadow emphasizing IMF curve and upper abdominal transition, warm ivory and muted emerald studio background, tasteful luxury medical website image, no text, no before-after.

### 4. Body contouring & liposuction
Premium clinical editorial photograph, anonymous close crop of an adult Asian woman’s waist, flank and upper abdomen contour, modest high-waist black garment or draping, natural skin texture, subtle measuring-line aesthetic without explicit markings, muted teal/emerald grade, soft directional light, tasteful plastic surgery website image, no face, no text, no before-after.

### 5. Face and neck lift
Premium clinical editorial photograph, anonymous three-quarter close crop of an Asian woman’s lower face, jawline and neck, elegant neck contour and jawline shadow, subtle non-literal lift-vector lighting, warm ivory highlights, muted emerald/teal color grade, luxury clinical website style, no text, no needles, no exaggerated youth claim.

### 6. Lasers and injectables
Premium clinical editorial photograph, close-up of an Asian cheek/temple skin area with a sleek aesthetic laser handpiece nearby or soft gloved hand preparing treatment, no needle penetration, no injury, natural skin texture, clean clinic studio environment, muted teal/emerald overlay, warm ivory highlights, no text.

### 7. Fat grafting
Premium clinical editorial photograph, anonymous cropped body contour with soft draping and a sterile cannula/tray in background bokeh only, concept of precision volume restoration without showing penetration, adult Asian subject, warm ivory and emerald shadows, tasteful clinical editorial style, no blood, no needles entering skin, no text.

### 8. Thread lifting
Premium clinical editorial photograph, anonymous cropped Asian cheek and jawline, subtle projected gold/teal thread-vector lines as graphic overlay, no punctures, no needles, natural skin texture, luxury clinical lighting, muted teal/emerald color grade, no text.

## Motion treatment

- Replace small SVG tiles with full-bleed photographic tiles.
- Mobile: one or two cards visible at a time; card image reveals with a restrained vertical wipe / soft 3D flip as it enters viewport.
- Desktop: four-column image-card grid, subtle image zoom on hover.
- Overlay title in large white elegant serif at lower-left, small “View page” text below where route exists.

## Implementation note

The current Hermes image-generation backend is unavailable because `FAL_KEY` is not set. Once image generation is enabled, generate these 8 images, place them under `public/images/aesthetic-ai/`, then switch the homepage aesthetic cards to full-bleed photo cards.