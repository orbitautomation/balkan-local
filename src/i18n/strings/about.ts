/**
 * about.ts - audience split (diaspora + Gulf) + the /about narrative.
 * `de`/`ar` typed `typeof en`.
 */

const en = {
  audience: {
    kicker: "Built for two homes",
    diasporaTitle: "For the diaspora",
    diasporaBody: "Bring the family home with confidence. Plan trips across generations, arrange a car and driver between towns, and view properties, all in German and all verified.",
    diasporaCta: "Plan a family trip",
    gulfTitle: "For Gulf travelers",
    gulfBody: "Cool green summers, halal throughout, privacy and prayer. Arabic-first, family-friendly stays and drivers. The Balkans, considered with you in mind.",
    gulfCta: "Explore in Arabic",
  },
  about: {
    meta: {
      title: "About | Balkan Local",
      description:
        "A trust-first travel company for the Balkans, beginning in Bosnia. Built for the diaspora, Gulf families and every traveler who wants the genuine article.",
    },
    hero: {
      title: "Building the trusted way to travel the Balkans.",
      lead: "Balkan Local began with a simple frustration. The Balkans are extraordinary, yet planning a trip means scams, dead ends and a dozen disconnected apps. We are putting that right.",
    },
    story: [
      "The Balkans offer turquoise rivers, Ottoman old towns, mountain villages and some of the warmest hospitality in Europe. Almost none of it, however, is bookable in one trustworthy place.",
      "Travelers, in particular the diaspora returning home and Gulf families seeking halal-friendly summers, kept meeting the same obstacles: fictitious rentals, inflated fares, no Arabic or German, and no reliable way to know whom to trust.",
      "So we built Balkan Local. Every business independently verified, every price transparent, your whole trip in one place, with thoughtful tools for Muslim travelers throughout. We begin in Bosnia, and we go deep before we go wide.",
    ],
    mission: {
      title: "Our mission",
      body: "To make the Balkans simple and safe to explore for everyone, locals, diaspora and visitors alike, one verified business at a time.",
    },
    values: {
      title: "What we stand for",
      items: [
        { t: "Trust over volume", d: "We would rather list one hundred verified businesses than ten thousand we cannot vouch for." },
        { t: "Genuinely local", d: "Real local operators and real local knowledge, the detail the global platforms overlook." },
        { t: "Built for everyone", d: "English, German and Arabic from the outset, with halal and family filters throughout." },
        { t: "Fair to partners", d: "Founder-friendly terms, where businesses pay only once they earn." },
      ],
    },
    contact: {
      title: "Get in touch",
      body: "Questions, partnerships or press enquiries are always welcome.",
      email: "hello@balkanlocal.com",
    },
    cta: {
      title: "Come and explore with us.",
      body: "Begin in Bosnia, verified and organised, all in one place.",
      label: "Explore Bosnia",
    },
  },
};

const de: typeof en = {
  audience: {
    kicker: "Für zwei Heimaten gebaut",
    diasporaTitle: "Für die Diaspora",
    diasporaBody: "Bring die Familie mit gutem Gefühl nach Hause. Plane Reisen über Generationen hinweg, organisiere Auto und Fahrer zwischen Städten und besichtige Immobilien, alles auf Deutsch und alles geprüft.",
    diasporaCta: "Familienreise planen",
    gulfTitle: "Für Reisende vom Golf",
    gulfBody: "Kühle grüne Sommer, durchgehend halal, Privatsphäre und Gebet. Arabisch zuerst, familienfreundliche Unterkünfte und Fahrer. Der Balkan, mit dir im Blick gedacht.",
    gulfCta: "Auf Arabisch entdecken",
  },
  about: {
    meta: {
      title: "Über uns | Balkan Local",
      description:
        "Ein vertrauensorientiertes Reiseunternehmen für den Balkan, beginnend in Bosnien. Gebaut für die Diaspora, Golf-Familien und jeden Reisenden, der das Echte sucht.",
    },
    hero: {
      title: "Wir bauen den vertrauenswürdigen Weg, den Balkan zu bereisen.",
      lead: "Balkan Local begann mit einem einfachen Ärgernis. Der Balkan ist außergewöhnlich, doch eine Reise zu planen bedeutet Betrug, Sackgassen und ein Dutzend unverbundener Apps. Das stellen wir richtig.",
    },
    story: [
      "Der Balkan bietet türkisfarbene Flüsse, osmanische Altstädte, Bergdörfer und eine der herzlichsten Gastfreundschaften Europas. Fast nichts davon ist jedoch an einem vertrauenswürdigen Ort buchbar.",
      "Reisende, insbesondere die heimkehrende Diaspora und Golf-Familien auf der Suche nach halal-freundlichen Sommern, stießen immer wieder auf dieselben Hürden: erfundene Unterkünfte, überhöhte Preise, kein Arabisch oder Deutsch und keine verlässliche Möglichkeit zu wissen, wem man trauen kann.",
      "Also haben wir Balkan Local gebaut. Jedes Unternehmen unabhängig geprüft, jeder Preis transparent, deine ganze Reise an einem Ort, durchgehend mit durchdachten Funktionen für muslimische Reisende. Wir beginnen in Bosnien und gehen in die Tiefe, bevor wir in die Breite gehen.",
    ],
    mission: {
      title: "Unsere Mission",
      body: "Den Balkan für alle einfach und sicher erkundbar zu machen, für Einheimische, Diaspora und Besucher gleichermaßen, ein geprüftes Unternehmen nach dem anderen.",
    },
    values: {
      title: "Wofür wir stehen",
      items: [
        { t: "Vertrauen vor Menge", d: "Lieber hundert geprüfte Unternehmen als zehntausend, für die wir nicht bürgen können." },
        { t: "Wirklich lokal", d: "Echte lokale Anbieter und echtes lokales Wissen, das Detail, das die globalen Plattformen übersehen." },
        { t: "Für alle gebaut", d: "Englisch, Deutsch und Arabisch von Anfang an, durchgehend mit Halal- und Familienfiltern." },
        { t: "Fair zu Partnern", d: "Gründerfreundliche Konditionen, bei denen Unternehmen erst zahlen, wenn sie verdienen." },
      ],
    },
    contact: {
      title: "Kontakt aufnehmen",
      body: "Fragen, Partnerschaften oder Presseanfragen sind jederzeit willkommen.",
      email: "hello@balkanlocal.com",
    },
    cta: {
      title: "Komm und entdecke mit uns.",
      body: "Beginne in Bosnien, geprüft und organisiert, alles an einem Ort.",
      label: "Bosnien entdecken",
    },
  },
};

