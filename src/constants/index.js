import {
  mobile,
  backend,
  creator,
  web,
  git,
  database,
  api,
  bloc,
  provider,
  github,
  menu,
  close,
  routeacademy,
  depi,
  freelance,
  weather11,
  mohtadi,
  realestate,
  streamix,
  carparking,
  traintracker,
  whatsapp,
  todo,
  bookingapp,
  ecommerceapp,
  magazin,
  calculator,
  evently,
  flutter,
  firebase,
  supabase,
  postman,
  animations,
  localStorage,
  linux,
  network,
  restful,
  figma,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Cyber Security",
    icon: creator,
  },
  {
    title: "Firebase Developer",
    icon: firebase,
  },
];

const technologies = [
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Animations",
    icon: animations,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Network",
    icon: network,
  },
  {
    name: "REST APIs",
    icon: restful, // Changed from api (news.png) to restful.png
  },
  {
    name: "Local Storage",
    icon: localStorage,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Figma",
    icon: figma,
  },
];


const experiences = [
    {
    title: "Network Infrastructure",
    company_name: "NTI Summer Training",
    icon: network, // Using the network icon you added earlier
    iconBg: "#E6DEDD",
    date: "Summer 2023",
    points: [
      "Completed intensive training program on network infrastructure fundamentals.",
      "Gained hands-on experience with networking concepts and technologies.",
      "Achieved outstanding score of 94% in the final assessment.",
      "Developed practical skills in network design, implementation, and troubleshooting.",
    ],
  },
  {
    title: "Flutter Developer Course",
    company_name: "Route Academy",
    icon: routeacademy,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Feb 2025",
    points: [
      "Completed intensive Flutter development course at Route Academy.",
      "Gained advanced skills in building cross-platform mobile applications.",
      "Learned state management, REST API integration, and Firebase implementation.",
      "Developed multiple portfolio projects showcasing Flutter expertise.",
    ],
  },

  {
    title: "Freelance Flutter Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Sep 2024 - Present",
    points: [
      "Built cross-platform mobile apps using Flutter and Dart for iOS and Android.",
      "Developed and deployed modern mobile applications with Firebase integration.",
      "Integrated REST APIs and handled state management with Bloc and Provider.",
      "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
    ],
  },
  {
    title: "Mobile App Development Trainee",
    company_name: "DEPI",
    icon: depi, // Or institute logo
    iconBg: "#ffff",
    date: "Feb 2024 - Oct 2025",
    points: [
      "Completed an intensive training program focused on Flutter and mobile development.",
      "Built multiple cross-platform projects, including apps with authentication and databases.",
      "Worked with tools like Flutter, Dart, Firebase, SQLite, and Git.",
      "Gained hands-on experience in deploying apps and following clean code practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mohtadi",
    description:
      "A Quran app built with Flutter, providing users with an interactive and immersive way to read and listen to the Quran with features like bookmarks, audio playback, and translations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: mohtadi,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.mohtadi", // Placeholder
  },
  {
    name: "Real Estate App & Website",
    description:
      "A comprehensive real estate platform built with Flutter for mobile and web, allowing users to browse properties, search listings, and connect with agents.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "rest-apis",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://realestateapp.com/", // Placeholder
  },
  {
    name: "Streamix",
    description:
      "A movie streaming app developed with Flutter, offering a vast library of movies with features like search, favorites, and offline viewing.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: streamix,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.streamix", // Placeholder
  },
  {
    name: "Train Tracker",
    description:
      "An app for tracking train schedules and real-time updates, built with Flutter to help users plan their journeys efficiently.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bloc",
        color: "pink-text-gradient",
      },
    ],
    image: traintracker,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.traintracker", // Placeholder
  },
  {
    name: "Car Parking",
    description:
      "A car parking management app using Flutter, allowing users to find and reserve parking spots with real-time availability.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "provider",
        color: "pink-text-gradient",
      },
    ],
    image: carparking,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.carparking", // Placeholder
  },
  {
    name: "To Do App",
    description:
      "A productivity app built with Flutter for managing tasks, with features like categories, reminders, and cloud sync.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.todoapp", // Placeholder
  },
  {
    name: "Weather App",
    description:
      "A weather forecasting app developed with Flutter, providing current conditions and forecasts with location-based services.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "rest-apis",
        color: "pink-text-gradient",
      },
    ],
    image: weather11,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.weatherapp", // Placeholder
  },
  {
    name: "Booking App",
    description:
      "A booking platform for services like hotels and events, built with Flutter for seamless reservations and payments.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bloc",
        color: "pink-text-gradient",
      },
    ],
    image: bookingapp,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.bookingapp", // Placeholder
  },
  {
    name: "WhatsApp Clone",
    description:
      "A messaging app clone built with Flutter, featuring real-time chat, media sharing, and group conversations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.whatsappclone", // Placeholder
  },
  {
    name: "E-commerce App & Website",
    description:
      "A full-fledged e-commerce platform with Flutter for mobile and web, including product listings, cart, and payment integration.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "rest-apis",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceapp,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://ecommerceapp.com/", // Placeholder
  },
  {
    name: "Magazine App",
    description:
      "A digital magazine application built with Flutter, featuring article browsing, bookmarking, and offline reading capabilities.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "provider",
        color: "pink-text-gradient",
      },
    ],
    image: magazin,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.magazineapp", // Placeholder
  },
  {
    name: "Calculator App",
    description:
      "A feature-rich calculator application with scientific functions, history tracking, and a clean user interface.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "math",
        color: "orange-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.calculatorapp", // Placeholder
  },
  {
    name: "Evently",
    description:
      "An event management and ticketing platform built with Flutter, allowing users to discover, book, and manage events.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bloc",
        color: "pink-text-gradient",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/MahmoudAlazazy",
    live_website_link: "https://play.google.com/store/apps/details?id=com.example.eventlyapp", // Placeholder
  },
];

const emailjsConfig = {
  serviceId: "service_30afmwm",
  templateId: "template_n7f9yyp",
  publicKey: "qB5l0uksR_jwUpa8E",
};

//export const geminiApiKey = "obFMlhoS6RnnDUgjf";

export { services, technologies, experiences, testimonials, projects, emailjsConfig };
