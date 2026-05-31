/**
 * masjids.ts - seed list of well-known Sarajevo mosques (real coordinates).
 * Used as the default map pins; the "near me" button queries OpenStreetMap
 * Overpass for live nearby masjids around the user's location.
 */
export interface Masjid {
  name: string;
  lat: number;
  lng: number;
  area: string;
}

export const SARAJEVO_CENTER = { lat: 43.8586, lng: 18.4256 };

export const SARAJEVO_MASJIDS: Masjid[] = [
  { name: "Gazi Husrev-beg Mosque", lat: 43.8593, lng: 18.4286, area: "Bascarsija" },
  { name: "Emperor's Mosque (Careva)", lat: 43.8571, lng: 18.4309, area: "Old Town" },
  { name: "Ali Pasha's Mosque", lat: 43.8607, lng: 18.4179, area: "Centar" },
  { name: "Ferhadija Mosque", lat: 43.8588, lng: 18.4245, area: "Ferhadija" },
  { name: "King Fahd Mosque", lat: 43.8487, lng: 18.3571, area: "Alipasino Polje" },
  { name: "White Mosque (Hadzi Sinan)", lat: 43.8612, lng: 18.4321, area: "Vratnik" },
];
