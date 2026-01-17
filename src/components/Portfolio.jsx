import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Modal,
  ModalBody,
} from "reactstrap";

const allProjects = [
  {
    id: 1,
    name: "Toksi — Social Media Platform",
    type: "Web",
    category: "Web Application",
    status: "Live",
    role: "Full-Stack Developer",
    featuredImage: "assets/img/projects/toksi/1.png",
    created: "July 2023",
    link: "https://social-media-mern-stack-frontend.vercel.app",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "REST APIs",
    ],
    features: [
      "Full-stack social media web application built on MERN stack",
      "User registration and secure authentication",
      "User profiles with customization and privacy controls",
      "Post creation with text, images, videos, hashtags, and mentions",
      "Like and comment system for user engagement",
      "Real-time private messaging and notifications using Socket.IO",
      "Follower and connection management system",
      "Audio and video calling using WebRTC", 
      "Real-time media streaming between users",
      "Responsive design optimized for mobile and desktop devices",
    ],
    images: [
      "assets/img/projects/toksi/1.png",
      "assets/img/projects/toksi/2.png",
      "assets/img/projects/toksi/3.png",
      "assets/img/projects/toksi/4.png",
      "assets/img/projects/toksi/5.png",
      "assets/img/projects/toksi/6.png",
      "assets/img/projects/toksi/7.png",
      "assets/img/projects/toksi/8.png",
      "assets/img/projects/toksi/9.png",
      "assets/img/projects/toksi/10.png",
      "assets/img/projects/toksi/11.png",
      "assets/img/projects/toksi/12.png",
      "assets/img/projects/toksi/13.png",
      "assets/img/projects/toksi/14.png",
      "assets/img/projects/toksi/15.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Toksi</strong> is a full-stack social media web application
          inspired by platforms such as Instagram and Medium, built using the
          MERN stack with real-time communication capabilities.
        </p>

        <p>
          The platform enables users to create and manage profiles, publish and
          interact with content, and engage with other users through likes,
          comments, follows, and private messaging.
        </p>

        <p>
          Real-time features such as notifications, messaging, and audio/video
          calling are implemented using Socket.IO and WebRTC, allowing seamless
          user-to-user communication directly within the application.
        </p>

        <p>
          Designed with responsiveness and scalability in mind, Toksi delivers a
          smooth user experience across devices while supporting real-time data
          updates and media streaming.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Bizflowsync — Business Management App",
    type: "App",
    category: "Mobile Application",
    status: "Live",
    role: "Full-Stack Developer",
    featuredImage: "assets/img/projects/bizflowsync/app/1.png",
    created: "June 2024 – November 2024",
    link: "https://play.google.com/store/apps/details?id=com.onlyrahulrai.bizflowsync",
    technologies: [
      "React Native",
      "Expo",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "JWT Authentication",
      "REST APIs",
      "Tailwind CSS",
    ],
    features: [
      "End-to-end business management mobile application",
      "Student and staff management with role-based access control",
      "Real-time attendance tracking",
      "Fee and subscription management",
      "Digital ID card generation with QR codes",
      "In-app QR code scanning for secure verification",
      "Geo-location tracking using location APIs",
      "Real-time communication powered by Socket.IO",
      "Business analytics and reporting dashboards",
      "High-performance app optimized for scalability",
    ],
    images: [
      "assets/img/projects/bizflowsync/app/1.png",
      "assets/img/projects/bizflowsync/app/2.png",
      "assets/img/projects/bizflowsync/app/3.png",
      "assets/img/projects/bizflowsync/app/4.png",
      "assets/img/projects/bizflowsync/app/5.png",
      "assets/img/projects/bizflowsync/app/6.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Bizflowsync</strong> is a scalable business management mobile
          application designed to streamline daily operations for educational
          institutions and service-based organizations.
        </p>

        <p>
          The app provides comprehensive tools for managing students, staff,
          attendance, fees, subscriptions, and operational workflows through a
          centralized mobile interface.
        </p>

        <p>
          Real-time features such as attendance tracking, QR-based verification,
          and live communication are enabled using Socket.IO, ensuring instant
          updates and operational visibility.
        </p>

        <p>
          Built with a focus on performance and scalability, the application
          supports large datasets, high user concurrency, and secure role-based
          access control for different user types.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "GitHub Search User",
    type: "Web",
    category: "Web Application",
    status: "Live",
    role: "Frontend Developer",
    featuredImage: "assets/img/projects/github-search-user/1.png",
    created: "December 2020",
    link: "https://mygithubusers.netlify.app/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Context API",
      "React Router DOM",
      "FusionCharts",
      "Styled Components",
      "React Icons",
      "Auth0",
      "GitHub REST API",
    ],
    features: [
      "Search GitHub users by username",
      "Real-time search results with instant UI updates",
      "User authentication using Auth0",
      "Detailed GitHub user profile display",
      "Repository listing with stars and forks",
      "Data visualization using FusionCharts",
      "Responsive design across devices",
      "Clean and intuitive user interface",
    ],
    images: [
      "assets/img/projects/github-search-user/1.png",
      "assets/img/projects/github-search-user/2.png",
      "assets/img/projects/github-search-user/3.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>GitHub Search User</strong> is a React-based web application
          designed to simplify the process of discovering and exploring GitHub
          developer profiles.
        </p>

        <p>
          The application allows users to search for GitHub profiles by username
          and instantly view detailed information such as bio, location,
          repositories, followers, and following.
        </p>

        <p>
          Real-time search functionality ensures immediate feedback as users
          type, while secure authentication is handled using Auth0 to support
          login, registration, password recovery, and social sign-in.
        </p>

        <p>
          The application also visualizes repository and activity data using
          charts, providing an interactive and informative experience across
          desktop and mobile devices.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "My Hulu App",
    type: "Web",
    category: "Web Application",
    featuredImage: "assets/img/projects/hulu/1.png",
    created: "December 25, 2021",
    link: "https://myhuluapp.vercel.app",
    technologies: [
      "HTML5",
      "CSS3",
      "Javascript",
      "NextJS",
      "TailwindCSS",
      "React Flip Move",
      "Heroicons",
    ],
    images: ["assets/img/projects/hulu/1.png"],
    description: (
      <div>
        <p>
          Are you a movie enthusiast looking for a seamless way to discover and
          enjoy your favorite films, or simply seeking a quick and efficient way
          to filter through various movie categories? Look no further than "My
          Hulu App." This remarkable application has been thoughtfully crafted
          to cater to your movie-watching needs, providing a delightful
          experience through an elegant blend of Next.js, Tailwind CSS, React
          Flip Move, and Heroicons.
        </p>
        <h5>
          <strong>Key Features:</strong>
        </h5>
        <ol>
          <li>
            <strong>User-Friendly Interface:</strong> My Hulu App boasts a
            user-friendly and visually appealing interface that makes your
            movie-watching experience a breeze. The clean and modern design
            ensures effortless navigation, allowing you to focus on what matters
            most – the movies.
          </li>
          <li>
            <strong>Extensive Movie Library:</strong> Discover a vast and
            ever-expanding movie library at your fingertips. With a rich
            collection spanning multiple genres, you're sure to find something
            that suits your mood, be it action, comedy, horror, romance,
            mystery, or other categories.
          </li>
          <li>
            <strong>Category Filters:</strong> One of the standout features of
            My Hulu App is its robust category filtering system. Easily switch
            between categories like "Trending," "Top Rated," and your preferred
            genres, ensuring that you always find the perfect movie for the
            moment.
          </li>
          <li>
            <strong>Smooth Animations:</strong> The integration of React Flip
            Move adds a touch of elegance to the user experience. Smooth
            animations and transitions provide a visually appealing way to
            browse through movies, making your time on the app all the more
            enjoyable.
          </li>
          <li>
            <strong>User-Friendly Icons:</strong> Heroicons, with their simple
            and elegant design, enhance the app's visual aesthetics while
            maintaining a high degree of usability.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 5,
    name: "My Signal App",
    type: "App",
    category: "Mobile Application",
    featuredImage: "assets/img/projects/signal/1.png",
    created: "December 25, 2021",
    link: null,
    technologies: ["React Native", "Firebase", "React Native Elements"],
    images: [
      "assets/img/projects/signal/1.png",
      "assets/img/projects/signal/2.png",
      "assets/img/projects/signal/3.png",
      "assets/img/projects/signal/4.png",
      "assets/img/projects/signal/5.png",
    ],
    description: (
      <div>
        <p>
          In a world where communication is at the heart of our digital lives,
          having a secure and efficient messaging app is essential.{" "}
          <strong>My Signal App</strong> is a revolutionary chat application
          that allows users to log in or register with ease and create chat
          rooms for secure, seamless communication. Developed using React
          Native, Firebase, and React Native Elements, this app combines
          cutting-edge technology with a user-friendly interface to provide an
          exceptional messaging experience.
        </p>
        <h5>
          <strong>Key Features:</strong>
        </h5>
        <ol>
          <li>
            <strong>User Authentication:</strong> My Signal App offers a robust
            and secure authentication process. Users can create an account or
            log in using their email or phone number. Firebase Authentication
            ensures the safety of user credentials.
          </li>
          <li>
            <strong>Create Chat Rooms:</strong> With the app, users can create
            chat rooms for different purposes. Whether it's for personal
            conversations, work-related discussions, or hobby groups, you can
            easily set up and manage chat rooms.
          </li>
          <li>
            <strong>Real-time Messaging:</strong> The app leverages Firebase
            Realtime Database, which ensures that messages are delivered
            instantly to all participants in a chat room. Say goodbye to delays
            and hello to real-time conversations.
          </li>
          <li>
            <strong>React Native Elements UI:</strong> The app's user interface
            is built using React Native Elements, ensuring a visually appealing
            and responsive design.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 6,
    name: "Pronef — NFT Marketplace",
    type: "App",
    category: "Mobile Application",
    status: "Prototype",
    role: "React Native Developer",
    featuredImage: "assets/img/projects/pronef/1.png",
    created: "December 2022",
    technologies: ["React Native"],
    features: [
      "NFT marketplace UI with curated listings",
      "Detailed NFT view with bidding CTA",
      "Clean and modern mobile UI design",
      "Optimized layout for mobile devices",
      "Focused on UI/UX experimentation in React Native",
    ],
    images: [
      "assets/img/projects/pronef/1.png",
      "assets/img/projects/pronef/2.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Pronef</strong> is a React Native–based NFT marketplace
          prototype created to explore and design visually appealing mobile user
          interfaces.
        </p>
        <p>
          The app showcases curated NFT listings and allows users to view
          detailed NFT information with a simplified bidding interaction.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    name: "House Plant Hub — Plant Selling App",
    type: "App",
    category: "Mobile Application",
    status: "UI Concept",
    role: "React Native Developer",
    featuredImage: "assets/img/projects/house-plant-hub/1.png",
    created: "March 2023",
    technologies: ["React Native", "Tailwind CSS", "React Navigation"],
    features: [
      "E-commerce style mobile UI for plant selling",
      "Multiple app screens including auth and onboarding",
      "Product listing and detail UI",
      "Wishlist and order screens",
      "Smooth navigation using React Navigation",
      "Mobile-first responsive design",
    ],
    images: [
      "assets/img/projects/house-plant-hub/1.png",
      "assets/img/projects/house-plant-hub/2.png",
      "assets/img/projects/house-plant-hub/3.png",
      "assets/img/projects/house-plant-hub/4.png",
      "assets/img/projects/house-plant-hub/5.png",
      "assets/img/projects/house-plant-hub/6.png",
      "assets/img/projects/house-plant-hub/7.png",
      "assets/img/projects/house-plant-hub/8.png",
      "assets/img/projects/house-plant-hub/9.png",
      "assets/img/projects/house-plant-hub/10.png",
      "assets/img/projects/house-plant-hub/11.png",
      "assets/img/projects/house-plant-hub/12.png",
      "assets/img/projects/house-plant-hub/13.png",
      "assets/img/projects/house-plant-hub/14.png",
      "assets/img/projects/house-plant-hub/15.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>House Plant Hub</strong> is a mobile UI-focused plant selling
          application designed to practice building visually rich and structured
          e-commerce app screens.
        </p>
        <p>
          The project includes onboarding, authentication, product browsing,
          wishlist, and order-related screens with a strong focus on layout,
          navigation, and design consistency.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    name: "Gayatri Inter College",
    type: "Web",
    category: "Web Application",
    status: "Live",
    role: "Frontend Developer",
    featuredImage: "assets/img/projects/gayatri-inter-collage/1.png",
    created: "December 2022",
    link: "https://gicdaulatpur.tech",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "React Flip Move",
      "Heroicons",
    ],
    features: [
      "Informational school website",
      "Responsive design for all devices",
      "Clean UI for academic information",
      "Optimized performance using Next.js",
      "Smooth UI animations",
    ],
    images: [
      "assets/img/projects/gayatri-inter-collage/1.png",
      "assets/img/projects/gayatri-inter-collage/2.png",
      "assets/img/projects/gayatri-inter-collage/3.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Gayatri Inter College</strong> is an informational website
          built to present academic, faculty, and institutional details in a
          clear and accessible manner.
        </p>
        <p>
          The website focuses on performance, responsiveness, and structured
          content delivery for students and parents.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    name: "VK Construction & Builders",
    type: "Web",
    category: "Web Application",
    status: "Live",
    role: "Frontend Developer",
    featuredImage: "assets/img/projects/vkconstructionandbuilders/1.png",
    created: "April 2024",
    link: "https://vkconstructionandbuilders.in/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Material UI",
    ],
    features: [
      "Corporate website for construction company",
      "Project and service showcase",
      "Responsive layout",
      "Modern UI components",
      "Optimized for business presentation",
    ],
    images: [
      "assets/img/projects/vkconstructionandbuilders/1.png",
      "assets/img/projects/vkconstructionandbuilders/2.png",
      "assets/img/projects/vkconstructionandbuilders/3.png",
      "assets/img/projects/vkconstructionandbuilders/4.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>VK Construction & Builders</strong> is a business website
          built to showcase the company’s expertise in civil and structural
          engineering projects.
        </p>
        <p>
          The platform highlights services, experience, and completed projects
          through a clean and professional web interface.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    name: "Ecoism Technology Pvt. Ltd.",
    type: "Web",
    category: "Web Application",
    status: "Live",
    role: "Frontend Developer",
    featuredImage: "assets/img/projects/ecoism/1.png",
    created: "February 2023",
    link: "https://ecoism.co.in/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Material UI",
    ],
    features: [
      "Corporate website for technology solutions company",
      "Service and solution showcase",
      "Responsive and user-friendly layout",
      "Optimized for performance and accessibility",
      "Professional corporate UI",
    ],
    images: [
      "assets/img/projects/ecoism/1.png",
      "assets/img/projects/ecoism/2.png",
      "assets/img/projects/ecoism/3.png",
      "assets/img/projects/ecoism/4.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Ecoism Technology Pvt. Ltd.</strong> is a corporate website
          developed to present the company’s expertise in security, automation,
          and eco-friendly technology solutions.
        </p>
        <p>
          The website focuses on clearly communicating services, experience, and
          capabilities through a clean and structured interface.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    name: "Preplus – Official Website",
    type: "Web",
    category: "Web Application",
    featuredImage: "assets/img/projects/preplus/website/1.png",
    created: "July 2024",
    link: "https://preplus.in/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "React.js",
      "Axios",
    ],
    images: [
      "assets/img/projects/preplus/website/1.png",
      "assets/img/projects/preplus/website/2.png",
      "assets/img/projects/preplus/website/3.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Preplus</strong> is a youth-led digital platform focused on
          empowering young individuals through awareness, community-driven
          initiatives, and meaningful engagement.
        </p>

        <p>
          The platform was designed to provide a clean, responsive, and
          accessible user experience while effectively communicating the
          organization’s mission and activities.
        </p>

        <p>
          Built with modern web technologies, Preplus ensures performance,
          scalability, and ease of content management, enabling the team to
          continuously grow their impact and outreach.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    name: "Digital Detoxification – Reclaim Your Mind, Reconnect with Life",
    type: "Web",
    category: "Web Application",
    status: "Live",
    role: "Full-Stack Developer",
    featuredImage: "assets/img/projects/digitaldetoxification/1.png",
    created: "October 2025 – December 2025",
    link: "https://digitaldetoxification.in/",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "TSOA",
      "MongoDB",
      "Axios",
      "OpenAI API",
      "REST APIs",
    ],
    features: [
      "Psychologist-driven mental wellness web platform",
      "Structured psychological assessments",
      "License key–based secure access control",
      "AI-generated psychological evaluation reports",
      "Admin panel for assessment and report management",
      "Review and approval workflow for AI-generated reports",
      "Role-based access control for admins and users",
      "Secure data storage and retrieval",
      "Responsive and accessible user interface",
      "Scalable full-stack architecture",
    ],
    images: [
      "assets/img/projects/digitaldetoxification/1.png",
      "assets/img/projects/digitaldetoxification/2.png",
      "assets/img/projects/digitaldetoxification/3.png",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Digital Detoxification</strong> is a psychologist-driven
          mental wellness web platform designed to help individuals reduce
          digital dependency and improve overall mental well-being through
          structured psychological assessments.
        </p>

        <p>
          The system enables users to securely participate in assessments using
          license key–based access, ensuring controlled and authorized usage.
          Assessment responses are analyzed using AI to generate dynamic,
          interpretable psychological reports.
        </p>

        <p>
          An integrated admin panel allows psychologists and administrators to
          manage assessments, review AI-generated reports, and publish finalized
          results through a structured approval workflow.
        </p>

        <p>
          Built as a full-stack web application, the platform emphasizes
          security, scalability, and user experience, supporting role-based
          permissions, secure data handling, and seamless communication between
          the front-end and back-end systems.
        </p>
      </div>
    ),
  },
  {
    id: 13,
    name: "Softsprit – A Place for Passionate Readers",
    type: "Web",
    category: "Web Application",
    status: "Live",
    featuredImage: "assets/img/projects/softsprit/1.png",
    created: "July 2024 – September 2024",
    link: "https://softsprit.com/",
    technologies: [
      "WordPress",
      "Newspaper Theme",
      "Elementor",
      "Contact Form 7",
      "Yoast SEO",
      "WPForms",
      "Custom CSS",
      "PHP",
      "MySQL",
    ],
    features: [
      "Content-driven blogging and publishing platform",
      "Responsive and mobile-friendly news layout",
      "Category-based article organization",
      "SEO-optimized structure for better search visibility",
      "Custom landing pages built with Elementor",
      "User-friendly content management for authors",
      "Contact and inquiry management via forms",
      "Performance-optimized pages for fast loading",
      "Cross-browser compatibility",
    ],
    images: ["assets/img/projects/softsprit/1.png"],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Softsprit</strong> is a content-focused blogging platform
          created for passionate readers who enjoy well-written, insightful, and
          engaging articles across a wide range of topics.
        </p>

        <p>
          Built on WordPress using the Newspaper theme, the platform delivers a
          clean and modern reading experience with strong emphasis on
          readability, performance, and responsive design.
        </p>

        <p>
          Elementor was used to design custom pages and layouts, while plugins
          like Contact Form 7 and WPForms enable smooth user interaction and
          communication. SEO best practices were implemented using Yoast SEO to
          improve search engine visibility and organic reach.
        </p>

        <p>
          The platform allows efficient content publishing, categorization, and
          management, empowering authors to maintain consistent quality while
          engaging a growing audience.
        </p>
      </div>
    ),
  },
  {
    id: 14,
    name: "Bizflowsync – Landing Page",
    type: "Web",
    category: "Web Application",
    status: "Live",
    featuredImage: "assets/img/projects/bizflowsync/website/1.png",
    created: "July 2024 – September 2024",
    link: "https://bizflowsync.com/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "UI/UX Design",
    ],
    features: [
      "Modern and professional SaaS landing page",
      "Clean, conversion-focused UI layout",
      "Fully responsive design across all devices",
      "Clear presentation of product features and benefits",
      "Call-to-action sections for user engagement",
      "Optimized layout for fast loading performance",
      "Cross-browser compatibility",
      "Scalable UI structure for future expansion",
    ],
    images: ["assets/img/projects/bizflowsync/website/1.png"],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Bizflowsync</strong> is a modern SaaS landing page designed to
          showcase a comprehensive business management platform in a clear,
          engaging, and visually appealing manner.
        </p>

        <p>
          The landing page focuses on delivering a strong first impression
          through a clean layout, structured content sections, and intuitive
          visual hierarchy that effectively communicates the product’s value
          proposition.
        </p>

        <p>
          Built using modern front-end technologies, the UI emphasizes
          responsiveness, performance, and accessibility, ensuring a seamless
          experience across desktops, tablets, and mobile devices.
        </p>

        <p>
          The design is optimized for scalability, allowing future integration
          of additional pages, features, or application modules without major UI
          refactoring.
        </p>
      </div>
    ),
  },
  {
    id: 15,
    name: "Preplus – Event Management App",
    type: "App",
    category: "Mobile Application",
    status: "Live",
    role: "Full Stack Engineer & Mobile App Developer",
    featuredImage: "assets/img/projects/preplus/app/1.webp",
    created: "January 2025 – July 2025",

    /* Links */
    link:
      "https://play.google.com/store/apps/details?id=com.onlyrahulrai.preplus",
    website: "https://preplus.in/",

    technologies: [
      "React Native",
      "Expo",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Socket.IO",
      "Google Maps SDK",
      "QR Code Scanner",
    ],

    features: [
      "Large-scale event and program management system",
      "Hierarchical role-based access control (RBAC)",
      "QR code–based ticket generation and validation",
      "Digital ID card and certificate generation",
      "Location detection and verification",
      "Wallet and revenue-sharing system",
      "Real-time dashboards and live updates",
      "Secure enrollment and authentication workflows",
    ],

    images: [
      "assets/img/projects/preplus/app/1.webp",
      "assets/img/projects/preplus/app/2.webp",
      "assets/img/projects/preplus/app/3.webp",
      "assets/img/projects/preplus/app/4.webp",
    ],

    description: (
      <div className="space-y-3">
        <p>
          <strong>Preplus App</strong> is a mobile-first event management
          application built to support large-scale educational and motivational
          programs across colleges and schools.
        </p>

        <p>
          The application enables secure user enrollment, QR-based ticket
          verification, hierarchical role-based operations, and real-time event
          execution backed by a scalable backend architecture.
        </p>

        <p>
          Designed for performance and reliability, the system supports
          multi-role coordination, live dashboards, location verification, and
          automated digital assets such as ID cards and certificates.
        </p>
      </div>
    ),
  },
  {
    id: 16,
    name: "Everest Fleet — CRM (Telecaller Ecosystem)",
    type: "Web",
    category: "Web Application",
    status: "Live",
    role: "Full-Stack Developer",
    featuredImage: "assets/img/projects/everestfleet/1.png",
    created: "March 2024 – September 2025",
    link: "https://crm.everestfleet.com/",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Ant Design",
      "Python",
      "Django",
      "MySQL",
      "Celery",
      "Redis",
      "Socket.IO",
      "Pandas",
      "REST APIs",
      "Ameyo IVR Integration",
    ],
    features: [
      "Comprehensive CRM for fleet and telecaller operations",
      "Fleet operations management including vehicle assignments and maintenance",
      "Driver performance and operational tracking",
      "Real-time monitoring using Socket.IO",
      "Telecaller ecosystem with Ameyo IVR integration",
      "Inbound and outbound call handling with lead management",
      "Automated background processing using Celery and Redis",
      "Scheduled jobs and workflow automation",
      "Data analytics and reporting using Pandas",
      "Role-based access control for operational teams",
      "Scalable and high-performance system architecture",
    ],
    images: ["assets/img/projects/everestfleet/1.png"],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Everest Fleet CRM</strong> is a large-scale fleet and
          telecaller management system designed to streamline operations,
          optimize resource allocation, and improve overall operational
          efficiency.
        </p>

        <p>
          The platform enables real-time monitoring of fleet activities, driver
          performance, and call center operations through live updates powered
          by Socket.IO and integrated telephony systems.
        </p>

        <p>
          A dedicated telecaller ecosystem was implemented using Ameyo IVR,
          supporting inbound and outbound calling, lead handling, and customer
          interaction workflows within the CRM.
        </p>

        <p>
          Background processing and automation were handled using Celery and
          Redis, enabling asynchronous task execution, scheduled jobs, and
          large-scale workflow automation.
        </p>

        <p>
          The system includes advanced data analytics and reporting capabilities
          built with Pandas, allowing stakeholders to generate actionable
          insights and operational reports from large datasets.
        </p>

        <p>
          Built with a scalable backend using Django and MySQL, and a modern,
          responsive frontend using React, Redux, Tailwind CSS, and Ant Design,
          the platform is designed to support high concurrency and
          enterprise-level usage.
        </p>
      </div>
    ),
  },
  {
    id: 17,
    name: "Amojo Buyer Hub — E-Commerce Mobile App",
    type: "App",
    category: "Mobile Application",
    status: "Live",
    role: "Full-Stack Developer",
    featuredImage: "assets/img/projects/amojo/app/1.jpeg",
    created: "May 2021 – March 2024",
    link: "https://appadvice.com/app/amojo-buyers-hub/1609425160.amp",
    website: "https://www.amojo.com/",
    technologies: [
      "React Native",
      "Redux",
      "React.js",
      "Tailwind CSS",
      "Ant Design",
      "Python",
      "Django",
      "MySQL",
      "Socket.IO",
      "Axios",
      "Celery",
      "Redis",
      "Pandas",
      "Razorpay",
    ],
    features: [
      "Full-fledged e-commerce mobile application for buyers",
      "Seller onboarding and verification with admin approval workflows",
      "Seller control panel for product, pricing, and discount management",
      "Custom seller storefronts with theme customization support",
      "Complete order lifecycle management",
      "Multi-format invoice generation (A3, A4, A5)",
      "Buyer mobile app for browsing and purchasing products",
      "Seller–buyer mapping using connection codes",
      "Secure online payments using Razorpay",
      "Real-time updates and notifications using Socket.IO",
      "Scalable backend APIs optimized for high concurrency",
      "Background processing and automation using Celery and Redis",
      "Data analytics and reporting using Pandas",
    ],
    images: [
      "assets/img/projects/amojo/app/1.jpeg",
      "assets/img/projects/amojo/app/2.jpeg",
      "assets/img/projects/amojo/app/3.jpeg",
      "assets/img/projects/amojo/app/4.jpeg",
      "assets/img/projects/amojo/app/5.jpeg",
      "assets/img/projects/amojo/app/6.jpeg",
    ],
    description: (
      <div className="space-y-3">
        <p>
          <strong>Amojo Buyer Hub</strong> is a full-scale e-commerce mobile
          application designed to connect buyers with verified sellers through a
          controlled and customizable digital marketplace.
        </p>

        <p>
          The platform supports a complete seller ecosystem, including seller
          onboarding, verification, storefront management, and product
          publishing through dedicated web-based seller and admin panels.
        </p>

        <p>
          Buyers interact primarily through the mobile application, where they
          can browse products, place orders, complete secure payments, and track
          order statuses in real time.
        </p>

        <p>
          Advanced features such as seller–buyer mapping, custom storefront
          themes, order lifecycle handling, and invoice generation enable a
          highly flexible commerce experience for both sellers and buyers.
        </p>

        <p>
          The system is built with a scalable, high-performance backend using
          Django and MySQL, supported by real-time communication, background
          task processing, and analytics pipelines to handle large datasets and
          high user concurrency.
        </p>
      </div>
    ),
  },
];

