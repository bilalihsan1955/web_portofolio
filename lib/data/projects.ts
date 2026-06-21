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
  timeline: {
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
    timeline: {
      EN: "August 2025 - February 2026",
      ID: "Agustus 2025 - Februari 2026"
    },
    shortSummary: {
      EN: "A public service Super App for Banyuwangi Regency, enabling citizens to process population administration, village certificates, and local taxes directly from their mobile devices.",
      ID: "Super App pelayanan publik Kabupaten Banyuwangi untuk memudahkan warga mengurus administrasi kependudukan, surat desa, dan pajak daerah langsung dari perangkat mobile."
    },
    fullDescription: {
      EN: "Smartkampung is an official government application developed to digitalize public services across villages in Banyuwangi. I was invited by Jagoan Indonesia to join this project, where my role was strictly focused on the mobile frontend development. This involved building cross-platform user interfaces with Flutter, integrating the existing REST APIs provided by the government, and monitoring application stability to cut physical queues.",
      ID: "Smartkampung adalah aplikasi resmi pemerintah yang dikembangkan untuk mendigitalisasi pelayanan publik hingga ke tingkat desa di Kabupaten Banyuwangi. Saya diajak oleh tim Jagoan Indonesia untuk ikut andil dalam proyek ini, di mana peran saya difokuskan pada pengembangan frontend mobile. Pekerjaan ini meliputi pembuatan antarmuka lintas platform menggunakan Flutter, integrasi dengan REST API dari pemerintah, serta pemantauan stabilitas aplikasi untuk memangkas antrean fisik."
    },
    liveDemoLink: "https://play.google.com/store/apps/details?id=id.smartkampung.app",
    imageAssets: [
      "/images/porto/Smart Kampung/banner_smartkampung.webp",
      "/images/porto/Smart Kampung/smart kampung onboarding screen.webp",
      "/images/porto/Smart Kampung/smart kampung login screen.webp",
      "/images/porto/Smart Kampung/smart kampung home screen.webp",
      "/images/porto/Smart Kampung/smart kampung layanan screen.webp",
      "/images/porto/Smart Kampung/smart kampung pembayaran pbb screen.webp",
      "/images/porto/Smart Kampung/smart kampung sipundiwangi screen.webp",
      "/images/porto/Smart Kampung/smart kampung live cctv screen.webp",
      "/images/porto/Smart Kampung/smart kampung profile screen.webp",
      "/images/porto/Smart Kampung/zoom meeting dengan kominfo banyuwangi.webp",
      "/images/porto/Smart Kampung/zoom meeting dengan seluruh pihak terkait.webp"
    ]
  },
  {
    id: 2,
    slug: "mustaka",
    title: "Mustaka",
    category: "Web",
    role: "Full-Stack Web & Creative Developer",
    techStack: ["Next.js 16", "TypeScript", "React Three Fiber", "TensorFlow.js", "Tailwind CSS v4", "Supabase"],
    timeline: {
      EN: "November 2025 - December 2025",
      ID: "November 2025 - Desember 2025"
    },
    shortSummary: {
      EN: "An interactive educational platform that virtually transports users into the Singhasari Kingdom, featuring in-browser AI Motion Capture.",
      ID: "Platform edukasi interaktif yang membawa pengguna masuk ke dalam Kerajaan Singhasari secara virtual dengan fitur AI Motion Capture langsung di browser."
    },
    fullDescription: {
      EN: "Mustaka is an interactive educational platform that virtually transports users into the Singhasari Kingdom. For this project, I was recruited to collaborate with the team from the Center of Cultural Frontier Studies Universitas Brawijaya (CCFS UB). Built with Next.js 16 architecture, the application utilizes TensorFlow.js to deliver in-browser Motion Capture features, detecting user poses in real-time to match movements with 3D characters of Ken Arok & Ken Dedes (rendered using React Three Fiber). Backed by a solid backend with Supabase, Mustaka demonstrates a complex integration between WebGL, client-side Machine Learning, and modern architectural systems. Additionally, during its development, I was extensively assisted by AI technologies to optimize and accelerate the coding process.",
      ID: "Mustaka adalah platform edukasi interaktif yang membawa pengguna masuk ke dalam Kerajaan Singhasari secara virtual. Dalam proyek ini, saya direkrut untuk bekerja sama dengan tim dari Center of Cultural Frontier Studies Universitas Brawijaya (CCFS UB). Dibangun dengan arsitektur Next.js 16, aplikasi ini menggunakan TensorFlow.js untuk menghadirkan fitur Motion Capture langsung di browser, mendeteksi pose pengguna secara real-time untuk mencocokkan gerakan dengan karakter 3D Ken Arok & Ken Dedes (dirender menggunakan React Three Fiber). Didukung oleh backend yang solid dengan Supabase, Mustaka mendemonstrasikan integrasi kompleks antara WebGL, Machine Learning sisi klien, dan sistem arsitektur modern. Selain itu, dalam proses pengerjaannya, saya juga sangat dibantu oleh teknologi AI untuk mengoptimalkan dan mempercepat penulisan kode."
    },
    liveDemoLink: "https://mustaka.co.id/",
    imageAssets: [
      "/images/porto/Mustaka/Banner.webp",
      "/images/porto/Mustaka/Apa Itu Mustaka.webp",
      "/images/porto/Mustaka/Beranda.webp",
      "/images/porto/Mustaka/Kuratorial Jelajahi Singhasari 1.webp",
      "/images/porto/Mustaka/Kuratorial Jelajahi Singhasari 2.webp",
      "/images/porto/Mustaka/Motion Capture Ken Arok.webp",
      "/images/porto/Mustaka/Pilih Carakter.webp",
      "/images/porto/Mustaka/Section Kuratorial dan motion capture.webp",
      "/images/porto/Mustaka/Section Partnership.webp",
      "/images/porto/Mustaka/Video Pengujian Motion Capture.mp4",
      "/images/porto/Mustaka/dokumentasi proses pengerjaan.webp",
      "/images/porto/Mustaka/dokumentasi proses pengerjaan serta diskusi dengan 3D artist.webp",
      "/images/porto/Mustaka/dokumentasi tim CCFS UB.webp"
    ]
  },
  {
    id: 3,
    slug: "kaizen-db-engine",
    title: "Kaizen DB Engine",
    category: "Web",
    role: "Full-Stack Web Developer",
    techStack: ["Laravel 11", "Tailwind CSS", "DaisyUI", "Alpine.js", "Chart.js", "MySQL"],
    timeline: {
      EN: "2024",
      ID: "2024"
    },
    shortSummary: {
      EN: "A comprehensive CRM dashboard designed for sales teams and management to track customer interactions, follow-ups, and salesman performance metrics.",
      ID: "Dasbor CRM komprehensif yang dirancang untuk tim sales dan manajemen guna melacak interaksi pelanggan, tindak lanjut (follow-ups), dan matrik kinerja salesman."
    },
    fullDescription: {
      EN: "Kaizen DB Engine is a comprehensive CRM dashboard designed exclusively for sales teams and management to track customer interactions, follow-ups, and salesman performance metrics. Built with Laravel 11 and a modern frontend stack (Tailwind CSS, DaisyUI, Alpine.js), the internal platform centralizes 'Big Data' leads, allowing salesmen to claim and manage potential clients within their specific branch. It tracks detailed automotive metrics, including customer progress statuses (Pending, SPK, DO), vehicle models, and chassis numbers. The system features dynamic real-time analytical dashboards using Chart.js and enforces a strict Role-Based Access Control (RBAC) architecture. This allows Admins and Branch Managers to oversee branch-wide operations, while Supervisors can directly monitor follow-up counts, claimed leads, and the individual performance of salesmen under their supervision.",
      ID: "Kaizen DB Engine adalah dasbor CRM komprehensif yang dirancang eksklusif bagi tim sales dan manajemen untuk melacak interaksi pelanggan, tindak lanjut (follow-ups), dan matrik kinerja salesman. Dibangun menggunakan Laravel 11 dan stack frontend modern (Tailwind CSS, DaisyUI, Alpine.js), platform internal ini memusatkan prospek dari 'Big Data', memungkinkan salesman untuk mengambil (meng-'claim') dan mengelola klien potensial di cabang mereka masing-masing. Sistem ini melacak matrik secara mendetail, termasuk status perkembangan (seperti Pending, SPK, DO), model mobil, dan nomor rangka. Aplikasi ini dilengkapi dasbor analitik real-time yang dinamis menggunakan Chart.js dan menerapkan arsitektur Role-Based Access Control (RBAC) yang ketat. Hal ini memungkinkan Admin dan Kepala Cabang untuk mengawasi operasional cabang, sementara Supervisor dapat memantau secara langsung jumlah follow-up, prospek yang diklaim, serta kinerja individu dari salesman yang berada di bawah pengawasan mereka."
    },
    repositoryLink: "https://github.com/Fdjri/web_project_salesman",
    imageAssets: [
      "/images/porto/Kaizen DB Engine/Banner.webp",
      "/images/porto/Kaizen DB Engine/Login Page.webp",
      "/images/porto/Kaizen DB Engine/Dashboard Page.webp",
      "/images/porto/Kaizen DB Engine/Laporan Page.webp"
    ]
  },
  {
    id: 4,
    slug: "automatic-rainfall-recorder",
    title: "Automatic Rainfall Recorder",
    category: "IoT",
    role: "Embedded Systems Engineer",
    techStack: ["IoT", "ESP32-S3", "C++", "Modbus", "Next.js"],
    timeline: {
      EN: "January 2024 - March 2024",
      ID: "Januari 2024 - Maret 2024"
    },
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
    id: 5,
    slug: "tracking-tractor-gateway",
    title: "Tracking Tractor Gateway",
    category: "IoT",
    role: "Hardware & Firmware Developer",
    techStack: ["ESP32-S3", "RS485", "C++", "GPS", "MQTT"],
    timeline: {
      EN: "January 2024 - March 2024",
      ID: "Januari 2024 - Maret 2024"
    },
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
    id: 6,
    slug: "digi-tree",
    title: "Digi Tree",
    category: "IoT",
    role: "Full-Stack IoT Developer",
    techStack: ["Arduino", "Node.js", "React", "Sensors", "WebSockets"],
    timeline: {
      EN: "January 2024 - March 2024",
      ID: "Januari 2024 - Maret 2024"
    },
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
    id: 7,
    slug: "acacia-science",
    title: "Acacia Science",
    category: "UI/UX",
    role: "UI/UX Designer",
    techStack: ["Figma", "Prototyping", "Design Systems", "User Research"],
    timeline: {
      EN: "January 2024 - March 2024",
      ID: "Januari 2024 - Maret 2024"
    },
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
  }
];