const ar: typeof en = {
  audience: {
    kicker: "مبني لوطنين",
    diasporaTitle: "لأبناء المهجر",
    diasporaBody: "أعِد العائلة إلى الوطن بثقة. خطّط رحلات عبر الأجيال، ورتّب سيارة وسائقاً بين المدن، وعاين العقارات، كل ذلك بالألمانية وكله مُتحقَّق منه.",
    diasporaCta: "خطّط رحلة عائلية",
    gulfTitle: "لمسافري الخليج",
    gulfBody: "صيف أخضر لطيف، وحلال في كل مكان، وخصوصية وصلاة. العربية أولاً، إقامات وسائقون مناسبون للعائلات. البلقان، مصمَّم وأنت في الحسبان.",
    gulfCta: "استكشف بالعربية",
  },
  about: {
    meta: {
      title: "من نحن | Balkan Local",
      description:
        "شركة سفر تضع الثقة أولاً للبلقان، تبدأ من البوسنة. مبنيّة للمهجر وعائلات الخليج وكل مسافر يريد الأصيل.",
    },
    hero: {
      title: "نبني الطريقة الموثوقة لاكتشاف البلقان.",
      lead: "بدأ Balkan Local من إحباط بسيط. البلقان استثنائي، ومع ذلك يعني تخطيط الرحلة احتيالاً وطرقاً مسدودة وعشرات التطبيقات غير المترابطة. نحن نصلح ذلك.",
    },
    story: [
      "يقدّم البلقان أنهاراً فيروزية وبلداتٍ عثمانية قديمة وقرى جبلية وبعضاً من أحرّ كرم الضيافة في أوروبا. ومع ذلك، لا يكاد أيٌّ منها يكون قابلاً للحجز في مكان واحد موثوق.",
      "ظلّ المسافرون، وخاصة المهجر العائد إلى الوطن وعائلات الخليج الباحثة عن صيف مناسب للحلال، يواجهون العقبات نفسها: إيجارات وهمية، وأسعار مبالَغ فيها، ولا عربية ولا ألمانية، ولا طريقة موثوقة لمعرفة بمن يثقون.",
      "لذلك بنينا Balkan Local. كل نشاط مُتحقَّق منه بشكل مستقل، وكل سعر شفّاف، ورحلتك كاملة في مكان واحد، مع أدوات مدروسة للمسافرين المسلمين في كل خطوة. نبدأ من البوسنة، ونتعمّق قبل أن نتوسّع.",
    ],
    mission: {
      title: "مهمّتنا",
      body: "أن نجعل البلقان سهل الاستكشاف وآمناً للجميع، للسكان والمهجر والزوّار على حدّ سواء، نشاطاً مُتحقَّقاً منه تلو الآخر.",
    },
    values: {
      title: "ما نؤمن به",
      items: [
        { t: "الثقة قبل الكمّ", d: "نفضّل إدراج مئة نشاط مُتحقَّق منه على عشرة آلاف لا نضمنها." },
        { t: "محلي بحق", d: "مشغّلون محليون حقيقيون ومعرفة محلية حقيقية، التفصيل الذي تغفله المنصّات العالمية." },
        { t: "مبني للجميع", d: "الإنجليزية والألمانية والعربية من البداية، مع مرشّحات الحلال والعائلات في كل خطوة." },
        { t: "عادل مع الشركاء", d: "شروط صديقة للمؤسّسين، حيث لا تدفع الأنشطة إلا عندما تربح." },
      ],
    },
    contact: {
      title: "تواصل معنا",
      body: "الأسئلة والشراكات واستفسارات الصحافة مرحّب بها دائماً.",
      email: "hello@balkanlocal.com",
    },
    cta: {
      title: "تعال واكتشف معنا.",
      body: "ابدأ من البوسنة، مُتحقَّقاً منها ومنظّمة، كلها في مكان واحد.",
      label: "اكتشف البوسنة",
    },
  },
};

export { en, de, ar };
