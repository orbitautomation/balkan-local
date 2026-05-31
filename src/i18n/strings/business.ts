/**
 * business.ts - "For business" page copy (founding offer, value, vetting,
 * dashboard mockup, multi-step signup form). `de`/`ar` typed `typeof en`.
 */

const en = {
  business: {
    meta: {
      title: "For business | Balkan Local",
      description:
        "List your business where German-speaking diaspora and Gulf families plan their trips. Complimentary for founding partners, with zero commission to start.",
    },
    hero: {
      title: "Reach travelers who arrive ready to spend.",
      lead: "List your business where German-speaking diaspora and Gulf families are already planning, in their language, backed by the trust of independent verification.",
    },
    kicker: "For partners",
    title: "Grow with high-intent, high-trust travelers.",
    lead: "Place your stay, tour, transfer or restaurant in front of considered, high-spending travelers who are searching in their own language.",
    foundingBadge: "Founding partner, complimentary for 6 to 12 months",
    foundingText:
      "Join the first cohort of verified partners. Your listing is free, commission is zero for up to a year, and we provide professional photography and translation. You only pay once you earn.",
    why: [
      { t: "Pay only on results", d: "A founder-friendly 10 to 15 percent later, below the global platforms, and nothing to begin with." },
      { t: "Guests in their language", d: "We bring German-speaking diaspora and Arabic-speaking Gulf families directly to you." },
      { t: "The verification mark", d: "Stand out as an independently verified business that travelers trust on sight." },
      { t: "Photography and translation", d: "We translate your listing into English, German and Arabic and photograph it, complimentary for founding partners." },
    ],
    vettingTitle: "How verification works",
    vettingSteps: [
      "Submit your registration, licence and proof of ownership.",
      "We verify your documents and review your reputation.",
      "A brief quality assessment, conducted in person for the founding cohort.",
      "Your Balkan Local verification mark goes live.",
    ],
    dashTitle: "Your partner dashboard",
    dashItems: ["Listings and calendar", "Bookings and payouts", "Performance insights", "Automatic translation"],
    formTitle: "Register your business",
    formStep: "Step",
    formOf: "of",
    fields: {
      type: "Business type",
      typeOptions: ["Stay or accommodation", "Tour or experience", "Transfer or driver", "Restaurant", "Guide", "Other"],
      name: "Business name",
      city: "City",
      website: "Website or social link",
      contactName: "Your name",
      email: "Email",
      phone: "Phone or WhatsApp",
      message: "Anything we should know? (optional)",
    },
    next: "Next",
    back: "Back",
    submit: "Submit registration",
    successTitle: "Thank you. You are on the founding list.",
    successBody: "We will be in touch shortly to verify your business and set up your complimentary listing.",
    required: "Please complete this field.",
    emailInvalid: "Please enter a valid email address.",
    cta: {
      title: "Become a founding partner.",
      body: "A complimentary listing, zero commission for up to a year, with photography and translation included.",
      label: "List your business",
    },
  },
};

const de: typeof en = {
  business: {
    meta: {
      title: "Für Unternehmen | Balkan Local",
      description:
        "Trage dein Unternehmen dort ein, wo deutschsprachige Diaspora und Golf-Familien ihre Reisen planen. Kostenlos für Gründungspartner, mit null Provision zum Start.",
    },
    hero: {
      title: "Erreiche Reisende, die bereit sind, Geld auszugeben.",
      lead: "Trage dein Unternehmen dort ein, wo deutschsprachige Diaspora und Golf-Familien bereits planen, in ihrer Sprache, gestützt auf das Vertrauen unabhängiger Verifizierung.",
    },
    kicker: "Für Partner",
    title: "Wachse mit kaufbereiten, vertrauensvollen Reisenden.",
    lead: "Platziere deine Unterkunft, Tour, deinen Transfer oder dein Restaurant vor anspruchsvollen, ausgabefreudigen Reisenden, die in ihrer eigenen Sprache suchen.",
    foundingBadge: "Gründungspartner, kostenlos für 6 bis 12 Monate",
    foundingText:
      "Werde Teil der ersten Gruppe geprüfter Partner. Dein Eintrag ist kostenlos, die Provision liegt bis zu einem Jahr bei null, und wir liefern professionelle Fotografie und Übersetzung. Du zahlst erst, wenn du verdienst.",
    why: [
      { t: "Zahle nur bei Erfolg", d: "Später gründerfreundliche 10 bis 15 Prozent, unter den globalen Plattformen, und zu Beginn nichts." },
      { t: "Gäste in ihrer Sprache", d: "Wir bringen deutschsprachige Diaspora und arabischsprachige Golf-Familien direkt zu dir." },
      { t: "Das Verifizierungszeichen", d: "Hebe dich als unabhängig geprüftes Unternehmen ab, dem Reisende auf den ersten Blick vertrauen." },
      { t: "Fotografie und Übersetzung", d: "Wir übersetzen deinen Eintrag ins Englische, Deutsche und Arabische und fotografieren ihn, kostenlos für Gründungspartner." },
    ],
    vettingTitle: "So funktioniert die Verifizierung",
    vettingSteps: [
      "Reiche deine Registrierung, Lizenz und deinen Eigentumsnachweis ein.",
      "Wir prüfen deine Dokumente und deinen Ruf.",
      "Eine kurze Qualitätsbewertung, für die Gründungsgruppe persönlich durchgeführt.",
      "Dein Balkan-Local-Verifizierungszeichen geht live.",
    ],
    dashTitle: "Dein Partner-Dashboard",
    dashItems: ["Einträge und Kalender", "Buchungen und Auszahlungen", "Leistungseinblicke", "Automatische Übersetzung"],
    formTitle: "Unternehmen eintragen",
    formStep: "Schritt",
    formOf: "von",
    fields: {
      type: "Art des Unternehmens",
      typeOptions: ["Unterkunft", "Tour oder Erlebnis", "Transfer oder Fahrer", "Restaurant", "Guide", "Sonstiges"],
      name: "Firmenname",
      city: "Stadt",
      website: "Website oder Social-Link",
      contactName: "Dein Name",
      email: "E-Mail",
      phone: "Telefon oder WhatsApp",
      message: "Sollten wir etwas wissen? (optional)",
    },
    next: "Weiter",
    back: "Zurück",
    submit: "Registrierung absenden",
    successTitle: "Danke. Du stehst auf der Gründungsliste.",
    successBody: "Wir melden uns in Kürze, um dein Unternehmen zu verifizieren und deinen kostenlosen Eintrag einzurichten.",
    required: "Bitte fülle dieses Feld aus.",
    emailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
    cta: {
      title: "Werde Gründungspartner.",
      body: "Ein kostenloser Eintrag, null Provision bis zu einem Jahr, inklusive Fotografie und Übersetzung.",
      label: "Unternehmen eintragen",
    },
  },
};

