/**
 * property.ts - "Buy property" page copy (realtor qualified-lead capture).
 * We are an introducer, not a broker. `de`/`ar` typed `typeof en`.
 */

const en = {
  property: {
    meta: {
      title: "Buy property in the Balkans | Balkan Local",
      description:
        "We introduce diaspora and Gulf buyers to verified local real-estate agencies in Bosnia. A trusted introduction, in your language.",
    },
    hero: {
      title: "Buy in the Balkans with confidence.",
      lead: "We are your trusted introduction, not a broker. Tell us what you are looking for, and we will connect you with a verified local agency that speaks your language.",
    },
    intro: {
      title: "How it works for buyers",
      steps: [
        "Tell us your budget, location and timeline.",
        "We match you with a verified partner agency.",
        "They reach out in your language, with no pressure.",
        "You view properties with a trusted local at your side.",
      ],
    },
    kicker: "For property buyers",
    title: "Considering a home in the Balkans?",
    lead: "Diaspora and Gulf buyers rely on us to introduce them to verified local agencies, with no surprises and in their own language. Tell us what you are looking for and we will introduce the right partner.",
    fields: {
      budget: "Budget",
      budgetOptions: ["Under €100k", "€100k to €250k", "€250k to €500k", "€500k and above"],
      location: "Preferred location",
      purpose: "Purpose",
      purposeOptions: ["Holiday home", "Investment or rental", "Family relocation", "Residency"],
      timeline: "Timeline",
      timelineOptions: ["Exploring", "Three to six months", "Ready now"],
      name: "Your name",
      email: "Email",
      phone: "Phone or WhatsApp",
      consent: "I agree to be introduced to a verified partner agency, and for Balkan Local to share these details for that purpose.",
    },
    submit: "Introduce me to an agency",
    successTitle: "Thank you. We will introduce a verified agency.",
    successBody: "A partner suited to your budget, location and language will be in touch. No spam, no pressure.",
    cta: {
      title: "Ready to find your place?",
      body: "Share what you are looking for, and we will introduce the right agency.",
      label: "Begin your enquiry",
    },
  },
};

const de: typeof en = {
  property: {
    meta: {
      title: "Immobilien auf dem Balkan kaufen | Balkan Local",
      description:
        "Wir vermitteln Diaspora- und Golf-Käufer an geprüfte lokale Immobilienagenturen in Bosnien. Eine vertrauenswürdige Vermittlung, in deiner Sprache.",
    },
    hero: {
      title: "Kaufe auf dem Balkan mit Sicherheit.",
      lead: "Wir sind deine vertrauenswürdige Vermittlung, kein Makler. Sag uns, was du suchst, und wir verbinden dich mit einer geprüften lokalen Agentur, die deine Sprache spricht.",
    },
    intro: {
      title: "So funktioniert es für Käufer",
      steps: [
        "Sag uns dein Budget, deinen Ort und deinen Zeitrahmen.",
        "Wir bringen dich mit einer geprüften Partneragentur zusammen.",
        "Sie meldet sich in deiner Sprache, ohne Druck.",
        "Du besichtigst Immobilien mit einem vertrauenswürdigen Einheimischen an deiner Seite.",
      ],
    },
    kicker: "Für Immobilienkäufer",
    title: "Denkst du über ein Zuhause auf dem Balkan nach?",
    lead: "Diaspora- und Golf-Käufer verlassen sich auf uns, um sie an geprüfte lokale Agenturen zu vermitteln, ohne Überraschungen und in ihrer eigenen Sprache. Sag uns, was du suchst, und wir vermitteln den richtigen Partner.",
    fields: {
      budget: "Budget",
      budgetOptions: ["Unter 100.000 €", "100.000 € bis 250.000 €", "250.000 € bis 500.000 €", "500.000 € und mehr"],
      location: "Bevorzugter Ort",
      purpose: "Zweck",
      purposeOptions: ["Ferienhaus", "Investition oder Vermietung", "Familienumzug", "Aufenthalt"],
      timeline: "Zeitrahmen",
      timelineOptions: ["Erkunden", "Drei bis sechs Monate", "Sofort bereit"],
      name: "Dein Name",
      email: "E-Mail",
      phone: "Telefon oder WhatsApp",
      consent: "Ich stimme zu, an eine geprüfte Partneragentur vermittelt zu werden, und dass Balkan Local diese Angaben dafür weitergibt.",
    },
    submit: "Vermittle mir eine Agentur",
    successTitle: "Danke. Wir vermitteln eine geprüfte Agentur.",
    successBody: "Ein Partner, der zu deinem Budget, Ort und deiner Sprache passt, meldet sich. Kein Spam, kein Druck.",
    cta: {
      title: "Bereit, dein Zuhause zu finden?",
      body: "Teile uns mit, was du suchst, und wir vermitteln die richtige Agentur.",
      label: "Anfrage starten",
    },
  },
};

const ar: typeof en = {
  property: {
    meta: {
      title: "اشترِ عقاراً في البلقان | Balkan Local",
      description:
        "نقدّم مشتري المهجر والخليج إلى وكالات عقارية محلية مُتحقَّق منها في البوسنة. تقديم موثوق، بلغتك.",
    },
    hero: {
      title: "اشترِ في البلقان بثقة.",
      lead: "نحن تقديمك الموثوق، لسنا وسيطاً. أخبرنا بما تبحث عنه، وسنصلك بوكالة محلية مُتحقَّق منها تتحدّث لغتك.",
    },
    intro: {
      title: "كيف يعمل للمشترين",
      steps: [
        "أخبرنا بميزانيتك وموقعك وإطارك الزمني.",
        "نوفّق بينك وبين وكالة شريكة مُتحقَّق منها.",
        "تتواصل معك بلغتك، دون ضغط.",
        "تعاين العقارات وإلى جانبك محلي موثوق.",
      ],
    },
    kicker: "لمشتري العقارات",
    title: "تفكّر في منزل في البلقان؟",
    lead: "يعتمد علينا مشترو المهجر والخليج لتقديمهم إلى وكالات محلية مُتحقَّق منها، دون مفاجآت وبلغتهم. أخبرنا بما تبحث عنه وسنقدّم لك الشريك المناسب.",
    fields: {
      budget: "الميزانية",
      budgetOptions: ["أقل من 100 ألف يورو", "100 إلى 250 ألف يورو", "250 إلى 500 ألف يورو", "500 ألف يورو فأكثر"],
      location: "الموقع المفضّل",
      purpose: "الغرض",
      purposeOptions: ["منزل عطلات", "استثمار أو تأجير", "انتقال عائلي", "إقامة"],
      timeline: "الإطار الزمني",
      timelineOptions: ["استكشاف", "ثلاثة إلى ستة أشهر", "جاهز الآن"],
      name: "اسمك",
      email: "البريد الإلكتروني",
      phone: "الهاتف أو واتساب",
      consent: "أوافق على تقديمي إلى وكالة شريكة مُتحقَّق منها، وعلى أن يشارك Balkan Local هذه التفاصيل لهذا الغرض.",
    },
    submit: "قدّمني إلى وكالة",
    successTitle: "شكراً. سنقدّم لك وكالة مُتحقَّقاً منها.",
    successBody: "سيتواصل معك شريك يناسب ميزانيتك وموقعك ولغتك. لا إزعاج ولا ضغط.",
    cta: {
      title: "مستعد لإيجاد مكانك؟",
      body: "شاركنا ما تبحث عنه، وسنقدّم لك الوكالة المناسبة.",
      label: "ابدأ استفسارك",
    },
  },
};

export { en, de, ar };
