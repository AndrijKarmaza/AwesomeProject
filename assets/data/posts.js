const posts = [
  {
    img: "https://images.unsplash.com/photo-1565857897517-2cf61f33cf01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Ліс",
    comments: [],
    likes: 153,
    locationName: "Ukraine",
    geoLocation: { latitude: 49.2714836, longitude: 23.8227551 },
  },

  {
    img: "https://images.unsplash.com/photo-1581266399843-9ed61499a5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    description: "Захід на Чорному морі",
    comments: [
      {
        author: "Somebody",
        userIcon:
          "https://kalix.club/uploads/posts/2022-12/1671443452_kalix-club-p-oboi-na-rabochii-stol-arkhitektura-instagr-16.jpg",
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 09:20",
      },
      {
        author: "Natali Romanova",
        userIcon:
          "https://s3-alpha-sig.figma.com/img/d7eb/2439/565ee2bb708d7a3f27c90a7cd3c9f0fa?Expires=1693785600&Signature=IlkCKuaxq7h~mnmOc5t5Gwa0IBGHROPr7lrGpNEcW69RhwnsbkQy~8unBXWDd9MLHy4KRoepbtGho2-yiaxvOFElVWsgyX-SQ8VfKxHV7iQgfWodAApIERximW--clVuDO4iGBZx8dXoAoQq~fU3oyTGF2wO477QY-mVCoJQVr201MgavrI8BbGmZ~rlqfL2mQfJtHNIY~8Ewh-mppWM~eWp-Q9BPPsi1TRFGAFKGswyO3B~7~Fe0HzOb7g8OYKhJRjUYQ~~phj7b3LsPD~0tSZYIZJ9PXSaAi38pOEcSHf0ZdgN4ylnsuSbHEnmLxDwdr4CtrnqQ4ivsHbYDsQyRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:20",
      },
      {
        author: "Somebody",
        userIcon:
          "https://kalix.club/uploads/posts/2022-12/1671443452_kalix-club-p-oboi-na-rabochii-stol-arkhitektura-instagr-16.jpg",
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
    ],
    likes: 200,
    locationName: "Ukraine",
    geoLocation: { latitude: 46.49106516710876, longitude: 30.746249068921284 },
  },

  {
    img: "https://images.unsplash.com/photo-1512034796900-7dc9baad088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Старий будиночок у Венеції",
    comments: [],
    likes: 200,
    locationName: "Italy",
    geoLocation: { latitude: 45.48563199004934, longitude: 12.4172137818219 },
  },
];

export default posts;
