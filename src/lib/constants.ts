import mobelec from "../assets/images/mob_elec.webp";
import mobtherm from "../assets/images/mob-elec.jpg";
import gordes from "../assets/images/AreaSlider/gordes.webp";
import isle from "../assets/images/AreaSlider/isle.webp";
import avignon from "../assets/images/AreaSlider/avignon.webp";
import colorado from "../assets/images/AreaSlider/colorado-provencal.webp";

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/reservation", label: "Reservation" },
  { href: "/contact", label: "Contact" },
];

export const mobsData = [
  {
    id: 1,
    type: "Electrique Classique",
    price: "35€",
    duration: "2h",
    image: mobelec,
    features: [
      " Moteur électrique silencieux",
      " Design rétro authentique",
      " Autonomie 50 km",
    ],
    buttonColor: "bg-orange-500",
    iconType: "electric",
  },
  {
    id: 2,
    type: "Thermique",
    price: "65€",
    duration: "journée",
    image: mobtherm,
    features: [
      " Expérience vintage",
      " Son caractéristique",
      " Disponible une demie journée",
    ],
    buttonColor: "bg-orange-500",
    iconType: "fire",
  },
];

export const areaSliderData = [
  {
    image: gordes,
    title: "Le parc régional du Luberon et ses nombreux villages classés",
    localisation: "Gordes, 14 km",
  },
  {
    image: isle,
    title:
      "Les roues à eau de l'Isle sur Sorgue, son marché, sa fabrique de tapenade...",
    localisation: "L'Isle-sur-la-sorgue, 9 km",
  },
  {
    image: avignon,
    title: "Le Palais des papes d'Avignon, ses places, ses restaurants...",
    localisation: "Avignon, 29 km",
  },
  {
    image: colorado,
    title: "Le pays d'Apt et son Colorado Provençal",
    localisation: "Rustrel, 39 km",
  },
];
