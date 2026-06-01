# Bosnia page - photo shot list

Every photo on `/bosnia` currently renders a themed `PhotoSlot` placeholder. To
ship a real image, drop the file into `public/img/bosnia/` and add `src` (and
`alt`) to the matching `<PhotoSlot>` call. Nothing else changes.

**Licensing (hard rule):** the site lives in a PUBLIC repo and is hosted
publicly, so only images we are legally allowed to publish may be used. Use
Wikimedia Commons (check each file's CC-BY / CC0 / public-domain licence and
keep attribution), Unsplash, or Pexels (both free for commercial use, no
attribution required). NEVER drop in a Google Images result. Record the source +
licence for each file in this table as you fill it.

Recommended specs: landscape 1600x900 (16/9) or 1600x1200 (4/3), JPG/WebP,
under ~300 KB each (compress before committing).

## How to wire one in
```astro
<!-- before (placeholder) -->
<PhotoSlot ratio="4/3" caption={it.caption} />
<!-- after (real photo) -->
<PhotoSlot ratio="4/3" caption={it.caption} src="/img/bosnia/mostar-stari-most.jpg" alt="Stari Most bridge in Mostar" />
```

## Hero (1 photo, 21/9, eager) - uses `variant="hero"` (gold frame + corner label)
The hero PhotoSlot is wrapped in a gold frame that survives the placeholder ->
`<img>` swap, so just add `src` + `alt` as usual; the frame stays.
| filename | depicts | source + licence |
|----------|---------|------------------|
| `/img/bosnia/hero-sarajevo-dusk.jpg` | Sarajevo old town skyline at dusk, minarets + hills | _to fill_ (Unsplash "Sarajevo") |

## Photo variants (treatment per section, set on the PhotoSlot `variant` prop)
- Hero -> `hero` (gold frame + uppercase corner label)
- Headline-sights grid -> `tone-warm` (gold-leaning wash)
- Local-gems grid -> `tone-cool` (teal-leaning wash)
- Map detail card -> `plain`
These only affect the placeholder look; once a real `src` is set the photo fills
the slot (the hero keeps its frame). The "Live it like a local" section is text
+ icon vignettes by design and uses NO photos.

## Headline sights grid (6 photos, 4/3)
| filename | depicts | source + licence |
|----------|---------|------------------|
| `/img/bosnia/mostar-stari-most.jpg` | Stari Most bridge over the turquoise Neretva | _to fill_ |
| `/img/bosnia/bascarsija-sarajevo.jpg` | Baščaršija square, coppersmith stalls, Sebilj fountain | _to fill_ |
| `/img/bosnia/kravice-waterfalls.jpg` | Kravice falls, swimmers in summer | _to fill_ |
| `/img/bosnia/vrelo-bosne.jpg` | Vrelo Bosne springs, tree-lined paths | _to fill_ |
| `/img/bosnia/jajce-waterfall.jpg` | Pliva waterfall in the centre of Jajce | _to fill_ |
| `/img/bosnia/sutjeska-tjentiste.jpg` | Sutjeska NP forested peaks | _to fill_ |

## Local / hidden gems grid (6 photos, 4/3)
| filename | depicts | source + licence |
|----------|---------|------------------|
| `/img/bosnia/lukomir-village.jpg` | Lukomir stone houses on the Bjelašnica ridge | _to fill_ |
| `/img/bosnia/umoljani.jpg` | Umoljani village watermills + stone roofs | _to fill_ |
| `/img/bosnia/pocitelj.jpg` | Počitelj Ottoman village stacked up the hillside | _to fill_ |
| `/img/bosnia/blagaj-tekija.jpg` | Blagaj Tekija dervish house at the Buna spring | _to fill_ |
| `/img/bosnia/radimlja-stecci.jpg` | Radimlja stećci medieval tombstones | _to fill_ |
| `/img/bosnia/prokosko-lake.jpg` | Prokoško Lake with shepherds' huts on Vranica | _to fill_ |

## Map detail card (1 generic placeholder for now)
Per-pin photos are a later enhancement (needs a per-pin caption + filename in
the i18n tree). For v1 the detail card shows one generic placeholder; no shot
needed yet. When ready, add a `photo` field per pin id and a `<PhotoSlot src>`
keyed off the selected pin.

## Notes
- Match the `caption` text already in `src/i18n/strings/bosnia.ts` so the alt
  text reads naturally; you can override per-call with `alt`.
- Keep a consistent treatment (warm, golden-hour where possible) so the grids
  feel like one set, in line with the Sarajevo Twilight palette.
