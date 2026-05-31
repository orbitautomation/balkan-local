/**
 * trust.ts - trust/verification page copy + social proof. `de`/`ar` typed
 * `typeof en` (missing key fails the build).
 */

const en = {
  trust: {
    meta: {
      title: "Trust & safety | Balkan Local",
      description:
        "Every partner is independently verified for licensing, ownership and reputation before it appears. This is how Balkan Local protects every booking.",
    },
    hero: {
      title: "Trust is the foundation, not a feature.",
      lead: "We built Balkan Local so that visitors could explore the region with complete confidence. Here is exactly how we protect every booking.",
    },
    kicker: "The trust layer",
    title: "Confidence, built into every booking.",
    lead: "Before any business appears on Balkan Local, a member of our team verifies its credentials, ownership and reputation. It is a standard the global platforms do not hold themselves to.",
    stats: [
      { n: "100%", l: "Partners independently verified" },
      { n: "0%", l: "Commission for founding partners" },
      { n: "24/7", l: "Multilingual traveler support" },
      { n: "On the ground", l: "A local team based in Bosnia" },
    ],
    points: [
      { t: "Credentials checked", d: "We confirm registration, licensing, ownership and insurance before a partner is ever listed." },
      { t: "Transparent pricing", d: "Clear, all-inclusive prices agreed up front, with nothing to settle on arrival." },
      { t: "Held to account", d: "A single substantiated complaint is enough for us to remove a partner from the platform." },
    ],
    verifyTitle: "How we verify every partner",
    verifySteps: [
      "Documentation: registration, licensing, ownership and insurance.",
      "Human review of credentials and real-world reputation.",
      "A quality assessment of standards, pricing and responsiveness.",
      "Verification granted, and maintained only while standards hold.",
    ],
    badgeTitle: "The Balkan Local verification mark",
    badgeBody: "When you see it, a member of our team has confirmed the business is licensed, legitimate and trustworthy.",
    badgeLabel: "Verified by Balkan Local",
    cta: {
      title: "Travel with complete confidence.",
      body: "Explore independently verified stays, drivers and guides across Bosnia.",
      label: "Explore Bosnia",
    },
  },
  social: {
    kicker: "What people say",
    title: "Trusted by travelers and partners alike.",
    quotes: [
      { q: "I knew the driver and the apartment were genuine before I paid a thing. That peace of mind is everything.", a: "Returning visitor, Frankfurt" },
      { q: "Having the whole trip in one place, with halal options clearly marked, made our family holiday effortless.", a: "Family traveler, Riyadh" },
      { q: "I listed my guesthouse as a founding partner, and the bookings were real, in my guests' language.", a: "Guesthouse owner, Sarajevo" },
    ],
  },
};

const de: typeof en = {
  trust: {
    meta: {
      title: "Vertrauen & Sicherheit | Balkan Local",
      description:
        "Jeder Partner wird vor seinem Erscheinen unabhängig auf Lizenzierung, Eigentum und Ruf geprüft. So schützt Balkan Local jede Buchung.",
    },
    hero: {
      title: "Vertrauen ist das Fundament, kein Feature.",
      lead: "Wir haben Balkan Local gebaut, damit Besucher die Region mit voller Sicherheit erkunden können. So genau schützen wir jede Buchung.",
    },
    kicker: "Die Vertrauensebene",
    title: "Sicherheit, in jede Buchung eingebaut.",
    lead: "Bevor ein Unternehmen bei Balkan Local erscheint, prüft ein Mitglied unseres Teams seine Nachweise, sein Eigentum und seinen Ruf. Ein Standard, an den sich die globalen Plattformen nicht halten.",
    stats: [
      { n: "100%", l: "Partner unabhängig geprüft" },
      { n: "0%", l: "Provision für Gründungspartner" },
      { n: "24/7", l: "Mehrsprachiger Reise-Support" },
      { n: "Vor Ort", l: "Ein lokales Team in Bosnien" },
    ],
    points: [
      { t: "Nachweise geprüft", d: "Wir bestätigen Registrierung, Lizenzierung, Eigentum und Versicherung, bevor ein Partner gelistet wird." },
      { t: "Transparente Preise", d: "Klare Komplettpreise, vorab vereinbart, bei Ankunft ist nichts zu begleichen." },
      { t: "Zur Verantwortung gezogen", d: "Eine einzige belegte Beschwerde genügt, um einen Partner von der Plattform zu entfernen." },
    ],
    verifyTitle: "So prüfen wir jeden Partner",
    verifySteps: [
      "Dokumentation: Registrierung, Lizenzierung, Eigentum und Versicherung.",
      "Menschliche Prüfung der Nachweise und des realen Rufs.",
      "Eine Qualitätsbewertung von Standards, Preisen und Erreichbarkeit.",
      "Verifizierung erteilt, und nur gehalten, solange die Standards bestehen.",
    ],
    badgeTitle: "Das Balkan-Local-Verifizierungszeichen",
    badgeBody: "Wenn du es siehst, hat ein Mitglied unseres Teams bestätigt, dass das Unternehmen lizenziert, seriös und vertrauenswürdig ist.",
    badgeLabel: "Verifiziert von Balkan Local",
    cta: {
      title: "Reise mit voller Sicherheit.",
      body: "Entdecke unabhängig geprüfte Unterkünfte, Fahrer und Guides in ganz Bosnien.",
      label: "Bosnien entdecken",
    },
  },
  social: {
    kicker: "Was die Leute sagen",
    title: "Von Reisenden und Partnern gleichermaßen vertraut.",
    quotes: [
      { q: "Ich wusste, dass Fahrer und Wohnung echt sind, bevor ich auch nur einen Cent zahlte. Diese Gewissheit ist alles.", a: "Wiederkehrende Besucherin, Frankfurt" },
      { q: "Die ganze Reise an einem Ort, mit klar markierten Halal-Optionen, machte unseren Familienurlaub mühelos.", a: "Familienreisender, Riad" },
      { q: "Ich habe meine Pension als Gründungspartner eingetragen, und die Buchungen waren echt, in der Sprache meiner Gäste.", a: "Pensionsinhaber, Sarajevo" },
    ],
  },
};