const ar: typeof en = {
  business: {
    meta: {
      title: "للأعمال | Balkan Local",
      description:
        "أدرج نشاطك حيث يخطّط المهجر الناطق بالألمانية وعائلات الخليج لرحلاتهم. مجاناً للشركاء المؤسّسين، وبعمولة صفر في البداية.",
    },
    hero: {
      title: "اوصل إلى مسافرين يصلون مستعدّين للإنفاق.",
      lead: "أدرج نشاطك حيث يخطّط المهجر الناطق بالألمانية وعائلات الخليج بالفعل، بلغتهم، مدعوماً بثقة التحقّق المستقل.",
    },
    kicker: "للشركاء",
    title: "انمُ مع مسافرين عالي النيّة وعالي الثقة.",
    lead: "اعرض إقامتك أو جولتك أو خدمة التنقّل أو مطعمك أمام مسافرين متأنّين كثيري الإنفاق يبحثون بلغتهم.",
    foundingBadge: "شريك مؤسّس، مجاناً لمدة 6 إلى 12 شهراً",
    foundingText:
      "انضمّ إلى المجموعة الأولى من الشركاء المُتحقَّق منهم. إدراجك مجاني، والعمولة صفر حتى سنة، ونوفّر تصويراً احترافياً وترجمة. لا تدفع إلا عندما تربح.",
    why: [
      { t: "ادفع عند النتائج فقط", d: "لاحقاً نسبة صديقة للمؤسّسين من 10 إلى 15 بالمئة، أقل من المنصّات العالمية، ولا شيء في البداية." },
      { t: "ضيوف بلغتهم", d: "نجلب إليك المهجر الناطق بالألمانية وعائلات الخليج الناطقة بالعربية مباشرة." },
      { t: "علامة التوثيق", d: "تميّز كنشاط مُتحقَّق منه بشكل مستقل يثق به المسافرون من النظرة الأولى." },
      { t: "تصوير وترجمة", d: "نترجم إدراجك إلى الإنجليزية والألمانية والعربية ونصوّره، مجاناً للشركاء المؤسّسين." },
    ],
    vettingTitle: "كيف يعمل التوثيق",
    vettingSteps: [
      "قدّم تسجيلك ورخصتك وإثبات الملكية.",
      "نتحقّق من وثائقك ونراجع سمعتك.",
      "تقييم جودة موجز، يُجرى حضورياً للمجموعة المؤسّسة.",
      "تُفعَّل علامة التوثيق الخاصة بك من Balkan Local.",
    ],
    dashTitle: "لوحة تحكّم الشريك",
    dashItems: ["الإدراجات والتقويم", "الحجوزات والمدفوعات", "رؤى الأداء", "ترجمة تلقائية"],
    formTitle: "سجّل نشاطك",
    formStep: "الخطوة",
    formOf: "من",
    fields: {
      type: "نوع النشاط",
      typeOptions: ["إقامة", "جولة أو تجربة", "تنقّل أو سائق", "مطعم", "مرشد", "أخرى"],
      name: "اسم النشاط",
      city: "المدينة",
      website: "الموقع أو رابط التواصل",
      contactName: "اسمك",
      email: "البريد الإلكتروني",
      phone: "الهاتف أو واتساب",
      message: "هل من شيء ينبغي أن نعرفه؟ (اختياري)",
    },
    next: "التالي",
    back: "رجوع",
    submit: "إرسال التسجيل",
    successTitle: "شكراً. أنت على قائمة المؤسّسين.",
    successBody: "سنتواصل معك قريباً للتحقّق من نشاطك وإعداد إدراجك المجاني.",
    required: "يرجى إكمال هذا الحقل.",
    emailInvalid: "يرجى إدخال بريد إلكتروني صالح.",
    cta: {
      title: "كن شريكاً مؤسّساً.",
      body: "إدراج مجاني، وعمولة صفر حتى سنة، مع تصوير وترجمة مشمولين.",
      label: "أدرج نشاطك",
    },
  },
};

export { en, de, ar };
