export default {
  title: 'Crossword | The Chicago Maroon',
  description: 'Play The Chicago Maroon\'s Crossword online, free of charge.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://games.chicagomaroon.com/',
    title: 'Crossword | The Chicago Maroon',
    description: 'Play The Chicago Maroon\'s Crossword online, free of charge.',
    defaultImageWidth: 1200,
    defaultImageHeight: 628,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [{
        url: 'https://games.chicagomaroon.com/static/crossword_social.png',
        width: 1200,
        height: 628,
        alt: 'Og Image Alt',
      },
    ],
    site_name: 'MaroonCrossword',
  },
  twitter: {
    handle: '@chicagomaroon',
    site: '@chicagomaroon',
    cardType: 'summary_large_image',
  },
};