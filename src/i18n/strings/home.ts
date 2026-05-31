/**
 * home.ts - copy for the consumer-first home page. `de` and `ar` typed
 * `typeof en` so a missing key fails the build. No `as const` on copy.
 * Country `status` ("live" / "soon") is a logic key, do not translate it.
 */

const en = {
  hero: {
    eyebrow: "Now live in Bosnia & Herzegovina",
    titleA: "Experience the Balkans like a",
    titleHl: "local",
    sub: "Plan, book and manage your entire trip from one account. Every stay, transfer and guide is independently verified, organised in a single itinerary with one inbox and one transparent price.",
    ctaPlan: "Start planning",
    ctaHow: "See how it works",
    loginPrompt: "Already planning a trip?",
    loginCta: "Log in to your dashboard",
    badges: [
      "Independently verified partners",
      "Transparent, all-inclusive pricing",
      "One itinerary, one account",
      "Genuine local expertise",
    ],
  },
  countries: {
    kicker: "Choose your destination",
    title: "Where are you headed?",
    activeNote:
      "Balkan Local is live in Bosnia and Herzegovina today. Further countries will open as we verify partners on the ground.",
    soonLabel: "Coming soon",
    liveLabel: "Available now",
    cta: "Explore Bosnia",
    list: [
      { id: "ba", flag: "\u{1F1E7}\u{1F1E6}", name: "Bosnia & Herzegovina", status: "live" },
      { id: "hr", flag: "\u{1F1ED}\u{1F1F7}", name: "Croatia", status: "soon" },
      { id: "rs", flag: "\u{1F1F7}\u{1F1F8}", name: "Serbia", status: "soon" },
      { id: "me", flag: "\u{1F1F2}\u{1F1EA}", name: "Montenegro", status: "soon" },
      { id: "al", flag: "\u{1F1E6}\u{1F1F1}", name: "Albania", status: "soon" },
      { id: "mk", flag: "\u{1F1F2}\u{1F1F0}", name: "North Macedonia", status: "soon" },
    ],
  },
  tripDash: {
    kicker: "One dashboard for the whole journey",
    title: "Your entire trip in one place.",
    lead: "No more juggling a dozen booking sites, scattered messages and lost confirmation emails. Here is how a trip to Sarajevo comes together inside Balkan Local.",
    sampleTrip: "Sarajevo, five days",
    tabs: { itinerary: "Itinerary", bookings: "Bookings", inbox: "Inbox", payment: "Payment" },
    itinerary: [
      { day: "Day 1", time: "14:20", title: "Airport collection", meta: "Verified private driver. Sarajevo airport to the old town. €18, all inclusive.", tag: "Transfer" },
      { day: "Day 1", time: "16:00", title: "Check in at a Baščaršija guesthouse", meta: "Halal breakfast, family room, independently verified.", tag: "Stay" },
      { day: "Day 2", time: "10:00", title: "Old town walking tour", meta: "Local guide, three hours, English, German and Arabic.", tag: "Guide" },
      { day: "Day 3", time: "09:30", title: "Mostar and Blagaj day trip", meta: "Private car and driver, with a halal lunch stop.", tag: "Day trip" },
      { day: "Day 4", time: "19:30", title: "Dinner, traditional Bosnian cuisine", meta: "Verified, family friendly, city centre.", tag: "Dining" },
    ],
    bookings: [
      { title: "Baščaršija guesthouse", status: "Confirmed", confirmed: true, meta: "Four nights, two guests. Ref BL-3920." },
      { title: "Airport transfer", status: "Confirmed", confirmed: true, meta: "Return journey. Ref BL-3921." },
      { title: "Mostar day trip", status: "Confirmed", confirmed: true, meta: "Private, one day. Ref BL-3922." },
      { title: "Old town guide", status: "Pending", confirmed: false, meta: "Awaiting time confirmation." },
    ],
    inbox: [
      { from: "Amela, your host", preview: "Your room can be ready early if you would like to check in at 14:00.", time: "2h" },
      { from: "Tarik, your driver", preview: "I will be waiting at arrivals with a Balkan Local sign. Safe travels.", time: "5h" },
      { from: "Your Mostar guide", preview: "Lunch is arranged. I have reserved the halal restaurant by the river.", time: "1d" },
    ],
    payment: {
      title: "One transparent receipt",
      rows: [
        { label: "Guesthouse, four nights", amount: "€240" },
        { label: "Airport transfer, return", amount: "€34" },
        { label: "Mostar day trip", amount: "€120" },
        { label: "Old town guide", amount: "€45" },
      ],
      totalLabel: "Total, all inclusive",
      total: "€439",
      note: "No hidden fees. Nothing to settle on arrival.",
    },
  },
  pillars: {
    kicker: "Why travelers choose us",
    title: "A more considered way to travel.",
    items: [
      { t: "Independently verified", d: "Every partner is checked for licensing, ownership and reputation before they appear. You only ever see businesses we trust." },
      { t: "Effortlessly organized", d: "Your itinerary, bookings, conversations and payment live together in a single dashboard, from arrival to departure." },
      { t: "Authentic local expertise", d: "You work with genuine local operators and guides who know the country, not a faceless global marketplace." },
    ],
  },
  oneplace: {
    kicker: "One trip, one place",
    title: "Everything together, nothing scattered.",
    lead: "Replace a dozen tabs, unfamiliar phone numbers and lost emails with a single, trusted account.",
    points: [
      { t: "One itinerary", d: "Stays, transfers, tours and dining on a single timeline, with everyone on the same page." },
      { t: "One inbox", d: "Message every host and driver in one place, in your language." },
      { t: "One payment", d: "Transparent, all-inclusive prices and a single, clear receipt." },
      { t: "One standard", d: "Every business independently verified. If it is not trustworthy, it is not here." },
    ],
  },
  muslim: {
    kicker: "Travelling as a Muslim family",
    title: "Thoughtful tools for Muslim travelers, built in.",
    lead: "Filter for halal and family-friendly places, view today's prayer times, and find the nearest mosque wherever you are.",
    cta: "Explore Muslim-friendly travel",
  },
  teasers: {
    experiences: { title: "Everything your trip needs", body: "Stays, transfers, guides, dining and connectivity, all in one place.", cta: "Browse experiences" },
    trust: { title: "Confidence in every booking", body: "Every partner is verified before it ever reaches you.", cta: "How we verify" },
    business: { title: "Run a business in Bosnia?", body: "Reach German-speaking diaspora and Gulf families. Complimentary for founding partners.", cta: "Partner with us" },
    property: { title: "Considering buying property?", body: "We introduce diaspora and Gulf buyers to verified local agencies.", cta: "Learn more" },
  },
};

