/**
 * bosnia.ts - first-party POI seed data for the /bosnia interactive map.
 *
 * Names, coordinates, category and area are first-party data and live here.
 * The translatable blurb for each place lives in the i18n tree
 * (`src/i18n/strings/bosnia.ts` -> bosnia.map.blurbs[id]) and is joined to the
 * pin by `id` in BosniaMap.astro, so blurbs can be translated independently.
 *
 * Every `id` here MUST have a matching key in `bosnia.map.blurbs`.
 * Coordinates are within Bosnia's bounding box (lat 42.5-45.3, lng 15.7-19.6).
 */

export type BosniaCategory = "cities" | "nature" | "food" | "religious" | "hidden";

export interface BosniaPlace {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: BosniaCategory;
  area: string;
}

/** Map centre + default zoom, framing the whole country. */
export const BOSNIA_CENTER = { lat: 43.95, lng: 17.75 };
export const BOSNIA_ZOOM = 7;

export const BOSNIA_PLACES: BosniaPlace[] = [
  // Cities
  { id: "sarajevo", name: "Sarajevo", lat: 43.8563, lng: 18.4131, category: "cities", area: "Sarajevo Canton" },
  { id: "mostar", name: "Mostar", lat: 43.3438, lng: 17.8078, category: "cities", area: "Herzegovina-Neretva" },
  { id: "banja-luka", name: "Banja Luka", lat: 44.7722, lng: 17.1910, category: "cities", area: "Republika Srpska" },
  { id: "tuzla", name: "Tuzla", lat: 44.5382, lng: 18.6761, category: "cities", area: "Tuzla Canton" },
  { id: "trebinje", name: "Trebinje", lat: 42.7113, lng: 18.3444, category: "cities", area: "East Herzegovina" },

  // Nature
  { id: "kravice", name: "Kravice Waterfalls", lat: 43.1564, lng: 17.6094, category: "nature", area: "Studenci, near Ljubuški" },
  { id: "una-strbacki-buk", name: "Štrbački buk, Una NP", lat: 44.6386, lng: 16.1542, category: "nature", area: "Una National Park" },
  { id: "sutjeska-perucica", name: "Sutjeska NP & Perućica", lat: 43.3225, lng: 18.6789, category: "nature", area: "Tjentište" },
  { id: "pliva-lakes", name: "Pliva Lakes & watermills", lat: 44.3389, lng: 17.2353, category: "nature", area: "Jajce" },
  { id: "boracko-lake", name: "Boračko Lake", lat: 43.5147, lng: 18.0758, category: "nature", area: "Konjic" },
  { id: "blidinje", name: "Blidinje Nature Park", lat: 43.6431, lng: 17.5108, category: "nature", area: "Čvrsnica-Vran" },
  { id: "vrbas-canyon", name: "Vrbas Canyon", lat: 44.6500, lng: 17.2400, category: "nature", area: "Near Banja Luka" },

  // Food & drink
  { id: "bascarsija", name: "Baščaršija", lat: 43.8595, lng: 18.4310, category: "food", area: "Old Town, Sarajevo" },
  { id: "travnik-food", name: "Travnik", lat: 44.2264, lng: 17.6661, category: "food", area: "Central Bosnia" },
  { id: "konjic-food", name: "Konjic", lat: 43.6519, lng: 17.9614, category: "food", area: "Neretva valley" },
  { id: "stolac-wine", name: "Stolac wine country", lat: 43.0842, lng: 17.9569, category: "food", area: "Herzegovina" },

  // Mosques & faith
  { id: "gazi-husrev-beg", name: "Gazi Husrev-beg Mosque", lat: 43.8593, lng: 18.4286, category: "religious", area: "Baščaršija, Sarajevo" },
  { id: "careva-mosque", name: "Emperor's Mosque", lat: 43.8571, lng: 18.4256, category: "religious", area: "Sarajevo" },
  { id: "koski-mehmed-pasha", name: "Koski Mehmed-paša Mosque", lat: 43.3380, lng: 17.8150, category: "religious", area: "Mostar" },
  { id: "sacred-heart-cathedral", name: "Sacred Heart Cathedral", lat: 43.8597, lng: 18.4244, category: "religious", area: "Sarajevo centre" },
  { id: "zitomislic-monastery", name: "Žitomislić Monastery", lat: 43.2375, lng: 17.8344, category: "religious", area: "Neretva valley" },

  // Hidden gems
  { id: "lukomir", name: "Lukomir village", lat: 43.6661, lng: 18.1675, category: "hidden", area: "Bjelašnica" },
  { id: "umoljani", name: "Umoljani village", lat: 43.6633, lng: 18.1339, category: "hidden", area: "Bjelašnica" },
  { id: "pocitelj", name: "Počitelj", lat: 43.1283, lng: 17.7350, category: "hidden", area: "Near Čapljina" },
  { id: "radimlja-stecci", name: "Radimlja stećci", lat: 43.0892, lng: 17.9189, category: "hidden", area: "Near Stolac" },
  { id: "vjetrenica-cave", name: "Vjetrenica Cave", lat: 42.8528, lng: 17.9881, category: "hidden", area: "Ravno, Popovo polje" },
  { id: "blagaj", name: "Blagaj Tekija", lat: 43.2569, lng: 17.8889, category: "hidden", area: "Near Mostar" },
  { id: "hutovo-blato", name: "Hutovo Blato", lat: 43.0681, lng: 17.7728, category: "hidden", area: "Herzegovina wetlands" },
];
