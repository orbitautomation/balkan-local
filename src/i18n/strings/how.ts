/**
 * how.ts - "how it works" page + steps. `de`/`ar` typed `typeof en`.
 */

const en = {
  how: {
    meta: {
      title: "How it works | Balkan Local",
      description:
        "Plan, book and manage your whole Balkan trip from one account. Discover verified partners, book with confidence, and travel with everything in one place.",
    },
    hero: {
      title: "One trip. One platform. Effortless.",
      lead: "Most trips mean a dozen tabs, unfamiliar phone numbers and lost confirmation emails. Balkan Local brings discovery, booking and your entire itinerary into a single, trusted account.",
    },
    kicker: "How it works",
    title: "Three steps, complete confidence.",
    steps: [
      { n: "1", t: "Discover", d: "Browse independently verified stays, transfers, guides and dining, filtered for halal and family travel." },
      { n: "2", t: "Book with confidence", d: "Transparent pricing, secure checkout and clear refunds, with the verification mark on every listing." },
      { n: "3", t: "Travel with ease", d: "Your whole trip in one dashboard, multilingual support around the clock, and the local detail no one else covers." },
    ],
    oneTitle: "Everything, in one dashboard.",
    cta: {
      title: "Ready to travel the easy way?",
      body: "Begin planning your Bosnia trip, verified and organised, all in one place.",
      label: "Start planning",
    },
  },
};

const de: typeof en = {
  how: {
    meta: {
      title: "So funktioniert es | Balkan Local",
      description:
        "Plane, buche und verwalte deine ganze Balkanreise über ein Konto. Entdecke geprüfte Partner, buche mit Sicherheit und reise mit allem an einem Ort.",
    },
    hero: {
      title: "Eine Reise. Eine Plattform. Mühelos.",
      lead: "Die meisten Reisen bedeuten ein Dutzend Tabs, unbekannte Telefonnummern und verlorene Bestätigungs-E-Mails. Balkan Local bündelt Entdeckung, Buchung und deinen ganzen Reiseplan in einem einzigen, vertrauenswürdigen Konto.",
    },
    kicker: "So funktioniert es",
    title: "Drei Schritte, volle Sicherheit.",
    steps: [
      { n: "1", t: "Entdecken", d: "Durchstöbere unabhängig geprüfte Unterkünfte, Transfers, Guides und Restaurants, gefiltert für Halal- und Familienreisen." },
      { n: "2", t: "Sicher buchen", d: "Transparente Preise, sicherer Checkout und klare Rückerstattungen, mit dem Verifizierungszeichen auf jedem Eintrag." },
      { n: "3", t: "Entspannt reisen", d: "Deine ganze Reise in einem Dashboard, mehrsprachiger Support rund um die Uhr und das lokale Detail, das sonst niemand abdeckt." },
    ],
    oneTitle: "Alles, in einem Dashboard.",
    cta: {
      title: "Bereit, entspannt zu reisen?",
      body: "Beginne deine Bosnien-Reise zu planen, geprüft und organisiert, alles an einem Ort.",
      label: "Jetzt planen",
    },
  },
};

const ar: typeof en = {
  how: {
    meta: {
      title: "كيف يعمل | Balkan Local",
      description:
        "خطّط واحجز وأدِر رحلتك البلقانية كاملة من حساب واحد. اكتشف شركاء مُتحقَّقاً منهم، واحجز بثقة، وسافر وكل شيء في مكان واحد.",
    },
    hero: {
      title: "رحلة واحدة. منصّة واحدة. بلا عناء.",
      lead: "معظم الرحلات تعني عشرات التبويبات وأرقام هواتف مجهولة ورسائل تأكيد ضائعة. يجمع Balkan Local الاكتشاف والحجز وبرنامج رحلتك كاملاً في حساب واحد موثوق.",
    },
    kicker: "كيف يعمل",
    title: "ثلاث خطوات، ثقة تامة.",
    steps: [
      { n: "1", t: "اكتشف", d: "تصفّح إقامات وتنقّلات ومرشدين ومطاعم مُتحقَّقاً منها بشكل مستقل، مع مرشّحات للسفر الحلال والعائلي." },
      { n: "2", t: "احجز بثقة", d: "أسعار شفّافة، ودفع آمن، واسترداد واضح، مع علامة التوثيق على كل إدراج." },
      { n: "3", t: "سافر بيسر", d: "رحلتك كاملة في لوحة تحكّم واحدة، ودعم متعدّد اللغات على مدار الساعة، والتفاصيل المحلية التي لا يغطّيها غيرنا." },
    ],
    oneTitle: "كل شيء، في لوحة تحكّم واحدة.",
    cta: {
      title: "مستعد للسفر بالطريقة السهلة؟",
      body: "ابدأ التخطيط لرحلتك إلى البوسنة، مُتحقَّق منها ومنظّمة، كلها في مكان واحد.",
      label: "ابدأ التخطيط",
    },
  },
};

export { en, de, ar };