const de: typeof en = {
  hero: {
    eyebrow: "Jetzt verfügbar in Bosnien & Herzegowina",
    titleA: "Erlebe den Balkan wie ein",
    titleHl: "Einheimischer",
    sub: "Plane, buche und verwalte deine ganze Reise über ein Konto. Jede Unterkunft, jeder Transfer und jeder Guide ist unabhängig geprüft, gebündelt in einem Reiseplan mit einem Posteingang und einem transparenten Preis.",
    ctaPlan: "Jetzt planen",
    ctaHow: "So funktioniert es",
    loginPrompt: "Planst du schon eine Reise?",
    loginCta: "Melde dich in deinem Dashboard an",
    badges: [
      "Unabhängig geprüfte Partner",
      "Transparente Komplettpreise",
      "Ein Reiseplan, ein Konto",
      "Echte lokale Expertise",
    ],
  },
  countries: {
    kicker: "Wähle dein Reiseziel",
    title: "Wohin geht es?",
    activeNote:
      "Balkan Local ist heute in Bosnien und Herzegowina verfügbar. Weitere Länder folgen, sobald wir Partner vor Ort geprüft haben.",
    soonLabel: "Bald verfügbar",
    liveLabel: "Jetzt verfügbar",
    cta: "Bosnien entdecken",
    list: [
      { id: "ba", flag: "\u{1F1E7}\u{1F1E6}", name: "Bosnien & Herzegowina", status: "live" },
      { id: "hr", flag: "\u{1F1ED}\u{1F1F7}", name: "Kroatien", status: "soon" },
      { id: "rs", flag: "\u{1F1F7}\u{1F1F8}", name: "Serbien", status: "soon" },
      { id: "me", flag: "\u{1F1F2}\u{1F1EA}", name: "Montenegro", status: "soon" },
      { id: "al", flag: "\u{1F1E6}\u{1F1F1}", name: "Albanien", status: "soon" },
      { id: "mk", flag: "\u{1F1F2}\u{1F1F0}", name: "Nordmazedonien", status: "soon" },
    ],
  },
  tripDash: {
    kicker: "Ein Dashboard für die ganze Reise",
    title: "Deine ganze Reise an einem Ort.",
    lead: "Kein Jonglieren mehr mit einem Dutzend Buchungsseiten, verstreuten Nachrichten und verlorenen Bestätigungs-E-Mails. So fügt sich eine Reise nach Sarajevo in Balkan Local zusammen.",
    sampleTrip: "Sarajevo, fünf Tage",
    tabs: { itinerary: "Reiseplan", bookings: "Buchungen", inbox: "Posteingang", payment: "Zahlung" },
    itinerary: [
      { day: "Tag 1", time: "14:20", title: "Abholung am Flughafen", meta: "Geprüfter Privatfahrer. Vom Flughafen Sarajevo in die Altstadt. 18 €, alles inklusive.", tag: "Transfer" },
      { day: "Tag 1", time: "16:00", title: "Check-in in einer Pension in Baščaršija", meta: "Halal-Frühstück, Familienzimmer, unabhängig geprüft.", tag: "Unterkunft" },
      { day: "Tag 2", time: "10:00", title: "Altstadtrundgang", meta: "Lokaler Guide, drei Stunden, Englisch, Deutsch und Arabisch.", tag: "Guide" },
      { day: "Tag 3", time: "09:30", title: "Tagesausflug nach Mostar und Blagaj", meta: "Privatwagen mit Fahrer, inklusive Halal-Mittagsstopp.", tag: "Tagesausflug" },
      { day: "Tag 4", time: "19:30", title: "Abendessen, traditionelle bosnische Küche", meta: "Geprüft, familienfreundlich, im Zentrum.", tag: "Essen" },
    ],
    bookings: [
      { title: "Pension Baščaršija", status: "Bestätigt", confirmed: true, meta: "Vier Nächte, zwei Gäste. Ref. BL-3920." },
      { title: "Flughafentransfer", status: "Bestätigt", confirmed: true, meta: "Hin- und Rückfahrt. Ref. BL-3921." },
      { title: "Tagesausflug Mostar", status: "Bestätigt", confirmed: true, meta: "Privat, ein Tag. Ref. BL-3922." },
      { title: "Altstadt-Guide", status: "Ausstehend", confirmed: false, meta: "Wartet auf Zeitbestätigung." },
    ],
    inbox: [
      { from: "Amela, deine Gastgeberin", preview: "Dein Zimmer kann früher bereit sein, falls du um 14:00 einchecken möchtest.", time: "2 Std." },
      { from: "Tarik, dein Fahrer", preview: "Ich warte mit einem Balkan-Local-Schild an der Ankunft. Gute Reise.", time: "5 Std." },
      { from: "Dein Guide in Mostar", preview: "Das Mittagessen ist arrangiert. Ich habe das Halal-Restaurant am Fluss reserviert.", time: "1 Tag" },
    ],
    payment: {
      title: "Eine transparente Rechnung",
      rows: [
        { label: "Pension, vier Nächte", amount: "240 €" },
        { label: "Flughafentransfer, hin und zurück", amount: "34 €" },
        { label: "Tagesausflug Mostar", amount: "120 €" },
        { label: "Altstadt-Guide", amount: "45 €" },
      ],
      totalLabel: "Gesamt, alles inklusive",
      total: "439 €",
      note: "Keine versteckten Gebühren. Bei Ankunft ist nichts zu begleichen.",
    },
  },
  pillars: {
    kicker: "Warum Reisende uns wählen",
    title: "Eine durchdachtere Art zu reisen.",
    items: [
      { t: "Unabhängig geprüft", d: "Jeder Partner wird auf Lizenzierung, Eigentum und Ruf geprüft, bevor er erscheint. Du siehst nur Anbieter, denen wir vertrauen." },
      { t: "Mühelos organisiert", d: "Reiseplan, Buchungen, Nachrichten und Zahlung liegen in einem einzigen Dashboard zusammen, von der Ankunft bis zur Abreise." },
      { t: "Echte lokale Expertise", d: "Du arbeitest mit echten lokalen Anbietern und Guides, die das Land kennen, nicht mit einem anonymen globalen Marktplatz." },
    ],
  },
  oneplace: {
    kicker: "Eine Reise, ein Ort",
    title: "Alles zusammen, nichts verstreut.",
    lead: "Ersetze ein Dutzend Tabs, unbekannte Telefonnummern und verlorene E-Mails durch ein einziges, vertrauenswürdiges Konto.",
    points: [
      { t: "Ein Reiseplan", d: "Unterkünfte, Transfers, Touren und Restaurants auf einer Zeitleiste, alle auf demselben Stand." },
      { t: "Ein Posteingang", d: "Schreibe jedem Gastgeber und Fahrer an einem Ort, in deiner Sprache." },
      { t: "Eine Zahlung", d: "Transparente Komplettpreise und eine einzige, klare Rechnung." },
      { t: "Ein Standard", d: "Jedes Unternehmen unabhängig geprüft. Was nicht vertrauenswürdig ist, ist hier nicht zu finden." },
    ],
  },
  muslim: {
    kicker: "Als muslimische Familie reisen",
    title: "Durchdachte Funktionen für muslimische Reisende, integriert.",
    lead: "Filtere nach Halal- und familienfreundlichen Orten, sieh die heutigen Gebetszeiten und finde die nächste Moschee, wo immer du bist.",
    cta: "Muslimfreundliches Reisen entdecken",
  },
  teasers: {
    experiences: { title: "Alles, was deine Reise braucht", body: "Unterkünfte, Transfers, Guides, Restaurants und Konnektivität, alles an einem Ort.", cta: "Erlebnisse ansehen" },
    trust: { title: "Sicherheit bei jeder Buchung", body: "Jeder Partner wird geprüft, bevor er dich erreicht.", cta: "So prüfen wir" },
    business: { title: "Betreibst du ein Unternehmen in Bosnien?", body: "Erreiche deutschsprachige Diaspora und Golf-Familien. Kostenlos für Gründungspartner.", cta: "Partner werden" },
    property: { title: "Denkst du über einen Immobilienkauf nach?", body: "Wir vermitteln Diaspora- und Golf-Käufer an geprüfte lokale Agenturen.", cta: "Mehr erfahren" },
  },
};