function Slider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, key) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={key}
      >
        <img
          src={item}
          alt={item}
          className="object-fit-contain"
          width="100%"
          style={{ maxHeight: "356px" }}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
        className="position-static mt-5"
        style={{
          background: "rgba(57, 57, 57, 0.5)",
          padding: "8px 12px",
          borderRadius: "24px",
        }}
      />
    </div>
  );
}

const Portfolio = () => {
  const [projects, setProjects] = useState(allProjects);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectDetails = useMemo(
    () => projects.find((project) => project.id === selectedProject),
    [projects, selectedProject],
  );

  useEffect(() => {
    const projects = allProjects.filter((project) =>
      searchParams.get("type")
        ? project.type === searchParams.get("type")
        : true,
    );

    setProjects(projects);
  }, [searchParams]);

  const onChangeProjectType = (type = "") => {
    if (type.trim().length > 0) {
      searchParams.set("type", type);
    } else {
      searchParams.delete("type");
    }

    setSearchParams(searchParams);
  };

  const onToggleProjectDetail = (id) => {
    setSelectedProject(id);
    setIsProjectDetailOpen((prevState) => !prevState);
  };

  return (
    <main
      id="main"
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50"
    >
      {/* ======= Portfolio Section =======  */}
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Welcome to my portfolio, a curated collection of my creative
              endeavors. <br />I invite you to explore my work, which spans
              across various domains, from graphic design to web development.
              <br /> Each piece reflects my passion for innovation and
              dedication to delivering exceptional results.
              <br /> Thank you for visiting and enjoy the journey.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  onClick={() => onChangeProjectType()}
                  className={`${searchParams.get("type") === null ? "filter-active" : ""} `}
                >
                  All
                </li>
                <li
                  onClick={() => onChangeProjectType("App")}
                  className={`${searchParams.get("type") === "App" ? "filter-active" : ""} `}
                >
                  App
                </li>
                <li
                  onClick={() => onChangeProjectType("Web")}
                  className={`${searchParams.get("type") === "Web" ? "filter-active" : ""} `}
                >
                  Web
                </li>
              </ul>
            </div>
          </div>

          <div
            className="cards portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {projects.map((project, key) => (
              <div
                className="portfolio-item filter-app shadow rounded"
                key={key}
              >
                <div className="portfolio-wrap d-flex justify-content-center">
                  <img
                    src={project.featuredImage}
                    className="img-fluid"
                    alt=""
                    style={{ maxHeight: "256px" }}
                  />
                  <div className="portfolio-info">
                    <h4>{project.name}</h4>
                    <p>{project.type}</p>
                    <div className="portfolio-links text-white">
                      <i
                        className="bi bi-eye"
                        style={{ cursor: "pointer" }}
                        onClick={() => onToggleProjectDetail(project.id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isProjectDetailOpen ? (
            // <Modal
            //   isOpen={isProjectDetailOpen}
            //   toggle={onToggleProjectDetail}
            //   size="xl"
            //   centered
            //   fade
            //   backdrop="static"
            //   keyboard={false}
            // >
            //   <ModalBody>
            //     <section id="portfolio-details" className="portfolio-details">
            //       <div className="container">
            //         <div className="row gy-4 justify-content-center">
            //           <div className="col-lg-12 d-flex justify-content-end">
            //             <i
            //               className="bi bi-x"
            //               style={{ cursor: "pointer", fontSize: "28px" }}
            //               onClick={onToggleProjectDetail}
            //             ></i>
            //           </div>
            //           <div className="col-lg-12">
            //             <Slider items={projectDetails.images} />
            //           </div>

            //           <div className="col-lg-9">
            //             <div className="portfolio-description">
            //               <h2>{projectDetails.name}</h2>

            //               {projectDetails.description}

            //               <div>
            //                 {projectDetails.technologies.length > 0 ? (
            //                   <div className="my-2">
            //                     <strong>Technology Used - </strong>

            //                     {projectDetails.technologies.map(
            //                       (tech, key) => (
            //                         <span key={key}>
            //                           {tech}
            //                           {projectDetails.technologies.length !==
            //                           key + 1
            //                             ? ","
            //                             : null}{" "}
            //                         </span>
            //                       ),
            //                     )}
            //                   </div>
            //                 ) : null}

            //                 {projectDetails.link ? (
            //                   <div>
            //                     <strong>View Online - </strong>
            //                     <Link to={projectDetails.link} target="_blank">
            //                       {projectDetails.link}
            //                     </Link>
            //                   </div>
            //                 ) : null}

            //                 {projectDetails.created ? (
            //                   <div>
            //                     <strong>Date Created - </strong>
            //                     <span>{projectDetails.created}</span>
            //                   </div>
            //                 ) : null}
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     </section>
            //   </ModalBody>
            // </Modal>
            <Modal
              isOpen={isProjectDetailOpen}
              toggle={onToggleProjectDetail}
              size="xl"
              centered
              fade
              backdrop="static"
              keyboard={false}
            >
              <ModalBody className="p-4">
                <section id="portfolio-details">
                  <div className="container">
                    <div className="row gy-4 justify-content-center">
                      {/* Close button */}
                      <div className="col-lg-12 d-flex justify-content-end">
                        <i
                          className="bi bi-x"
                          style={{ cursor: "pointer", fontSize: "28px" }}
                          onClick={onToggleProjectDetail}
                        />
                      </div>

                      {/* Image slider */}
                      {projectDetails?.images?.length > 0 && (
                        <div className="col-lg-12">
                          <Slider items={projectDetails.images} />
                        </div>
                      )}

                      {/* Content */}
                      <div className="col-lg-9">
                        <div className="portfolio-description">
                          {/* Title */}
                          <h2 className="mb-2">{projectDetails.name}</h2>

                          {/* Meta info */}
                          <div className="mb-3 text-muted small">
                            {projectDetails.category && (
                              <span className="me-3">
                                <strong>Type:</strong> {projectDetails.category}
                              </span>
                            )}
                            {projectDetails.status && (
                              <span className="me-3">
                                <strong>Status:</strong> {projectDetails.status}
                              </span>
                            )}
                            {projectDetails.role && (
                              <span>
                                <strong>Role:</strong> {projectDetails.role}
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          {projectDetails.description}

                          {/* Features */}
                          {projectDetails.features?.length > 0 && (
                            <div className="mt-4">
                              <h5>Key Features</h5>
                              <ul className="ps-3">
                                {projectDetails.features.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies */}
                          {projectDetails.technologies?.length > 0 && (
                            <div className="mt-3">
                              <strong>Technologies:</strong>{" "}
                              {projectDetails.technologies.map((tech, idx) => (
                                <span key={idx}>
                                  {tech}
                                  {idx !==
                                    projectDetails.technologies.length - 1 &&
                                    ", "}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Links */}
                          <div className="mt-3">
                            {projectDetails.link && (
                              <div>
                                <strong>Website:</strong>{" "}
                                <a
                                  href={projectDetails.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {projectDetails.link}
                                </a>
                              </div>
                            )}

                            {projectDetails.appLink && (
                              <div>
                                <strong>App:</strong>{" "}
                                <a
                                  href={projectDetails.appLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View on Store
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Date */}
                          {projectDetails.created && (
                            <div className="mt-2">
                              <strong>Duration:</strong>{" "}
                              <span>{projectDetails.created}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </ModalBody>
            </Modal>
          ) : null}
        </div>
      </section>
      {/* End Portfolio Section  */}
    </main>
  );
};

export default Portfolio;
