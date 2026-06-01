/**
 * bosnia.ts - copy for the dedicated /bosnia destination page.
 *
 * English-first phase: `en` is the real source of truth. `de` and `ar` are
 * English-interim clones (structuredClone of `en`) so the build stays green
 * while only English is written. The later translation pass replaces `de`/`ar`
 * with real German and Arabic objects (same shape, typed `typeof en`).
 *
 * Pin blurbs live here (keyed by the pin id in `src/data/bosnia.ts`) so they are
 * translatable; the pin coordinates/categories live in the data file.
 *
 * TRAP: never add `as const` to `en` (translated strings must widen).
 * No em dashes, no double hyphens anywhere in copy.
 */

const en = {
  bosnia: {
    meta: {
      title: "Bosnia & Herzegovina travel guide | Balkan Local",
      description:
        "An interactive guide to Bosnia and Herzegovina: an explorable map of cities, nature, food, mosques and hidden local gems, all verified and bookable in one place.",
    },

    hero: {
      eyebrow: "Now live, Bosnia & Herzegovina",
      title: "See Bosnia the way locals do.",
      lead: "One country, fully verified. Explore an interactive map of headline sights and quiet local corners, then let us turn it into a trip you book in one place.",
      ctaPrimary: "Start planning",
      ctaSecondary: "Explore the map",
      photoCaption: "Sarajevo old town at dusk",
    },

    map: {
      kicker: "Explore the map",
      title: "Every corner of Bosnia, on one map.",
      lead: "Filter by what you love, then tap any pin for the story behind it. Famous landmarks and local secrets, side by side.",
      mapTitle: "Interactive map of Bosnia and Herzegovina",
      filterBarLabel: "Filter the map by category",
      filterAll: "All",
      categories: {
        cities: "Cities",
        nature: "Nature",
        food: "Food & drink",
        religious: "Mosques & faith",
        hidden: "Hidden gems",
      },
      detailRegionLabel: "Selected place details",
      detailPrompt: "Tap a pin on the map to see what makes it special.",
      areaLabel: "Area",
      detailPhotoCaption: "Photo coming soon",
      note: "These locations are a curated starting point. Tell us what draws you and we will build the rest around it.",
      blurbs: {
        // Cities
        sarajevo:
          "The capital where minarets, church spires and a synagogue share one skyline, with Baščaršija's coppersmiths and the deepest coffee culture in the region.",
        mostar:
          "The turquoise Neretva, the rebuilt Stari Most and an Ottoman old town that glows at golden hour.",
        "banja-luka":
          "Bosnia's relaxed second city, green and riverside, gateway to Vrbas rafting and the Kastel fortress.",
        tuzla:
          "A warm northern city built on salt, with the only inland salt lakes in Europe that you can swim in.",
        trebinje:
          "Sun, plane trees and Herzegovina wine, a short hop from Dubrovnik but a world calmer.",
        // Nature
        kravice:
          "A wide crescent of waterfalls on the Trebižat, where you can swim beneath the falls in summer.",
        "una-strbacki-buk":
          "The thundering Štrbački buk falls inside Una National Park, emerald water and wild rapids.",
        "sutjeska-perucica":
          "Bosnia's oldest national park, home to Perućica, one of Europe's last primeval forests, under Maglić peak.",
        "pliva-lakes":
          "Calm lakes and the wooden watermills near Jajce, made for slow afternoons and swimming.",
        "boracko-lake":
          "A glacial lake under the Prenj massif, a quiet base for hiking and cold, clear swims.",
        blidinje:
          "A high plateau of meadows and pines between Čvrsnica and Vran, dramatic and almost empty.",
        "vrbas-canyon":
          "Steep limestone walls above the Vrbas, the rafting heart of the country near Banja Luka.",
        // Food & drink
        bascarsija:
          "Char-grilled ćevapi, fresh somun bread and Bosnian coffee served the slow, ritual way.",
        "travnik-food":
          "Home of flaky Travnička pita and tangy Vlašić cheese from the surrounding highlands.",
        "konjic-food":
          "A Neretva river town known for baklava and hand-carved woodwork, an easy stop between Sarajevo and Mostar.",
        "stolac-wine":
          "The heart of Herzegovina wine country, where the native žilavka and blatina grapes ripen in the sun.",
        // Mosques & faith
        "gazi-husrev-beg":
          "The grand 16th century mosque at the centre of Sarajevo's old town, the masterwork of Ottoman Bosnia.",
        "careva-mosque":
          "The Emperor's Mosque on the Miljacka, the oldest in Sarajevo, calm and stately.",
        "koski-mehmed-pasha":
          "The Mostar mosque whose minaret gives the postcard view over the Stari Most.",
        "sacred-heart-cathedral":
          "Sarajevo's neo-Gothic Catholic cathedral, a landmark on the walk through the city centre.",
        "zitomislic-monastery":
          "A serene Serbian Orthodox monastery in the Neretva valley, rebuilt stone by stone.",
        // Hidden gems
        lukomir:
          "Bosnia's highest village, a cluster of stone houses on the Bjelašnica ridge where shepherd life endures.",
        umoljani:
          "A highland village of watermills and stone roofs, the trailhead for the Rakitnica canyon.",
        pocitelj:
          "A stepped Ottoman village climbing a hillside above the Neretva, all stone, pomegranates and silence.",
        "radimlja-stecci":
          "A field of medieval stećci tombstones near Stolac, carved with figures found nowhere else, UNESCO listed.",
        "vjetrenica-cave":
          "Bosnia's largest cave near Ravno, a cool underground world of rivers and rare blind creatures.",
        blagaj:
          "The dervish tekija tucked against a cliff where the Buna river bursts, full force, out of the rock.",
        "hutovo-blato":
          "A birdwatcher's wetland of lagoons and reeds in Herzegovina, busiest at migration time.",
      },
    },

    touristy: {
      kicker: "The headline sights",
      title: "The Bosnia everyone comes for.",
      lead: "The landmarks that earn their reputation, and that we make effortless to reach with verified guides and transfers.",
      items: [
        { name: "Stari Most, Mostar", blurb: "The reborn Ottoman bridge arcing over the Neretva, and the divers who leap from it all summer.", caption: "Stari Most over the Neretva" },
        { name: "Baščaršija, Sarajevo", blurb: "The 15th century bazaar of coppersmiths, pigeons and coffee houses at the heart of the capital.", caption: "Baščaršija square, Sarajevo" },
        { name: "Kravice Waterfalls", blurb: "A natural amphitheatre of falls near Mostar, perfect for a summer swim.", caption: "Kravice Waterfalls" },
        { name: "Vrelo Bosne, Sarajevo", blurb: "Spring-fed pools and tree-lined paths at the source of the river Bosna, a local Sunday ritual.", caption: "Vrelo Bosne springs" },
        { name: "Jajce Waterfall", blurb: "A 20 metre waterfall in the middle of a medieval town, rare anywhere in the world.", caption: "Pliva waterfall, Jajce" },
        { name: "Sutjeska & Tjentište", blurb: "Bosnia's wildest national park, primeval forest and the country's highest peak.", caption: "Sutjeska National Park" },
      ],
    },

    local: {
      kicker: "Like a local",
      title: "The corners the guidebooks miss.",
      lead: "Quiet villages, old stone and slow afternoons, the places our team sends their own friends to.",
      items: [
        { name: "Lukomir", blurb: "Bosnia's highest village, reached on a mountain road that closes in winter, life lived the old way.", caption: "Lukomir highland village" },
        { name: "Umoljani & Rakitnica", blurb: "Watermills, stone roofs and the lip of a canyon few outsiders ever see.", caption: "Umoljani village" },
        { name: "Počitelj", blurb: "An Ottoman village stacked up a hillside, warm stone and pomegranate trees above the Neretva.", caption: "Počitelj hillside" },
        { name: "Blagaj Tekija", blurb: "A dervish house against a cliff where the Buna river erupts from the rock in full force.", caption: "Blagaj Tekija and Buna spring" },
        { name: "Radimlja stećci", blurb: "A field of medieval tombstones near Stolac, carved with figures found nowhere else on earth.", caption: "Radimlja stećci necropolis" },
        { name: "Prokoško Lake", blurb: "A glacial lake ringed by shepherds' huts high on Vranica, cool and silent in summer.", caption: "Prokoško Lake" },
      ],
    },

    facts: {
      kicker: "Good to know",
      title: "Bosnia, in practical terms.",
      lead: "The basics worth knowing before you go. We handle the rest.",
      items: [
        { label: "Currency", value: "Convertible mark (KM / BAM), pegged near 1.95 to the euro. Cash is king in small towns." },
        { label: "Language", value: "Bosnian, Croatian and Serbian. English is widely understood in cities and by younger people." },
        { label: "Best time to visit", value: "Late spring to early autumn for warmth and open mountain roads. Sarajevo is magic under snow too." },
        { label: "Entry", value: "Many nationalities, including EU, UK, US and GCC passports, enter visa free for up to 90 days. Check your own passport before you travel." },
        { label: "Getting around", value: "Distances are short but roads wind through mountains. We arrange private drivers so you never wait at a bus stop." },
        { label: "Tipping", value: "Cards work in cities, less so in villages. Rounding up the bill is normal and appreciated." },
      ],
    },

    why: {
      kicker: "Why book through us",
      title: "Local knowledge, without the guesswork.",
      lead: "We are not a global booking site. We live the trips we sell.",
      points: [
        { title: "Every partner verified", body: "We meet the hosts, drivers and guides in person and check the paperwork, so there are no surprises on the ground." },
        { title: "One trip, one place", body: "Your whole itinerary, stays, transfers, guides and dining, lives in a single account with one clear bill." },
        { title: "Genuinely local", body: "Our recommendations come from people who live here, not a call centre, so you see the real Bosnia." },
        { title: "We speak your language", body: "Support in English, German and Arabic, before and during your trip." },
      ],
    },

    live: {
      kicker: "Live it like a local",
      title: "The Bosnia you only find by slowing down.",
      lead: "The country reveals itself in its small rituals. These are the moments we steer you toward, the ones that turn a trip into a memory.",
      items: [
        { title: "Coffee, slowly", body: "Bosnian coffee is not a caffeine run, it is an hour. Sit with a fildžan and a cigarette on a terrace above the rooftops and let the afternoon go nowhere. Locals call it ćejf, the art of quiet pleasure." },
        { title: "The evening korzo", body: "At dusk, whole towns drift out to walk the main street, greet half the people they know and end up over a drink. Join the promenade in Sarajevo or Mostar and you stop being a tourist." },
        { title: "River and mountain time", body: "A swim in a cold green river, a plate of fresh trout, a coffee made on a wood stove in a highland village. The best afternoons here have no itinerary at all." },
      ],
    },

    concierge: {
      kicker: "We plan it, you just go",
      title: "Your whole trip, handled by someone who lives here.",
      lead: "Tell us what you are after and we build the rest. No piecing it together across twenty tabs, no guessing whether a driver will show up.",
      support: "Around the clock while you travel",
      points: [
        { title: "We build the itinerary for you", body: "Share your dates, your pace and what you love. We design the full route, stays, transfers and tables, and you simply approve it." },
        { title: "A real person, not a call centre", body: "You get a named planner who knows the country, answers in plain language and remembers your trip from the first message to the last." },
        { title: "Help whenever you need it", body: "A flight slips, plans change, the weather turns. We are reachable around the clock while you are travelling and we sort it out for you." },
        { title: "Change anything on the fly", body: "Want an extra night in Mostar or a day in the mountains added last minute? Message us and we reshape the plan, no penalties, no fuss." },
      ],
    },

    halal: {
      kicker: "Muslim-friendly travel",
      title: "An easy, welcoming home for Muslim travellers.",
      lead: "Bosnia's Islamic heritage runs deep, which makes a comfortable trip simple to arrange.",
      items: [
        { title: "Mosques in every town", body: "From the grand Gazi Husrev-beg to small village mosques, prayer spaces are never far, and the adhan is part of daily life." },
        { title: "Halal by default", body: "Most local meat is halal and traditional Bosnian food suits it naturally, so eating well takes no effort." },
        { title: "Planned around prayer", body: "We can shape itineraries that respect prayer times and the rhythm of Ramadan, including suhoor and iftar." },
      ],
      note: "Tell us your preferences when you plan and we will match you with the right hosts and restaurants.",
    },

    cta: {
      title: "Ready to see Bosnia properly?",
      body: "Tell us what you love and we will shape a verified trip around it, all in one place.",
      label: "Start planning",
    },
  },
};

// TODO(i18n): DE and AR are English-interim clones so the build stays green
// during the English-first phase. Replace each with a real translated object
// (same shape, typed `typeof en`) in the backfill pass. structuredClone gives a
// deep copy, so there is no shared-reference foot-gun with `en`.
const de: typeof en = structuredClone(en);
const ar: typeof en = structuredClone(en);

export { en, de, ar };