const ar: typeof en = {
  hero: {
    eyebrow: "متاح الآن في البوسنة والهرسك",
    titleA: "اكتشف البلقان كابن",
    titleHl: "البلد",
    sub: "خطّط واحجز وأدِر رحلتك كاملة من حساب واحد. كل إقامة وتنقّل ومرشد مُتحقَّق منه بشكل مستقل، ومنظّم في برنامج واحد مع صندوق وارد واحد وسعر واحد شفّاف.",
    ctaPlan: "ابدأ التخطيط",
    ctaHow: "شاهد كيف يعمل",
    loginPrompt: "أتخطّط لرحلة بالفعل؟",
    loginCta: "سجّل الدخول إلى لوحة تحكّمك",
    badges: [
      "شركاء مُتحقَّق منهم بشكل مستقل",
      "أسعار شفّافة وشاملة",
      "برنامج واحد، حساب واحد",
      "خبرة محلية أصيلة",
    ],
  },
  countries: {
    kicker: "اختر وجهتك",
    title: "إلى أين أنت متّجه؟",
    activeNote:
      "‏Balkan Local متاح اليوم في البوسنة والهرسك. ستُفتَح وجهات أخرى تباعاً كلما تحقّقنا من الشركاء على الأرض.",
    soonLabel: "قريباً",
    liveLabel: "متاح الآن",
    cta: "اكتشف البوسنة",
    list: [
      { id: "ba", flag: "\u{1F1E7}\u{1F1E6}", name: "البوسنة والهرسك", status: "live" },
      { id: "hr", flag: "\u{1F1ED}\u{1F1F7}", name: "كرواتيا", status: "soon" },
      { id: "rs", flag: "\u{1F1F7}\u{1F1F8}", name: "صربيا", status: "soon" },
      { id: "me", flag: "\u{1F1F2}\u{1F1EA}", name: "الجبل الأسود", status: "soon" },
      { id: "al", flag: "\u{1F1E6}\u{1F1F1}", name: "ألبانيا", status: "soon" },
      { id: "mk", flag: "\u{1F1F2}\u{1F1F0}", name: "مقدونيا الشمالية", status: "soon" },
    ],
  },
  tripDash: {
    kicker: "لوحة تحكّم واحدة للرحلة بأكملها",
    title: "رحلتك كاملة في مكان واحد.",
    lead: "لا مزيد من التنقّل بين عشرات مواقع الحجز والرسائل المتناثرة ورسائل التأكيد الضائعة. إليك كيف تتشكّل رحلة إلى سراييفو داخل Balkan Local.",
    sampleTrip: "سراييفو، خمسة أيام",
    tabs: { itinerary: "البرنامج", bookings: "الحجوزات", inbox: "الوارد", payment: "الدفع" },
    itinerary: [
      { day: "اليوم 1", time: "14:20", title: "الاستقبال من المطار", meta: "سائق خاص مُتحقَّق منه. من مطار سراييفو إلى البلدة القديمة. 18 يورو شاملة.", tag: "تنقّل" },
      { day: "اليوم 1", time: "16:00", title: "تسجيل الدخول في بيت ضيافة بباشتشارشيا", meta: "فطور حلال، غرفة عائلية، مُتحقَّق منه بشكل مستقل.", tag: "إقامة" },
      { day: "اليوم 2", time: "10:00", title: "جولة سيراً في البلدة القديمة", meta: "مرشد محلي، ثلاث ساعات، بالإنجليزية والألمانية والعربية.", tag: "مرشد" },
      { day: "اليوم 3", time: "09:30", title: "رحلة يوم إلى موستار وبلاغاي", meta: "سيارة خاصة مع سائق، وتشمل توقّفاً لغداء حلال.", tag: "رحلة يوم" },
      { day: "اليوم 4", time: "19:30", title: "عشاء، مطبخ بوسني تقليدي", meta: "مُتحقَّق منه، مناسب للعائلات، وسط المدينة.", tag: "طعام" },
    ],
    bookings: [
      { title: "بيت ضيافة باشتشارشيا", status: "مؤكّد", confirmed: true, meta: "أربع ليالٍ، ضيفان. مرجع BL-3920." },
      { title: "تنقّل المطار", status: "مؤكّد", confirmed: true, meta: "ذهاب وإياب. مرجع BL-3921." },
      { title: "رحلة يوم إلى موستار", status: "مؤكّد", confirmed: true, meta: "خاصة، يوم واحد. مرجع BL-3922." },
      { title: "مرشد البلدة القديمة", status: "قيد الانتظار", confirmed: false, meta: "بانتظار تأكيد الوقت." },
    ],
    inbox: [
      { from: "أميلة، مضيفتك", preview: "يمكن تجهيز غرفتك مبكراً إذا رغبت بتسجيل الدخول الساعة 14:00.", time: "ساعتان" },
      { from: "طارق، سائقك", preview: "سأنتظرك عند الوصول بلافتة Balkan Local. رحلة آمنة.", time: "5 ساعات" },
      { from: "مرشدك في موستار", preview: "تم ترتيب الغداء. حجزت المطعم الحلال على ضفة النهر.", time: "يوم" },
    ],
    payment: {
      title: "إيصال واحد شفّاف",
      rows: [
        { label: "بيت الضيافة، أربع ليالٍ", amount: "240 يورو" },
        { label: "تنقّل المطار، ذهاب وإياب", amount: "34 يورو" },
        { label: "رحلة يوم إلى موستار", amount: "120 يورو" },
        { label: "مرشد البلدة القديمة", amount: "45 يورو" },
      ],
      totalLabel: "الإجمالي، شامل كل شيء",
      total: "439 يورو",
      note: "لا رسوم خفية. لا شيء يُدفع عند الوصول.",
    },
  },
  pillars: {
    kicker: "لماذا يختارنا المسافرون",
    title: "طريقة أكثر تروّياً للسفر.",
    items: [
      { t: "تحقّق مستقل", d: "كل شريك يُفحَص من حيث الترخيص والملكية والسمعة قبل ظهوره. لا ترى سوى الأنشطة التي نثق بها." },
      { t: "تنظيم بلا عناء", d: "برنامجك وحجوزاتك ومحادثاتك ودفعك في لوحة تحكّم واحدة، من الوصول إلى المغادرة." },
      { t: "خبرة محلية أصيلة", d: "تتعامل مع مشغّلين ومرشدين محليين حقيقيين يعرفون البلد، لا مع سوق عالمي بلا وجه." },
    ],
  },
  oneplace: {
    kicker: "رحلة واحدة، مكان واحد",
    title: "كل شيء معاً، لا شيء متناثر.",
    lead: "استبدل عشرات التبويبات وأرقام الهواتف المجهولة والرسائل الضائعة بحساب واحد موثوق.",
    points: [
      { t: "برنامج واحد", d: "إقامات وتنقّلات وجولات ومطاعم على خط زمني واحد، والجميع على اطّلاع." },
      { t: "صندوق وارد واحد", d: "راسل كل مضيف وسائق في مكان واحد، بلغتك." },
      { t: "دفعة واحدة", d: "أسعار شفّافة شاملة وإيصال واحد واضح." },
      { t: "معيار واحد", d: "كل نشاط مُتحقَّق منه بشكل مستقل. ما لا يكون جديراً بالثقة، لا مكان له هنا." },
    ],
  },
  muslim: {
    kicker: "السفر كعائلة مسلمة",
    title: "أدوات مدروسة للمسافرين المسلمين، مدمجة.",
    lead: "صفِّ حسب الأماكن الحلال والمناسبة للعائلات، واطّلع على أوقات الصلاة اليوم، وجِد أقرب مسجد أينما كنت.",
    cta: "اكتشف السفر المناسب للمسلمين",
  },
  teasers: {
    experiences: { title: "كل ما تحتاجه رحلتك", body: "إقامات وتنقّلات ومرشدون ومطاعم واتصال، كلها في مكان واحد.", cta: "تصفّح التجارب" },
    trust: { title: "ثقة في كل حجز", body: "كل شريك يُتحقَّق منه قبل أن يصلك.", cta: "كيف نتحقّق" },
    business: { title: "تدير نشاطاً في البوسنة؟", body: "اوصل إلى المهجر الناطق بالألمانية وعائلات الخليج. مجاناً للشركاء المؤسّسين.", cta: "كن شريكاً" },
    property: { title: "تفكّر في شراء عقار؟", body: "نقدّم مشتري المهجر والخليج إلى وكالات محلية مُتحقَّق منها.", cta: "اعرف المزيد" },
  },
};

export { en, de, ar };
