/**
 * experiences.ts - /experiences page header + category showcase + the halal
 * layer (live prayer times + mosque locator). `de`/`ar` typed `typeof en`.
 * `prayerNames` keys (Fajr, Dhuhr...) are logic keys; only the values vary.
 */

const en = {
  experiences: {
    meta: {
      title: "Experiences | Balkan Local",
      description:
        "Independently verified stays, transfers, guides, dining and connectivity across Bosnia, with practical tools for Muslim travelers.",
    },
    hero: {
      title: "Everything your trip needs, in one place.",
      lead: "Stays, transfers, guides, dining and connectivity, each one independently verified, alongside thoughtful tools for Muslim travelers.",
    },
  },
  halal: {
    kicker: "For Muslim travelers",
    title: "Halal options, prayer times and mosque locations, built in.",
    lead: "Filter for halal and family-friendly places, view today's prayer times, and find the nearest mosque wherever you are.",
    filters: ["Halal", "Family friendly", "Alcohol free", "Prayer space", "Women friendly"],
    prayerTitle: "Prayer times today",
    prayerCityLabel: "City",
    prayerLoading: "Loading prayer times",
    prayerError: "Live times are unavailable, showing a typical day.",
    nextLabel: "Next",
    tomorrow: "tomorrow",
    prayerNames: { Fajr: "Fajr", Dhuhr: "Dhuhr", Asr: "Asr", Maghrib: "Maghrib", Isha: "Isha" },
    mapTitle: "Mosques nearby",
    mapNote: "Gazi Husrev-beg Mosque, the Emperor's Mosque, Ali Pasha's Mosque and the closest mosques to you.",
    locateBtn: "Find mosques nearby",
    locating: "Locating",
  },
  categories: {
    kicker: "What you can arrange",
    title: "The whole trip, thoughtfully curated.",
    lead: "The global platforms have hotels. We have the full local picture, the parts that genuinely make a trip work.",
    items: [
      { t: "Stays", d: "Hotels, guesthouses, apartments and villas, with halal and family filters." },
      { t: "Transfers and drivers", d: "Airport collection and verified private drivers, at clear and fair prices." },
      { t: "Guides and experiences", d: "Local guides, day trips and tickets, led by people who know the country." },
      { t: "Dining", d: "Restaurants with halal, cuisine and family filters, and honest reviews." },
      { t: "Connectivity", d: "eSIM, currency guidance and safety information for the moment you land." },
      { t: "Property", d: "We introduce diaspora and Gulf buyers to verified local agencies." },
    ],
  },
};

const de: typeof en = {
  experiences: {
    meta: {
      title: "Erlebnisse | Balkan Local",
      description:
        "Unabhängig geprüfte Unterkünfte, Transfers, Guides, Restaurants und Konnektivität in ganz Bosnien, mit praktischen Funktionen für muslimische Reisende.",
    },
    hero: {
      title: "Alles, was deine Reise braucht, an einem Ort.",
      lead: "Unterkünfte, Transfers, Guides, Restaurants und Konnektivität, jeweils unabhängig geprüft, dazu durchdachte Funktionen für muslimische Reisende.",
    },
  },
  halal: {
    kicker: "Für muslimische Reisende",
    title: "Halal-Optionen, Gebetszeiten und Moscheen, integriert.",
    lead: "Filtere nach Halal- und familienfreundlichen Orten, sieh die heutigen Gebetszeiten und finde die nächste Moschee, wo immer du bist.",
    filters: ["Halal", "Familienfreundlich", "Alkoholfrei", "Gebetsraum", "Frauenfreundlich"],
    prayerTitle: "Gebetszeiten heute",
    prayerCityLabel: "Stadt",
    prayerLoading: "Gebetszeiten werden geladen",
    prayerError: "Live-Zeiten nicht verfügbar, ein typischer Tag wird angezeigt.",
    nextLabel: "Nächstes",
    tomorrow: "morgen",
    prayerNames: { Fajr: "Fadschr", Dhuhr: "Dhuhr", Asr: "Asr", Maghrib: "Maghrib", Isha: "Ischa" },
    mapTitle: "Moscheen in der Nähe",
    mapNote: "Gazi-Husrev-Beg-Moschee, Kaisermoschee, Ali-Pascha-Moschee und die nächstgelegenen Moscheen.",
    locateBtn: "Moscheen in der Nähe finden",
    locating: "Standort wird ermittelt",
  },
  categories: {
    kicker: "Was du arrangieren kannst",
    title: "Die ganze Reise, durchdacht kuratiert.",
    lead: "Die globalen Plattformen haben Hotels. Wir haben das ganze lokale Bild, die Teile, die eine Reise wirklich ausmachen.",
    items: [
      { t: "Unterkünfte", d: "Hotels, Pensionen, Apartments und Villen, mit Halal- und Familienfiltern." },
      { t: "Transfers und Fahrer", d: "Flughafenabholung und geprüfte Privatfahrer, zu klaren und fairen Preisen." },
      { t: "Guides und Erlebnisse", d: "Lokale Guides, Tagesausflüge und Tickets, geleitet von Menschen, die das Land kennen." },
      { t: "Restaurants", d: "Restaurants mit Halal-, Küchen- und Familienfiltern und ehrlichen Bewertungen." },
      { t: "Konnektivität", d: "eSIM, Währungshinweise und Sicherheitsinformationen für den Moment der Ankunft." },
      { t: "Immobilien", d: "Wir vermitteln Diaspora- und Golf-Käufer an geprüfte lokale Agenturen." },
    ],
  },
};

