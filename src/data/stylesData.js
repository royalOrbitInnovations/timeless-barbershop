const styles = {
  hair: {
    MC: {
      name: "Modern Classics",
      type: [
        {
          name: "Modern Mullet",
          images: [
            "/images/haircuts/mullet-1.webp",
            "/images/haircuts/mullet-2.webp",
            "/images/haircuts/mullet-3.webp",
          ],
        },
        {
          name: "Pompadur Fade",
          images: [
            "/images/haircuts/pampadour-1.webp",
            "/images/haircuts/pampadour-2.webp",
            "/images/haircuts/pampadour-3.webp",
          ],
        },
        {
          name: "Side Part",
          images: [
            "/images/haircuts/sidepart-1.webp",
            "/images/haircuts/sidepart-2.webp",
            "/images/haircuts/sidepart-3.webp",
          ],
        },
      ],
    },
    PAC: {
      name: "Professional & Clean",
      type: [
        {
          name: "Low Taper Fade",
          images: [
            "/images/haircuts/lowtaperfade-1.webp",
            "/images/haircuts/lowtaperfade-2.webp",
            "/images/haircuts/lowtaperfade-3.webp",
          ],
        },
        {
          name: "Crew Cut",
          images: [
            "/images/haircuts/crewcut-1.webp",
            "/images/haircuts/crewcut-2.webp",
            "/images/haircuts/crewcut-3.webp",
          ],
        },
        {
          name: "Comb Over",
          images: [
            "/images/haircuts/combover-1.webp",
            "/images/haircuts/combover-2.webp",
            "/images/haircuts/combover-3.webp",
          ],
        },
      ],
    },
    BAE: {
      name: "Bold & Expressive",
      type: [
        {
          name: "Mohawk Fade",
          images: [
            "/images/haircuts/mohawkfade-1.webp",
            "/images/haircuts/mohawkfade-2.webp",
            "/images/haircuts/mohawkfade-3.webp",
          ],
        },
        {
          name: "Buzz Cut with Design",
          images: [
            "/images/haircuts/buzzcutwithdesign-1.webp",
            "/images/haircuts/buzzcutwithdesign-2.webp",
            "/images/haircuts/buzzcutwithdesign-3.webp",
          ],
        },
        {
          name: "Textured Undercut",
          images: [
            "/images/haircuts/texturedundercut-1.webp",
            "/images/haircuts/texturedundercut-2.webp",
            "/images/haircuts/texturedundercut-3.webp",
          ],
        },
      ],
    },
    NAW: {
      name: "Natural & Wavy",
      type: [
        {
          name: "Mid Length Waves",
          images: [
            "/images/haircuts/midlengthwavy-1.webp",
            "/images/haircuts/midlengthwavy-2.webp",
            "/images/haircuts/midlengthwavy-3.webp",
          ],
        },
        {
          name: "Curly High Top Fade",
          images: [
            "/images/haircuts/curlyhightopfade-1.webp",
            "/images/haircuts/curlyhightopfade-2.webp",
            "/images/haircuts/curlyhightopfade-3.webp",
          ],
        },
      ],
    },
    YAT: {
      name: "Youthful & Trendy",
      type: [
        {
          name: "Brocolli Cut",
          images: [
            "/images/haircuts/broccolicut-1.webp",
            "/images/haircuts/broccolicut-2.webp",
            "/images/haircuts/broccolicut-3.webp",
          ],
        },
        {
          name: "Edgar Cut",
          images: [
            "/images/haircuts/edgarcut-1.webp",
            "/images/haircuts/edgarcut-2.webp",
            "/images/haircuts/edgarcut-3.webp",
          ],
        },
      ],
    },
  },
  beard: {
    BSP: {
      name: "Bold & Statement Beards",
      type: [
        {
          name: "Tapered Beard",
          images: [
            "/images/beard/tapered-1.webp",
            "/images/beard/tapered-2.webp",
            "/images/beard/tapered-3.webp",
          ],
        },

        {
          name: "Wild Beard",
          images: [
            "/images/beard/wildbeard-1.webp",
            "/images/beard/wildbeard-2.webp",
            "/images/beard/wildbeard-3.webp",
          ],
        },
      ],
    },
    CPC: {
      name: "Clean & Professional",
      type: [
        {
          name: "Stubble Beard",
          images: [
            "/images/beard/stubble-1.webp",
            "/images/beard/stubble-2.webp",
            "/images/beard/stubble-3.webp",
          ],
        },
        {
          name: "Circle Beard",
          images: [
            "/images/beard/circle-1.webp",
            "/images/beard/circle-2.webp",
            "/images/beard/circle-3.webp",
          ],
        },
        {
          name: "Classic Full Beard",
          images: [
            "/images/beard/classicfull-1.webp",
            "/images/beard/classicfull-2.webp",
            "/images/beard/classicfull-3.webp",
          ],
        },
      ],
    },
    CAU: {
      name: "Creative & Unique",
      type: [
        {
          name: "Patchy Anchored Stache",
          images: [
            "/images/beard/patchy-1.webp",
            "/images/beard/patchy-2.webp",
            "/images/beard/patchy-3.webp",
          ],
        },
        {
          name: "Freestyle Beard",
          images: [
            "/images/beard/freestyle-1.webp",
            "/images/beard/freestyle-2.webp",
            "/images/beard/freestyle-3.webp",
          ],
        },
      ],
    },
  },
};

const imageData = [
  {
    image: "/images/barbershop-1.webp",
    text: "Where Elegance Meets Style",
  },
  {
    image: "/images/barbershop-2.webp",
    text: "Crafting Timeless Looks",
  },
  {
    image: "/images/barbershop-3.webp",
    text: "Your Style, Our Passion",
  },
];

const prices = [
  {
    name: "Haircut",
    image: "/images/services/haircutting.webp",
    cost: "Qar: 30",
  },
  {
    name: "Beard Trim",
    image: "/images/services/beardtrimming.webp",
    cost: "Qar: 15",
  },
  {
    name: "Hair Colour",
    image: "/images/services/coloring.webp",
    cost: "Qar: 25",
  },
  {
    name: "Clean Facial & Steam",
    image: "/images/services/facial.webp",
    cost: "Qar: 30",
  },
  {
    name: "Haircut Kids",
    image: "/images/services/kidshaircutting.webp",
    cost: "Qar: 15",
  },
  {
    name: "Haircut & Beard Trim",
    image: "/images/services/hairbeard.webp",
    cost: "Qar: 45",
  },
  {
    name: "Dreadlocks",
    image: "/images/services/deadlock.webp",
    cost: "Qar: 200+",
  },
  {
    name: "Hair Tint",
    image: "/images/services/hairtint.webp",
    cost: "Qar: 50+",
  },
];

const barber = [
  {
    name: "John Doe",
    image: "/images/barber.jpg",
  },
  {
    name: "Jane Smith",
    image: "/images/barber.jpg",
  },
  {
    name: "Mike Johnson",
    image: "/images/barber.jpg",
  },
];

export { styles, imageData, prices, barber };
