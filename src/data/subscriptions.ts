export interface Subscription {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  brandColor: string;
  icon?: string;          // optionnel
  image?: string;         // ✅ image pour logos réels
  whatsappNumber: string;
}

export const subscriptions: Subscription[] = [
  {
    id: "apple-music",
    name: "Apple Music",
    tagline: "100 millions de titres sans pub",
    price: "1500 f/mois",
    description:
      "Profitez d'un accès illimité à plus de 100 millions de titres, de playlists personnalisées et d'un son spatial avec Dolby Atmos.",
    features: [
      "Accès illimité à 100M+ titres",
      "Audio spatial avec Dolby Atmos",
      "Téléchargement hors-ligne",
      "Pas de publicité",
      "Partage familial jusqu'à 6 personnes",
    ],
    brandColor: "hsl(340, 80%, 55%)",
    image: "/src/assets/images/apple-music1.png",
    whatsappNumber: "XXXXXXXXXX",
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    tagline: "La musique pour tous",
    price: "1000 f/mois",
    description:
      "Écoutez vos morceaux préférés, découvrez de nouveaux artistes et profitez de podcasts exclusifs, le tout sans interruption publicitaire.",
    features: [
      "Écoute sans publicité",
      "Téléchargement hors-ligne",
      "Qualité audio supérieure",
      "Playlists personnalisées",
      "15 heures de livres audio/mois",
    ],
    brandColor: "hsl(141, 73%, 42%)",
    image: "/src/assets/images/spotify.png",
    whatsappNumber: "+24106690665",
  },
  
  
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    tagline: "YouTube sans limites",
    price: "À partir de 5€/mois",
    description:
      "Regardez YouTube sans publicité, téléchargez des vidéos pour les regarder hors-ligne et profitez de YouTube Music Premium inclus.",
    features: [
      "Zéro publicité sur YouTube",
      "Lecture en arrière-plan",
      "Téléchargement hors-ligne",
      "YouTube Music Premium inclus",
      "YouTube Originals",
    ],
    brandColor: "hsl(0, 90%, 50%)",
    image: "/images/youtube.png",
    whatsappNumber: "XXXXXXXXXX",
  },
  {
    id: "disney-plus",
    name: "Disney+",
    tagline: "La magie du streaming",
    price: "À partir de 6€/mois",
    description:
      "Plongez dans l'univers Disney, Pixar, Marvel, Star Wars et National Geographic avec des contenus exclusifs pour toute la famille.",
    features: [
      "Disney, Pixar, Marvel, Star Wars",
      "National Geographic",
      "Contenus exclusifs",
      "Jusqu'à 4 écrans simultanés",
      "Qualité 4K UHD & HDR",
    ],
    brandColor: "hsl(230, 70%, 50%)",
    image: "/images/disney-plus.png",
    whatsappNumber: "XXXXXXXXXX",
  },
];