const ar: typeof en = {
  experiences: {
    meta: {
      title: "التجارب | Balkan Local",
      description:
        "إقامات وتنقّلات ومرشدون ومطاعم واتصال مُتحقَّق منها بشكل مستقل في كل أنحاء البوسنة، مع أدوات عملية للمسافرين المسلمين.",
    },
    hero: {
      title: "كل ما تحتاجه رحلتك، في مكان واحد.",
      lead: "إقامات وتنقّلات ومرشدون ومطاعم واتصال، كل منها مُتحقَّق منه بشكل مستقل، إلى جانب أدوات مدروسة للمسافرين المسلمين.",
    },
  },
  halal: {
    kicker: "للمسافرين المسلمين",
    title: "خيارات حلال وأوقات صلاة ومواقع مساجد، مدمجة.",
    lead: "صفِّ حسب الأماكن الحلال والمناسبة للعائلات، واطّلع على أوقات الصلاة اليوم، وجِد أقرب مسجد أينما كنت.",
    filters: ["حلال", "مناسب للعائلات", "خالٍ من الكحول", "مصلّى", "مناسب للنساء"],
    prayerTitle: "أوقات الصلاة اليوم",
    prayerCityLabel: "المدينة",
    prayerLoading: "جارٍ تحميل أوقات الصلاة",
    prayerError: "الأوقات المباشرة غير متاحة، يُعرَض يوم نموذجي.",
    nextLabel: "التالية",
    tomorrow: "غداً",
    prayerNames: { Fajr: "الفجر", Dhuhr: "الظهر", Asr: "العصر", Maghrib: "المغرب", Isha: "العشاء" },
    mapTitle: "مساجد قريبة",
    mapNote: "جامع غازي خسرو بك، والجامع الإمبراطوري، وجامع علي باشا، وأقرب المساجد إليك.",
    locateBtn: "ابحث عن مساجد قريبة",
    locating: "جارٍ تحديد الموقع",
  },
  categories: {
    kicker: "ما يمكنك ترتيبه",
    title: "الرحلة كاملة، منسَّقة بعناية.",
    lead: "المنصّات العالمية لديها فنادق. نحن لدينا الصورة المحلية كاملة، الأجزاء التي تجعل الرحلة تنجح حقاً.",
    items: [
      { t: "الإقامات", d: "فنادق وبيوت ضيافة وشقق وفلل، مع مرشّحات الحلال والعائلات." },
      { t: "التنقّلات والسائقون", d: "استقبال من المطار وسائقون خواص مُتحقَّق منهم، بأسعار واضحة وعادلة." },
      { t: "المرشدون والتجارب", d: "مرشدون محليون ورحلات يوم وتذاكر، يقودها من يعرفون البلد." },
      { t: "المطاعم", d: "مطاعم مع مرشّحات الحلال والمطبخ والعائلات، وتقييمات صادقة." },
      { t: "الاتصال", d: "شريحة eSIM وإرشادات العملة ومعلومات الأمان للحظة وصولك." },
      { t: "العقارات", d: "نقدّم مشتري المهجر والخليج إلى وكالات محلية مُتحقَّق منها." },
    ],
  },
};

export { en, de, ar };
