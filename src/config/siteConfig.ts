import type { SiteConfig } from '../services/types';

/**
 * Single source of truth for all site copy, links and media paths.
 * Nothing downstream should import raw strings from anywhere else.
 */
export const siteConfig: SiteConfig = {
  meta: {
    title: 'Dolci Vita - The Sweet Life | Manchester',
    description: 'Small-batch Basque cheesecakes, kunafa and loaded shakes in Manchester.',
    logo: '/assets/logo-gold.png',
    logoAlt: 'Dolci Vita - The Sweet Life',
    phone: '01612101558',
    phoneHref: 'tel:01612101558',
  },

  nav: {
    links: [
      { label: 'What we offer', href: '#offer' },
      { label: 'Menu', href: '#menu' },
      { label: 'Story', href: '#story' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Download app', href: '/download-app' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Order now', href: 'tel:01612101558', variant: 'primary' },
  },

  appBanner: {
    reviews: {
      label: 'Google reviews',
      href: 'https://maps.app.goo.gl/9HUy7Yj9aFfApdoY9',
      // Add verified values here, or populate them from a server-side Places API
      // integration. Never guess or silently allow a rating to become stale.
      rating: 4.9,
      reviewCount: 945,
    },
    android: {
      label: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.aexir.dolcivita&pcampaignid=web_share',
    },
    ios: {
      label: 'App Store',
      href: 'https://apps.apple.com/gb/app/dolci-vita/id6752034610',
    },
  },

  appBanner: {
    reviews: {
      label: 'Google reviews',
      href: 'https://maps.app.goo.gl/9HUy7Yj9aFfApdoY9',
      // Add verified values here, or populate them from a server-side Places API
      // integration. Never guess or silently allow a rating to become stale.
      rating: 4.9,
      reviewCount: 945,
    },
    android: {
      label: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.aexir.dolcivita&pcampaignid=web_share',
    },
    ios: {
      label: 'App Store',
      href: 'https://apps.apple.com/gb/app/dolci-vita/id6752034610',
    },
  },

  hero: {
    eyebrow: 'The Sweet Life · Manchester',
    titleLead: 'Dessert worth',
    titleEmphasis: 'the detour',
    description:
      'Small-batch Basque cheesecakes, kunafa and loaded shakes, caramelised, torched and blended to order, every single day.',
    slides: [
      { kind: 'video', webm: '/assets/reel-c.webm', mp4: '/assets/reel-c.mp4' },
      { kind: 'image', src: '/assets/cheesecake-biscoff-2.jpg', alt: 'Biscoff Basque cheesecake', focalOrigin: '60% 40%' },
      { kind: 'video', webm: '/assets/reel-f.webm', mp4: '/assets/reel-f.mp4' },
      { kind: 'image', src: '/assets/hero-zebra-drip.jpg', alt: 'Zebra-drip San Sebastian cake', focalOrigin: '50% 45%' },
    ],
    primaryCta: { label: 'View menu', href: '/menu', variant: 'primary' },
    secondaryCta: { label: 'Order now', href: 'tel:+441615247190', variant: 'outline' },
  },

  offer: {
    eyebrow: 'What we offer',
    titleLead: 'More than a menu...',
    titleEmphasis: 'a proper treat',
    paragraphs: [
      'From caramelised Basque cheesecakes and molten pistachio kunafa to hand-loaded shakes, towering sundaes and warm cookie dough, everything is made in-house and finished the moment you order.',
      'Prefer to design your own? Our Made by You bar lets you pick the base, the sauce and the toppings.',
    ],
    note: 'Maybe some notes here for SEO (replace this)',
    image: '/assets/hero-zebra-drip.jpg',
    imageAlt: 'Zebra-drip San Sebastian cake',
    link: { label: 'Explore the full menu →', href: '/menu' },
  },

  featured: {
    eyebrow: 'Signatures',
    titleLead: 'The ones people',
    titleEmphasis: 'come back for',
    intro: 'Small-batch Basque cheesecakes and loaded shakes, made fresh in Manchester every morning.',
    items: [
      { name: 'Strawberry & White Chocolate', price: '£7.50', img: '/assets/cheesecake-strawberry.jpg', alt: 'Basque cheesecake with fresh strawberries and white chocolate', desc: 'Caramelised Basque base, white-chocolate cream, fresh Kent strawberries.', badge: 'Popular' },
      { name: 'Biscoff Caramel', price: '£7.50', img: '/assets/cheesecake-biscoff.jpg', alt: 'Biscoff cheesecake under a mountain of caramelised crumb', desc: 'Molten Lotus caramel, a blizzard of spiced biscuit crumb.', badge: 'Popular' },
      { name: 'Pistachio Cream', price: '£8.00', img: '/assets/cheesecake-pistachio.jpg', alt: 'Pistachio cheesecake with strawberries', desc: 'Sicilian pistachio, silky crema, toasted nut rubble.', badge: 'New' },
      { name: 'Banoffee Shake', price: '£6.50', img: '/assets/shake-banoffee.jpg', alt: 'Banoffee milkshake topped with banana and nuts', desc: 'Banana, dulce de leche, hand-blended and piled high.', badge: 'Popular' },
      { name: 'Cookies & Cream Shake', price: '£6.00', img: '/assets/shake-cookies-cream.jpg', alt: 'Cookies and cream milkshake with whipped cream', desc: 'Crushed cookies, vanilla soft-serve, cocoa swirl.', badge: '' },
      { name: 'Strawberries & Cream Shake', price: '£6.00', img: '/assets/shake-strawberry.jpg', alt: 'Strawberry milkshake with whipped cream and berry drizzle', desc: 'Real strawberries, cream, a ripple of berry compote.', badge: 'New' },
    ],
    moreCta: { label: 'See the full menu', href: '/menu' },
  },

  story: {
    eyebrow: 'Our story',
    title: 'A little corner of Italy, baked in Manchester',
    paragraphs: [
      'Dolci Vita began with one recipe, one oven, and a stubborn belief that dessert should feel like an occasion and yes, even on a Tuesday.',
      'Every cheesecake is caramelised to order, every shake blended by hand. No shortcuts, no freezers full of yesterday. Just the sweet life, one plate at a time.',
    ],
    image: '/assets/cheesecake-trio.jpg',
    imageAlt: 'A trio of Dolci Vita Basque cheesecakes on marble',
    stat: { value: '100%', label: 'made fresh, in-house, daily' },
    link: { label: 'Come find us →', href: '#location' },
  },

  why: {
    eyebrow: 'Why Dolci Vita',
    titleLead: 'Why our desserts',
    titleEmphasis: 'keep people coming back',
    description: 'No powders, no freezers full of yesterday. Just proper ingredients, made fresh and finished to order the way dessert should be.',
    image: '/assets/shakes-cutout.png',
    imageAlt: 'Two Dolci Vita loaded shakes',
    left: [
      { no: '01', title: 'Only the good stuff', desc: 'Real cream, real fruit, proper chocolate — no powders, no shortcuts.' },
      { no: '02', title: 'Made fresh daily', desc: 'Baked, torched and blended in-house every single morning.' },
      { no: '03', title: 'Loaded to order', desc: 'Nothing sits, nothing waits. Built the moment you ask.' },
    ],
    right: [
      { no: '04', title: 'Endless choice', desc: 'Cheesecakes, kunafa, shakes, sundaes, pancakes and more.' },
      { no: '05', title: 'Build your own', desc: 'The Made by You bar — pick your base, sauce and toppings.' },
      { no: '06', title: 'Made with love', desc: 'Because dessert should feel like an occasion, even on a Tuesday.' },
    ],
  },

  gallery: {
    eyebrow: 'Follow along',
    titleLead: 'Straight from',
    titleEmphasis: 'the counter',
    handle: '@dolcivitauk',
    followHref: 'https://www.instagram.com/dolcivitauk',
    items: [
      { img: '/assets/cheesecake-trio.jpg', alt: 'Trio of Dolci Vita cheesecakes', link: '#' },
      { img: '/assets/shake-strawberry-2.jpg', alt: 'Strawberry milkshake', link: '#' },
      { img: '/assets/hero-zebra-drip.jpg', alt: 'Zebra-drip San Sebastian cake', link: '#' },
      { img: '/assets/shake-kinder-single.jpg', alt: 'Loaded chocolate shake', link: '#' },
      { img: '/assets/cheesecake-biscoff-2.jpg', alt: 'Biscoff cheesecake', link: '#' },
      { img: '/assets/shake-malt.jpg', alt: 'Malted nut milkshake', link: '#' },
      { img: '/assets/shakes-pair.jpg', alt: 'A pair of loaded shakes', link: '#' },
      { img: '/assets/cheesecake-pistachio.jpg', alt: 'Pistachio cheesecake', link: '#' },
      { img: '/assets/shake-biscoff-single.jpg', alt: 'Biscoff loaded shake', link: '#' },
      { img: '/assets/shake-cookies-cream.jpg', alt: 'Cookies and cream milkshake', link: '#' },
    ],
  },

  location: {
    eyebrow: 'Visit & order',
    title: "Find us, or we'll come to you",
    details: [
      {
        icon: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.996.996c-6.063 0-10.998 4.937-10.998 11 0 10.669 10.379 18.78 10.379 18.78a1 1 0 0 0 1.246 0s10.38-8.111 10.38-18.78c0-6.063-4.944-11-11.007-11m0 6.002c2.75 0 5.006 2.249 5.006 4.998S18.746 17 15.996 17s-4.998-2.254-4.998-5.004a5.01 5.01 0 0 1 4.998-4.998" fill="currentColor"/></svg>',
        label: 'Address',
        lines: [
          '185 Gatley Rd',
          'Manchester, Gatley',
          'Cheadle SK8 4BB'
        ],
        note: ''
      },
      {
        icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 0 4v1s2 1 4 1 4-1 4-1 2 1 4 1 4-1 4-1V4l-3-3z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 15V7.519C1.817 7.765 2.882 8 4 8c1.303 0 2.533-.32 3.382-.603q.342-.113.618-.222a14 14 0 0 0 .618.222C9.468 7.681 10.698 8 12 8c1.118 0 2.183-.235 3-.481V15H7v-5H4v5zm11-5h-2v3h2z" fill="currentColor"/></svg>',
        label: 'Collection Hours',
        lines: [
          'Monday – Thursday · 3 PM – 1 AM',
          'Friday – Saturday · 3 PM – 2 AM',
          'Sunday · 3 PM – 1 AM'
        ],
        note: ''
      },
      {
        icon: '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M35.8 11a3.2 3.2 0 0 0-2.2-1H32V8a2.9 2.9 0 0 0-3-3h-7.1A11.7 11.7 0 0 0 14 2 12 12 0 0 0 2 14a4 4 0 0 0 .1 1.1H2V35a2.9 2.9 0 0 0 3 3h2.3a7 7 0 0 0 13.4 0h6.6a7 7 0 0 0 13.4 0H43a2.9 2.9 0 0 0 3-3V22.2Zm-2.7 3 7.3 8H32v-8ZM14 6a8 8 0 1 1-8 8 8 8 0 0 1 8-8m0 33a3 3 0 1 1 3-3 2.9 2.9 0 0 1-3 3m20 0a3 3 0 1 1 3-3 2.9 2.9 0 0 1-3 3"/><path d="M20 14a2 2 0 0 0-2-2h-2v-2a2 2 0 0 0-4 0v6h6a2 2 0 0 0 2-2"/></svg>',
        label: 'Delivery Hours',
        lines: [
          'Monday – Thursday · 3 PM – 1 AM',
          'Friday – Saturday · 3 PM – 2 AM',
          'Sunday · 3 PM – 1 AM'
        ],
        note: ''
      },
    ],
    actions: [
      { label: 'Call to order', href: 'tel:+441615247190', variant: 'primary' },
      { label: 'Order for delivery', href: '#', variant: 'outline-dark' },
    ],
    mapNote: 'map placeholder — drop a location screenshot here',
  },

  footer: {
    logo: '/assets/logo-gold.png',
    logoAlt: 'Dolci Vita — The Sweet Life',
    tagline: 'Artisan cheesecakes, gelato & loaded shakes. Made fresh in Manchester.',
    groups: [
      {
        title: 'Explore',
        links: [
          { label: 'Menu', href: '/#menu' },
          { label: 'Our story', href: '/#story' },
          { label: 'Gallery', href: '/#gallery' },
          { label: 'Full menu', href: '/menu' },
          { label: 'Download app', href: '/download-app' },
          { label: 'Contact', href: '/contact' },
          { label: 'FAQs', href: '/faqs' },
          { label: 'Work with us', href: '/work-with-us' },
        ],
      },
      {
        title: 'Information',
        links: [
          { label: 'Terms & Conditions', href: '/terms-and-conditions' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Cookie Policy', href: '/cookie-policy' },
          { label: 'Accessibility', href: '/accessibility' },
          { label: 'Cookie Settings', href: '/cookie-settings' },
        ],
      },
      {
        title: 'Follow',
        links: [
          { label: 'Faceboook', href: 'https://www.facebook.com/share/16PCtLUmqj' },
          { label: 'Instagram', href: 'https://www.instagram.com/dolcivitauk' },
          { label: 'TikTok', href: 'https://www.tiktok.com/@dolcivitauk' },
          { label: 'TripAdvisor', href: 'https://www.tripadvisor.co.uk/Restaurant_Review-g1237511-d33004238-Reviews-Dolci_Vita_The_Sweet_Life-Cheadle_Greater_Manchester_England.html?m=69573' },
        ],
      },
    ],
    hours: ['Monday – Thursday · 3 PM – 1 AM', 'Friday – Saturday · 3 PM – 2 AM', 'Sunday · 3 PM – 1 AM'],
    copyrightNote: '185 Gatley RdManchester, GatleyCheadle SK8 4BB',
  },

  menu: {
    eyebrow: 'The Sweet Life',
    titleLead: 'The',
    titleEmphasis: 'Menu',
    description: "Everything's made fresh, in-house, every single day. Prices shown are placeholders (replace later)",
    categories: ['All', 'Cheesecakes & Kunafa', 'Cakes', 'Waffles & Dough', 'Breakfast', 'Shakes', 'Sundaes', 'Drinks', 'Extras'],
    items: [
      { name: 'Dolci Pistachio Kunafa', price: '£8.50', cat: 'Cheesecakes & Kunafa', img: '/assets/cheesecake-pistachio.jpg', alt: 'Pistachio kunafa', desc: 'Crisp shredded pastry, molten Sicilian pistachio centre.', badge: 'Signature', diet: ['V'] },
      { name: 'San Sebastian Cheesecake', price: '£7.50', cat: 'Cheesecakes & Kunafa', img: '/assets/cheesecake-biscoff-2.jpg', alt: 'San Sebastian burnt Basque cheesecake', desc: 'The original burnt Basque — caramelised top, molten middle.', badge: 'Popular', diet: ['V'] },
      { name: 'Biscoff Caramel Cheesecake', price: '£7.50', cat: 'Cheesecakes & Kunafa', img: '/assets/cheesecake-biscoff.jpg', alt: 'Biscoff cheesecake', desc: 'Molten Lotus caramel under a blizzard of spiced crumb.', badge: 'Popular', diet: ['V'] },
      { name: 'Strawberry & White Chocolate', price: '£7.50', cat: 'Cheesecakes & Kunafa', img: '/assets/cheesecake-strawberry.jpg', alt: 'Strawberry white chocolate cheesecake', desc: 'White-chocolate cream, caramelised base, fresh strawberries.', badge: '', diet: ['V'] },
      { name: 'Matilda Cake', price: '£6.50', cat: 'Cakes', img: '/assets/hero-zebra-drip.jpg', alt: 'Chocolate Matilda cake', desc: 'Deep, fudgy chocolate cake under a warm chocolate cascade.', badge: 'Signature', diet: ['V'] },
      { name: 'Milk Cake', price: '£6.00', cat: 'Cakes', img: '', alt: '', desc: 'Soft sponge soaked in three milks, lightly whipped top.', badge: '', diet: ['V'] },
      { name: 'Mini Eggs Crunch', price: '£6.50', cat: 'Cakes', img: '', alt: '', desc: 'Milk-chocolate sponge loaded with crushed mini eggs.', badge: 'New', diet: ['V'] },
      { name: 'Dolci Brownies', price: '£5.50', cat: 'Waffles & Dough', img: '', alt: '', desc: 'Gooey-centred brownie, warmed and sauced to order.', badge: '', diet: ['V'] },
      { name: 'Hot Cookie Dough', price: '£6.50', cat: 'Waffles & Dough', img: '', alt: '', desc: 'Skillet-baked cookie dough, molten middle, scoop on top.', badge: 'Popular', diet: ['V'] },
      { name: 'Original Waffle Balls', price: '£6.00', cat: 'Waffles & Dough', img: '', alt: '', desc: 'Bubble-waffle bites, your choice of drizzle and topping.', badge: '', diet: ['V'] },
      { name: 'Dolci Pancakes', price: '£6.50', cat: 'Breakfast', img: '', alt: '', desc: 'Stack of fluffy pancakes, loaded and drizzled your way.', badge: '', diet: ['V'] },
      { name: 'Dolci French Toast', price: '£6.50', cat: 'Breakfast', img: '', alt: '', desc: 'Thick brioche, caramelised edges, sweet finish.', badge: 'New', diet: ['V'] },
      { name: 'Dolci Shakes', price: '£6.50', cat: 'Shakes', img: '/assets/shake-kinder-single.jpg', alt: 'Loaded Dolci shake', desc: 'Loaded signature shakes, hand-blended and piled high.', badge: 'Popular', diet: ['V'] },
      { name: 'Biscoff Loaded Shake', price: '£6.50', cat: 'Shakes', img: '/assets/shake-biscoff-single.jpg', alt: 'Biscoff loaded shake', desc: 'Lotus biscuit, caramel swirl, whipped cream, crumb.', badge: '', diet: ['V'] },
      { name: 'Classic Shakes', price: '£5.50', cat: 'Shakes', img: '/assets/shake-cookies-cream.jpg', alt: 'Classic milkshake', desc: 'Vanilla, chocolate, strawberry — thick and simple.', badge: '', diet: ['V'] },
      { name: 'Banoffee Shake', price: '£6.50', cat: 'Shakes', img: '/assets/shake-banoffee.jpg', alt: 'Banoffee milkshake', desc: 'Banana, dulce de leche, blended by hand.', badge: '', diet: ['V'] },
      { name: 'Sundaes', price: '£5.50', cat: 'Sundaes', img: '', alt: '', desc: 'Layered gelato sundae, sauce, cream and a crunchy finish.', badge: '', diet: ['V'] },
      { name: 'Chocolate Strawberries', price: '£5.00', cat: 'Extras', img: '/assets/cheesecake-strawberry.jpg', alt: 'Chocolate-dipped strawberries', desc: 'Fresh strawberries dipped in milk and white chocolate.', badge: '', diet: ['V', 'GF'] },
      { name: 'Made by You', price: 'from £5.50', cat: 'Extras', img: '', alt: '', desc: 'Build your own — pick your base, sauce and toppings.', badge: 'New', diet: ['V'] },
      { name: 'Drinks', price: 'from £2.50', cat: 'Drinks', img: '', alt: '', desc: 'Hot and cold — coffee, tea, sodas and more.', badge: '', diet: [] },
      { name: 'Mocktails', price: '£4.50', cat: 'Drinks', img: '', alt: '', desc: 'Fruit-forward, freshly shaken, zero alcohol.', badge: '', diet: ['VG'] },
      { name: 'Extras & Toppings', price: 'from £0.80', cat: 'Extras', img: '', alt: '', desc: 'Sauces, sprinkles, extra scoops — finish it your way.', badge: '', diet: [] },
    ],
  },
};
