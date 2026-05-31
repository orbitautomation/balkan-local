/**
 * destinations.ts - /destinations page copy. Bosnia is live; the rest of the
 * Balkans is greyed via the shared CountrySelector. `de`/`ar` typed `typeof en`.
 */

const en = {
  destinations: {
    meta: {
      title: "Destinations | Balkan Local",
      description:
        "We begin in Bosnia and Herzegovina, from Sarajevo to Mostar, with the rest of the Balkans to follow. Explore verified, genuinely local travel.",
    },
    hero: {
      title: "Bosnia today. The Balkans tomorrow.",
      lead: "We go deep before we go wide. Bosnia and Herzegovina is live today, fully verified. Further countries will open as we verify partners on the ground.",
    },
    bosniaTitle: "Where to go in Bosnia & Herzegovina",
    bosniaLead: "From the bazaars of Sarajevo to the bridge at Mostar and the emerald rivers of the north west.",
    cities: [
      { name: "Sarajevo", blurb: "The capital where East meets West, home to the Baščaršija bazaar, a deep coffee culture and history at every turn." },
      { name: "Mostar", blurb: "The iconic Stari Most bridge, the turquoise Neretva river and a beautifully preserved Ottoman old town." },
      { name: "Jajce", blurb: "A waterfall in the centre of town, watched over by a medieval fortress." },
      { name: "Travnik", blurb: "An Ottoman vizier town with a colourful mosque and a gateway to highland nature." },
      { name: "Blagaj", blurb: "A dervish monastery at the foot of a cliff, where the Buna river rises from the rock." },
      { name: "Una National Park", blurb: "Emerald rivers, waterfalls and rafting near Bihać, in Bosnia's wild north west." },
    ],
    cta: {
      title: "Plan your Bosnia trip.",
      body: "Verified stays, drivers, guides and dining, all in one place.",
      label: "Browse experiences",
    },
  },
};

const de: typeof en = {
  destinations: {
    meta: {
      title: "Reiseziele | Balkan Local",
      description:
        "Wir beginnen in Bosnien und Herzegowina, von Sarajevo bis Mostar, der Rest des Balkans folgt. Entdecke geprüftes, wirklich lokales Reisen.",
    },
    hero: {
      title: "Heute Bosnien. Morgen der Balkan.",
      lead: "Wir gehen in die Tiefe, bevor wir in die Breite gehen. Bosnien und Herzegowina ist heute live und vollständig geprüft. Weitere Länder folgen, sobald wir Partner vor Ort geprüft haben.",
    },
    bosniaTitle: "Wohin in Bosnien und Herzegowina",
    bosniaLead: "Von den Basaren Sarajevos über die Brücke in Mostar bis zu den smaragdgrünen Flüssen im Nordwesten.",
    cities: [
      { name: "Sarajevo", blurb: "Die Hauptstadt, wo Ost auf West trifft, Heimat des Baščaršija-Basars, einer tiefen Kaffeekultur und Geschichte an jeder Ecke." },
      { name: "Mostar", blurb: "Die ikonische Brücke Stari Most, der türkisfarbene Fluss Neretva und eine wunderschön erhaltene osmanische Altstadt." },
      { name: "Jajce", blurb: "Ein Wasserfall im Zentrum der Stadt, überwacht von einer mittelalterlichen Festung." },
      { name: "Travnik", blurb: "Eine osmanische Wesirstadt mit einer farbenfrohen Moschee und einem Tor zur Bergnatur." },
      { name: "Blagaj", blurb: "Ein Derwischkloster am Fuß einer Klippe, wo der Fluss Buna aus dem Fels entspringt." },
      { name: "Nationalpark Una", blurb: "Smaragdgrüne Flüsse, Wasserfälle und Rafting bei Bihać, im wilden Nordwesten Bosniens." },
    ],
    cta: {
      title: "Plane deine Bosnien-Reise.",
      body: "Geprüfte Unterkünfte, Fahrer, Guides und Restaurants, alles an einem Ort.",
      label: "Erlebnisse ansehen",
    },
  },
};

const ar: typeof en = {
  destinations: {
    meta: {
      title: "الوجهات | Balkan Local",
      description:
        "نبدأ من البوسنة والهرسك، من سراييفو إلى موستار، وبقية البلقان تتبع. اكتشف سفراً محلياً مُتحقَّقاً منه بحق.",
    },
    hero: {
      title: "البوسنة اليوم. البلقان غداً.",
      lead: "نتعمّق قبل أن نتوسّع. البوسنة والهرسك متاحة اليوم ومُتحقَّق منها بالكامل. ستُفتَح وجهات أخرى كلما تحقّقنا من الشركاء على الأرض.",
    },
    bosniaTitle: "أين تذهب في البوسنة والهرسك",
    bosniaLead: "من أسواق سراييفو إلى جسر موستار والأنهار الزمردية في الشمال الغربي.",
    cities: [
      { name: "سراييفو", blurb: "العاصمة حيث يلتقي الشرق بالغرب، موطن سوق باشتشارشيا، وثقافة قهوة عريقة وتاريخ في كل زاوية." },
      { name: "موستار", blurb: "جسر ستاري موست الشهير، ونهر نيريتفا الفيروزي، وبلدة عثمانية قديمة محفوظة ببراعة." },
      { name: "يايتسه", blurb: "شلّال في وسط البلدة، تحرسه قلعة من القرون الوسطى." },
      { name: "ترافنيك", blurb: "بلدة الوزير العثمانية بمسجد ملوّن وبوابة إلى طبيعة المرتفعات." },
      { name: "بلاغاي", blurb: "تكية للدراويش عند سفح جرف، حيث ينبع نهر البونا من الصخر." },
      { name: "منتزه أونا الوطني", blurb: "أنهار زمردية وشلّالات وتجديف قرب بيهاتش، في الشمال الغربي البرّي للبوسنة." },
    ],
    cta: {
      title: "خطّط لرحلتك إلى البوسنة.",
      body: "إقامات وسائقون ومرشدون ومطاعم مُتحقَّق منها، كلها في مكان واحد.",
      label: "تصفّح التجارب",
    },
  },
};

export { en, de, ar };
