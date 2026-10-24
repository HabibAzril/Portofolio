export const personalInfo = {
  name: "Azril",
  fullName: "Azril Ahmad",
  tagline: "Website Developer & QA",
  bio: "Memiliki Ketertarikan dalam merancang website yang interaktif, modern, dan didukung animasi mikro yang mulus. Berfokus pada perpaduan estetika visual dan performa tingkat tinggi serta QA(Quality Assurance) yang memastikan website berjalan dengan optimal.",
  location: "Indonesia",
  status: "Tersedia untuk Proyek Baru & Kolaborasi",
  socials: {
    github: "https://github.com/HabibAzril",
    linkedin: "https://www.linkedin.com/in/azril-ahmad-r-4b2697446/",
    instagram: "https://www.instagram.com/zzzri__l/",
    email: "azrilrayyanp@gmail.com" 
  },
  stats: [
    { label: "Tahun Pengalaman", value: "2+" },
    { label: "Proyek Selesai", value: "15+" },
    { label: "Klien Puas", value: "10+" },
    { label: "Komitmen Kualitas", value: "100%" }
  ]
};

export const programmingLanguagesData = [
  {
    name: "PHP",
    subtitle: "Server-side scripting language",
    badge: "Backend",
    level: "",
    color: "#777BB4",
    href: "https://www.php.net"
  },
  {
    name: "HTML",
    subtitle: "Semantic structure & web markup",
    badge: "Markup",
    level: "",
    color: "#E34F26",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    subtitle: "Responsive styling & visual layouts",
    badge: "Styling",
    level: "",
    color: "#1572B6",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "Java",
    subtitle: "Object-oriented backend logic",
    badge: "OOP & Logic",
    level: "",
    color: "#EA2D2E",
    href: "https://www.java.com"
  },
  {
    name: "JavaScript",
    subtitle: "Dynamic scripting & web interactivity",
    badge: "Frontend & Core",
    level: "",
    color: "#F7DF1E",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  }
];

export const frameworksData = [
  {
    name: "Laravel",
    subtitle: "PHP web application framework",
    badge: "Full-Stack",
    level: "",
    color: "#FF2D20",
    href: "https://laravel.com"
  },
  {
    name: "Tailwind CSS",
    subtitle: "Utility-first CSS framework",
    badge: "CSS Framework",
    level: "",
    color: "#38BDF8",
    href: "https://tailwindcss.com"
  },
  {
    name: "Bootstrap",
    subtitle: "Responsive UI component system",
    badge: "UI Toolkit",
    level: "",
    color: "#7952B3",
    href: "https://getbootstrap.com"
  },
  {
    name: "ReactJS",
    subtitle: "Component-driven frontend library",
    badge: "UI Library",
    level: "",
    color: "#61DAFB",
    href: "https://react.dev"
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    skills: programmingLanguagesData
  },
  {
    category: "Frameworks",
    skills: frameworksData
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Flappy Bird",
    subtitle: "Arcade Game • JavaScript 2D",
    description: "Game arkade interaktif yang terinspirasi dari permainan Flappy Bird klasik. Pemain mengontrol burung untuk mengepakkan sayap dan melewati rintangan pipa bertingkat dengan ketepatan koordinasi dan timing untuk meraih skor tertinggi.",
    category: "Game",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Loop"],
    image: "/project/projectImage/FlappyBird.png",
    demoUrl: null,
    githubUrl: "https://github.com/HabibAzril/FlappyBird",
    featured: true
  },
  {
    id: 2,
    title: "ZenithTech",
    subtitle: "E-Commerce • Tech & Electronics Store",
    description: "Website e-commerce terstruktur yang menyajikan katalog produk laptop dan aksesoris elektronik. Dilengkapi navigasi kategori produk, kolom pencarian cepat, serta manajemen keranjang belanja interaktif.",
    category: "E-Commerce",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive UI"],
    image: "/project/projectImage/ZenithTech.png",
    demoUrl: null,
    githubUrl: "https://github.com/HabibAzril/TechStore",
    featured: true
  },
  {
    id: 3,
    title: "PHP CRUD",
    subtitle: "Data Management • Web Application",
    description: "Aplikasi pengelolaan data berbasis web dengan PHP dan database MySQL. Menerapkan operasi CRUD (Create, Read, Update, Delete) secara terstruktur, dilengkapi sistem autentikasi login serta antarmuka tabel interaktif.",
    category: "Full-Stack",
    tags: ["PHP", "MySQL", "HTML5", "CSS3"],
    image: "/project/projectImage/phpCrud.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/HabibAzril/PhpCRUD",
    featured: true
  },
  {
    id: 4,
    title: "PlayAll",
    subtitle: "Gaming Community • Teman Mabar Finder",
    description: "Website komunitas gamer untuk menemukan teman bermain bersama (mabar) dalam game populer seperti Mobile Legends, PUBG, VALORANT, dan FC Mobile. Menghadirkan fitur pencarian pemain, sistem autentikasi, serta navigasi game favorit.",
    category: "Web App",
    tags: ["Laravel", "HTML5", "TailwindCSS", "PHP", "MySQL"],
    image: "/project/projectImage/PlayAll.png",
    demoUrl: null,
    githubUrl: "https://github.com/HabibAzril/PlayAll",
    featured: true
  }
];

