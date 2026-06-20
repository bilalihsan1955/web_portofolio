export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "IoT" | "UI/UX";
  role: string;
  techStack: string[];
  shortSummary: {
    EN: string;
    ID: string;
  };
  fullDescription: {
    EN: string;
    ID: string;
  };
  repositoryLink?: string;
  liveDemoLink?: string;
  imageAssets: string[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: "smartkampung",
    title: "Banyuwangi Smartkampung",
    category: "Mobile",
    role: "Mobile Developer (UI & API Integration)",
    techStack: ["Flutter", "REST API"],
    shortSummary: {
      EN: "A public service Super App for Banyuwangi Regency, enabling citizens to process population administration, village certificates, and local taxes directly from their mobile devices.",
      ID: "Super App pelayanan publik Kabupaten Banyuwangi untuk memudahkan warga mengurus administrasi kependudukan, surat desa, dan pajak daerah langsung dari perangkat mobile."
    },
    fullDescription: {
      EN: "Smartkampung is an official government application developed to digitalize public services across villages in Banyuwangi. My role was strictly focused on the mobile frontend development, which involved building cross-platform user interfaces with Flutter, integrating the existing REST APIs provided by the government, and monitoring application stability to cut physical queues.",
      ID: "Smartkampung adalah aplikasi resmi pemerintah yang dikembangkan untuk mendigitalisasi pelayanan publik hingga ke tingkat desa di Kabupaten Banyuwangi. Peran saya sepenuhnya berfokus pada pengembangan frontend mobile, yang meliputi pembuatan antarmuka lintas platform menggunakan Flutter, integrasi dengan REST API yang sudah disediakan oleh pihak pemerintah, serta pemantauan stabilitas aplikasi untuk memangkas antrean fisik."
    },
    liveDemoLink: "https://play.google.com/store/apps/details?id=id.smartkampung.app",
    imageAssets: [
      "/images/porto/Smart Kampung/banner_smartkampung.png",
      "/images/porto/Smart Kampung/smart kampung onboarding screen.png.webp",
      "/images/porto/Smart Kampung/smart kampung login screen.webp",
      "/images/porto/Smart Kampung/smart kampung home screen.webp",
      "/images/porto/Smart Kampung/smart kampung layanan screen.png.png",
      "/images/porto/Smart Kampung/smart kampung pembayaran pbb screen.webp",
      "/images/porto/Smart Kampung/smart kampung sipundiwangi screen.webp",
      "/images/porto/Smart Kampung/smart kampung live cctv screen.webp",
      "/images/porto/Smart Kampung/smart kampung profile screen.png.png",
      "/images/porto/Smart Kampung/progres pengerjaan aplikasi.jpg",
      "/images/porto/Smart Kampung/zoom meeting dengan kominfo banyuwangi.jpg"
    ]
  },
  {
    id: 2,
    slug: "automatic-rainfall-recorder",
    title: "Automatic Rainfall Recorder",
    category: "IoT",
    role: "Embedded Systems Engineer",
    techStack: ["IoT", "ESP32-S3", "C++", "Modbus", "Next.js"],
    shortSummary: {
      EN: "An advanced IoT monitoring system utilizing ESP32-S3 microcontrollers and Modbus protocols.",
      ID: "Sistem pemantauan IoT canggih yang memanfaatkan mikrokontroler ESP32-S3 dan protokol Modbus."
    },
    fullDescription: {
      EN: "The Automatic Rainfall Recorder (ARR) is a sophisticated IoT implementation that gathers real-time meteorological data. By leveraging the ESP32-S3 and reliable Modbus RTU communication, the system ensures data integrity even in remote areas. The hardware interfaces with various weather sensors and pushes data to a centralized Next.js dashboard for real-time visualization and analytics.",
      ID: "Automatic Rainfall Recorder (ARR) adalah implementasi IoT canggih yang mengumpulkan data meteorologi secara real-time. Dengan memanfaatkan ESP32-S3 dan komunikasi Modbus RTU yang andal, sistem ini memastikan integritas data bahkan di daerah terpencil. Perangkat keras berinteraksi dengan berbagai sensor cuaca dan mengirimkan data ke dasbor Next.js terpusat untuk visualisasi dan analitik real-time."
    },
    imageAssets: [
      "https://picsum.photos/seed/smartkampung1/800/600",
      "https://picsum.photos/seed/smartkampung2/800/600",
      "https://picsum.photos/seed/smartkampung3/800/600",
      "https://picsum.photos/seed/smartkampung4/800/600"
    ]
  },
  {
    id: 3,
    slug: "tracking-tractor-gateway",
    title: "Tracking Tractor Gateway",
    category: "IoT",
    role: "Hardware & Firmware Developer",
    techStack: ["ESP32-S3", "RS485", "C++", "GPS", "MQTT"],
    shortSummary: {
      EN: "An IoT gateway featuring ESP32-S3 and RS485 for precise tractor telemetry and tracking.",
      ID: "Gateway IoT yang menampilkan ESP32-S3 dan RS485 untuk telemetri dan pelacakan traktor yang presisi."
    },
    fullDescription: {
      EN: "This project involved designing a custom IoT gateway to track agricultural tractors. The device uses an ESP32-S3 microcontroller communicating via RS485 with onboard vehicle sensors. It collects GPS coordinates, speed, and fuel consumption data, transmitting it securely over MQTT to a fleet management dashboard. The system was designed to withstand harsh agricultural environments.",
      ID: "Proyek ini melibatkan perancangan gateway IoT khusus untuk melacak traktor pertanian. Perangkat menggunakan mikrokontroler ESP32-S3 yang berkomunikasi via RS485 dengan sensor kendaraan on-board. Sistem ini mengumpulkan data koordinat GPS, kecepatan, dan konsumsi bahan bakar, mentransmisikannya secara aman melalui MQTT ke dasbor manajemen armada. Sistem ini dirancang untuk bertahan di lingkungan pertanian yang keras."
    },
    imageAssets: [
      "https://picsum.photos/seed/smartkampung1/800/600",
      "https://picsum.photos/seed/smartkampung2/800/600",
      "https://picsum.photos/seed/smartkampung3/800/600",
      "https://picsum.photos/seed/smartkampung4/800/600"
    ]
  },
  {
    id: 4,
    slug: "digi-tree",
    title: "Digi Tree",
    category: "IoT",
    role: "Full-Stack IoT Developer",
    techStack: ["Arduino", "Node.js", "React", "Sensors", "WebSockets"],
    shortSummary: {
      EN: "An interactive IoT implementation for education, visualizing environmental data through a digital tree.",
      ID: "Implementasi IoT interaktif untuk pendidikan, memvisualisasikan data lingkungan melalui pohon digital."
    },
    fullDescription: {
      EN: "Digi Tree is an educational installation that bridges the gap between environmental science and technology. Equipped with soil moisture, temperature, and light sensors, the physical installation sends data to a React frontend via WebSockets. The digital representation of the tree changes its state based on real-time environmental health, providing students with an interactive learning experience.",
      ID: "Digi Tree adalah instalasi pendidikan yang menjembatani ilmu lingkungan dan teknologi. Dilengkapi dengan sensor kelembaban tanah, suhu, dan cahaya, instalasi fisik mengirimkan data ke frontend React melalui WebSockets. Representasi digital dari pohon tersebut mengubah statusnya berdasarkan kesehatan lingkungan secara real-time, memberikan pengalaman belajar interaktif bagi siswa."
    },
    imageAssets: [
      "https://picsum.photos/seed/smartkampung1/800/600",
      "https://picsum.photos/seed/smartkampung2/800/600",
      "https://picsum.photos/seed/smartkampung3/800/600",
      "https://picsum.photos/seed/smartkampung4/800/600"
    ]
  },
  {
    id: 5,
    slug: "acacia-science",
    title: "Acacia Science",
    category: "UI/UX",
    role: "UI/UX Designer",
    techStack: ["Figma", "Prototyping", "Design Systems", "User Research"],
    shortSummary: {
      EN: "A premium glassmorphism UI/UX design for a scientific research and publication platform.",
      ID: "Desain UI/UX glassmorphism premium untuk platform penelitian dan publikasi ilmiah."
    },
    fullDescription: {
      EN: "Acacia Science is a conceptual design project aimed at modernizing how scientific papers are discovered and read online. The design utilizes a clean, accessibility-first approach combined with modern glassmorphism aesthetics. The project included comprehensive user research, wireframing, building a scalable design system in Figma, and creating high-fidelity interactive prototypes.",
      ID: "Acacia Science adalah proyek desain konseptual yang bertujuan untuk memodernisasi cara makalah ilmiah ditemukan dan dibaca secara online. Desain ini menggunakan pendekatan yang bersih dan mengutamakan aksesibilitas yang dipadukan dengan estetika glassmorphism modern. Proyek ini mencakup penelitian pengguna yang komprehensif, wireframing, membangun sistem desain yang dapat diskalakan di Figma, dan membuat prototipe interaktif dengan fidelitas tinggi."
    },
    imageAssets: [
      "https://picsum.photos/seed/smartkampung1/800/600",
      "https://picsum.photos/seed/smartkampung2/800/600",
      "https://picsum.photos/seed/smartkampung3/800/600",
      "https://picsum.photos/seed/smartkampung4/800/600"
    ]
  },
  {
    id: 6,
    slug: "mustaka",
    title: "Mustaka",
    category: "Web",
    role: "Web Developer",
    techStack: ["Next.js", "Tailwind CSS", "Three.js"],
    shortSummary: {
      EN: "An interactive and immersive web application designed to introduce the legendary history of Ken Arok & Ken Dedes through modern UI/UX and rich animations.",
      ID: "Platform web interaktif yang memperkenalkan kisah sejarah legendaris Ken Arok & Ken Dedes dengan pendekatan UI/UX yang imersif dan modern."
    },
    fullDescription: {
      EN: "Mustaka is an interactive web experience designed to introduce the historical and legendary figures of Ken Arok and Ken Dedes using modern, immersive web elements. Built with Next.js, Tailwind CSS, and Three.js, it delivers a deeply engaging journey through Indonesian history, bridging the gap between cultural heritage and cutting-edge web technology.",
      ID: "Mustaka adalah pengalaman web interaktif yang dirancang untuk memperkenalkan tokoh sejarah dan legendaris Ken Arok dan Ken Dedes menggunakan elemen web modern dan imersif. Dibangun dengan Next.js, Tailwind CSS, dan Three.js, platform ini menghadirkan perjalanan yang mendalam melalui sejarah Indonesia, menjembatani warisan budaya dengan teknologi web mutakhir."
    },
    liveDemoLink: "https://mustaka.co.id/",
    imageAssets: [
      "https://picsum.photos/seed/mustaka/800/600"
    ]
  }
];