const ar: typeof en = {
  trust: {
    meta: {
      title: "الثقة والأمان | Balkan Local",
      description:
        "كل شريك يُتحقَّق منه بشكل مستقل من حيث الترخيص والملكية والسمعة قبل ظهوره. هكذا يحمي Balkan Local كل حجز.",
    },
    hero: {
      title: "الثقة هي الأساس، لا مجرّد ميزة.",
      lead: "بنينا Balkan Local كي يستكشف الزوّار المنطقة بثقة تامة. إليك بالضبط كيف نحمي كل حجز.",
    },
    kicker: "طبقة الثقة",
    title: "ثقة مبنيّة في كل حجز.",
    lead: "قبل أن يظهر أي نشاط على Balkan Local، يتحقّق أحد أعضاء فريقنا من وثائقه وملكيته وسمعته. إنه معيار لا تلتزم به المنصّات العالمية.",
    stats: [
      { n: "100%", l: "شركاء مُتحقَّق منهم بشكل مستقل" },
      { n: "0%", l: "عمولة للشركاء المؤسّسين" },
      { n: "24/7", l: "دعم متعدّد اللغات للمسافرين" },
      { n: "على الأرض", l: "فريق محلي مقرّه البوسنة" },
    ],
    points: [
      { t: "فحص الوثائق", d: "نؤكّد التسجيل والترخيص والملكية والتأمين قبل إدراج أي شريك." },
      { t: "أسعار شفّافة", d: "أسعار واضحة وشاملة يُتّفق عليها مسبقاً، ولا شيء يُدفع عند الوصول." },
      { t: "مساءلة كاملة", d: "شكوى واحدة موثّقة تكفي لإزالة شريك من المنصّة." },
    ],
    verifyTitle: "كيف نتحقّق من كل شريك",
    verifySteps: [
      "الوثائق: التسجيل والترخيص والملكية والتأمين.",
      "مراجعة بشرية للوثائق والسمعة في الواقع.",
      "تقييم للجودة من حيث المعايير والأسعار وسرعة الاستجابة.",
      "مَنح التوثيق، والحفاظ عليه فقط ما دامت المعايير قائمة.",
    ],
    badgeTitle: "علامة التوثيق من Balkan Local",
    badgeBody: "حين تراها، يكون أحد أعضاء فريقنا قد أكّد أن النشاط مرخّص وشرعي وجدير بالثقة.",
    badgeLabel: "موثّق من Balkan Local",
    cta: {
      title: "سافر بثقة تامة.",
      body: "اكتشف إقامات وسائقين ومرشدين مُتحقَّق منهم بشكل مستقل في كل أنحاء البوسنة.",
      label: "اكتشف البوسنة",
    },
  },
  social: {
    kicker: "ماذا يقول الناس",
    title: "موثوق من المسافرين والشركاء على حدّ سواء.",
    quotes: [
      { q: "عرفت أن السائق والشقة حقيقيان قبل أن أدفع شيئاً. راحة البال هذه لا تُقدَّر بثمن.", a: "زائرة عائدة، فرانكفورت" },
      { q: "وجود الرحلة كاملة في مكان واحد، مع خيارات حلال موضّحة بوضوح، جعل عطلتنا العائلية بلا عناء.", a: "مسافر عائلي، الرياض" },
      { q: "أدرجت بيت ضيافتي كشريك مؤسّس، وكانت الحجوزات حقيقية، وبلغة ضيوفي.", a: "صاحب بيت ضيافة، سراييفو" },
    ],
  },
};

export { en, de, ar };
