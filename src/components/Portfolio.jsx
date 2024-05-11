import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Modal, ModalBody } from 'reactstrap';

const allProjects = [
    {
        id: 1,
        name: "Toksi - A Social Media App",
        type: "Web",
        featuredImage: "assets/img/projects/toksi/1.png",
        created: "July 13, 2023",
        link: "https://social-media-mern-stack-frontend.vercel.app",
        technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "ReactJS", "MongoDB", "NodeJS", "ExpressJs", "Socket.IO", "WebRTC"],
        images: ["assets/img/projects/toksi/1.png", "assets/img/projects/toksi/2.png", "assets/img/projects/toksi/3.png", "assets/img/projects/toksi/4.png", "assets/img/projects/toksi/5.png", "assets/img/projects/toksi/6.png", "assets/img/projects/toksi/7.png", "assets/img/projects/toksi/8.png", "assets/img/projects/toksi/9.png", "assets/img/projects/toksi/10.png", "assets/img/projects/toksi/11.png", "assets/img/projects/toksi/12.png", "assets/img/projects/toksi/13.png", "assets/img/projects/toksi/14.png", "assets/img/projects/toksi/15.png"],
        description: <div>
            <p>Toksi is a full-stack social media application that is developed using MERN Stack and SocketIO. Its feature comes from some popular platforms like Medium and Instagram.</p>
            <h5><strong>Features of Toksi:</strong></h5>
            <ol>
                <li><strong>User Registration and Authentication:</strong> Allow users to create accounts and authenticate themselves using email, username, or social media logins.Implement password hashing and encryption to ensure secure authentication.</li>
                <li><strong>User Profiles:</strong> Enable users to create and customize their profiles with profile pictures, bios, and other relevant information.Allow users to update their profile information and privacy settings.</li>
                <li><strong>Posts and Sharing:</strong> Allow users to create and share posts, including text, images, videos, and links.Implement features like tagging other users, adding hashtags, and mentioning locations to enhance content discovery and engagement.</li>
                <li><strong>Comments and Likes:</strong> Enable users to comment on posts and engage in discussions.Implement a liking or upvoting system to allow users to express their appreciation for posts.</li>
                <li><strong>Messaging and Notifications:</strong> Provide private messaging functionality that allows users to communicate with each other directly.Implement real- time notifications for activities such as likes, comments, and new messages.</li>
                <li><strong>Friends and Followers:</strong> Allow users to follow other users and establish a network of connections.Implement a friend request system to manage connections and privacy settings.</li>
                <li><strong>Video / Audio Streaming:</strong> We successfully integrated audio and video streaming into our application.Users could now see and hear each other in real time.</li>
                <li><strong>Mobile Responsiveness:</strong> Ensure that your social media application is responsive and optimized for mobile devices, providing a seamless user experience across different screen sizes.</li>
            </ol>
        </div>
    },
    {
        id: 2,
        name: "My Insta App",
        type: "Web",
        featuredImage: "assets/img/projects/instagram/1.png",
        images: ["assets/img/projects/instagram/1.png", "assets/img/projects/instagram/2.png", "assets/img/projects/instagram/3.png"],
        created: "Sep 17, 2022",
        link: "https://myinstaweb.vercel.app",
        technologies: ["NextJS", "Firebase", "TailwindCSS", "FakerJS", "Zustand", "Next-Auth"],
        description: <div>
            <p>This is a full-stack web application that is developed using (Nextjs, Firebase, TailwindCSS, Fakerjs, etc).</p>
            <h5><strong>Features of the App:</strong></h5>
            <ol>
                <li><strong>User Authentication:</strong> Using Google Auth Provider.</li>
                <li><strong>Blog Post Creation and Editing:</strong> Provide a user-friendly interface for creating and editing blog posts.</li>
                <li><strong>Blog Post Management:</strong> Enable users to view and manage their blog posts.</li>
                <li><strong>Liking System:</strong> Implement a liking feature that allows users to like blog posts.</li>
                <li><strong>Commenting System:</strong> Implement a commenting feature that allows users to leave comments on blog posts.</li>
                <li><strong>Social Sharing:</strong> Integrate social media sharing buttons to allow readers to share blog posts on platforms like Facebook, Twitter, or LinkedIn.</li>
            </ol>
        </div>
    },
    {
        id: 3,
        name: "My Airbnb App",
        type: "Web",
        featuredImage: "assets/img/projects/airbnb/1.png",
        created: "Aug 19, 2021",
        link: "https://myairbnbui.vercel.app",
        technologies: ["HTML5", "CSS3", "Javascript", "NextJS", "TailwindCSS", "JSON", "Heroicons"],
        images: ["assets/img/projects/airbnb/1.png", "assets/img/projects/airbnb/2.png", "assets/img/projects/airbnb/3.png"],
        description: <div>
            <p>As a front-end developer passionate about user interface design and web development, I undertook the project of creating a UI clone of Airbnb, a leading online marketplace for lodging and travel experiences. This project allowed me to demonstrate my proficiency in modern web technologies, including HTML, CSS, and JavaScript, and showcase my ability to recreate a complex, real-world web application.</p>
            <h5><strong>Key Accomplishments:</strong></h5>
            <ol>
                <li><strong>Responsive Design:</strong> I meticulously designed and implemented a responsive user interface that ensures a seamless user experience on various devices, from desktop computers to smartphones and tablets.</li>
                <li><strong>Dynamic Content:</strong> Leveraging JavaScript, I implemented dynamic content loading to ensure that property listings are fetched from a server and displayed in real time, just like on the actual Airbnb website.</li>
                <li><strong>Optimized Performance:</strong> I optimized the project for performance by employing efficient coding practices and lazy loading techniques. This results in faster load times and a smoother user experience.</li>
                <li><strong>Accessibility:</strong> Accessibility was a top priority. I implemented accessibility features, such as proper semantic HTML elements and ARIA attributes, to ensure the UI is usable and navigable by individuals with disabilities.
                </li>
            </ol>
        </div>
    },
    {
        id: 4,
        name: "Google Drive App",
        type: "Web",
        featuredImage: "assets/img/projects/drive/1.png",
        created: "May 23, 2021",
        link: "https://drive-app-8304d.web.app",
        technologies: ["HTML5", "CSS3", "Javascript", "React.js", "Context API", "React Router Dom", "Firebase", "Material UI", "Material Icons"],
        images: ["assets/img/projects/drive/1.png", "assets/img/projects/drive/2.png", "assets/img/projects/drive/3.png"],
        description: <div>
            <p>As a front-end developer passionate about user interface design and web development, I undertook the project of creating a UI clone of Google Drive is one of the most popular cloud storage platforms, known for its user-friendly interface and seamless integration with other Google services. This project allowed me to demonstrate my proficiency in modern web technologies, including HTML, CSS, and JavaScript, and showcase my ability to recreate a complex, real-world web application.</p>
            <h5><strong>Key Accomplishments:</strong></h5>
            <ol>
                <li><strong>Authentication:</strong> Allow users to authenticate themselves using email or social media logins.Implement password hashing and encryption to ensure secure authentication.</li>
                <li><strong>User Interface (UI):</strong> Design an intuitive and user-friendly interface that allows users to easily upload, organize, and access their files. Take inspiration from Google Drive's clean and minimalist design, making it easy for users to navigate the platform.</li>
                <li><strong>File Uploading:</strong> This app is allowing us to upload files to the server and Its return a shareable url that user can use to access their files.</li>
                <li><strong>Optimized Performance:</strong> I optimized the project for performance by employing efficient coding practices and lazy loading techniques. This results in faster load times and a smoother user experience.</li>
                <li><strong>Accessibility:</strong> Accessibility was a top priority. I implemented accessibility features, such as proper semantic HTML elements and ARIA attributes, to ensure the UI is usable and navigable by individuals with disabilities.
                </li>
            </ol>
        </div>
    },
    {
        id: 5,
        name: "Github Search User",
        type: "Web",
        featuredImage: "assets/img/projects/github-search-user/1.png",
        created: "Dec 24, 2020",
        link: "https://mygithubusers.netlify.app/",
        technologies: ["HTML5", "CSS3", "Javascript", "React.js", "Context API", "React Router Dom", " Fusion charts", "Styled Components", "React Icons"],
        images: ["assets/img/projects/github-search-user/1.png", "assets/img/projects/github-search-user/2.png", "assets/img/projects/github-search-user/3.png"],
        description: <div>
            <p>In the world of software development and open-source collaboration, GitHub stands as a hub for millions of developers and their projects. It's a place where ideas turn into code, and collaborations shape the future of technology. To simplify the process of discovering and connecting with fellow developers on this platform, the GitHub Search App has been developed using ReactJS. This app allows users to effortlessly search for GitHub user profiles by entering their usernames, fostering a sense of community and networking within the coding world.</p>
            <h5><strong>Key Accomplishments:</strong></h5>
            <ol>
                <li><strong>Authentication:</strong> I've used a third party service (Auth0) for the user authentication which allow users for the login,register, forgot password, social signin etc.</li>
                <li><strong>User Profile Lookup:</strong> The GitHub Search App offers a simple and intuitive interface where users can enter the username of the GitHub developer they're looking for. With just a few keystrokes, they can access comprehensive user profiles.</li>
                <li><strong>Real-Time Search:</strong> The app employs the power of ReactJS to provide real-time search results. As users type, the app dynamically updates the displayed profiles, streamlining the search process and saving time.</li>
                <li><strong>User Information:</strong> Once a user is found, the app displays essential information, including the user's avatar, bio, location, number of repositories, followers, and following.</li>
                <li><strong>Repository Listing:</strong> Users can also view a list of repositories owned by the GitHub user, along with information about each repository, such as its name, description, and the number of stars and forks.
                </li>
                <li>
                    <strong>Responsive Design:</strong> The app is designed to be responsive, ensuring a seamless experience on various devices, including desktops, tablets, and mobile phones.
                </li>
            </ol>
        </div>
    },
    {
        id: 6,
        name: "My Google App",
        type: "Web",
        featuredImage: "assets/img/projects/google/1.png",
        created: "January 21, 2021",
        link: "https://google-like-webapp-nextjs.vercel.app",
        technologies: ["HTML5", "CSS3", "Javascript", "Next.js", "TailwindCSS", "Heroicons"],
        images: ["assets/img/projects/google/1.png", "assets/img/projects/google/2.png"],
        description: <div>
            <p>
                In the age of information, quick and efficient search tools are essential. Imagine having an app that lets you search for anything and everything seamlessly. Introducing the "Google-Like App," a powerful search application developed using cutting-edge technologies like Next.js, Heroicons, and Tailwind CSS. Whether you're searching for information, images, or specific content, this app has got you covered.
            </p>
            <h5><strong>Key Accomplishments:</strong></h5>
            <ol>
                <li>
                    <strong>Lightning-Fast Search:</strong> I've developed this app using next.js that's allow server side rendering it's load almost instantly, thanks to the power of Next.js.
                </li>
                <li><strong>Web and Image Search:</strong> To find web pages and images with ease, making this app versatile for a variety of searches.I've used google API to fetch the data from the google seaver. </li>
                <li>
                    <strong>Responsive Design:</strong> I've used tailwindCSS to make this app fully responsive, No matter the device you're using, the app's design will look great and function flawlessly.
                </li>
            </ol>
        </div>
    },
    {
        id: 7,
        name: "My Slack App",
        type: "Web",
        featuredImage: "assets/img/projects/slack/1.png",
        created: "April 15, 2021",
        link: "https://slack-app-f8e80.web.app/",
        technologies: ["HTML5", "CSS3", "Javascript", "ReactJS", "Firebase", "Redux", "Styled Components", "React Router Dom", "MaterialUI", "MaterialUi Icons"],
        images: ["assets/img/projects/slack/1.png", "assets/img/projects/slack/2.png", "assets/img/projects/slack/3.png"],
        description: <div>
            <p>
                In today's fast-paced world, effective communication is crucial for both personal and professional success. "My Slack App" is a cutting-edge application that simplifies the authentication process and empowers users to create channels for seamless discussions.It is built using ReactJs, MaterialUI, Firebase, and Redux, this app offers a seamless and efficient way to connect and collaborate with your team or community.
            </p>
            <h5><strong>Key Accomplishments:</strong></h5>
            <ol>
                <li>
                    <strong>Streamlined Authentication:</strong> One of the standout features of "My Slack App" is its user-friendly authentication process. We've integrated the Google Sign-In button to make the sign-up and login process as simple as a click. Users can authenticate using their Google accounts, eliminating the need to create yet another username and password, which can be a hassle. This means you can get started with your conversations quickly and effortlessly.
                </li>
                <li>
                    <strong>User-Centric Channel Creation:</strong> Creating channels for discussions has never been easier. With "My Slack App," users can take control of their communication. You can create channels for specific topics, projects, or teams, giving you the freedom to organize your conversations just the way you like. Whether you're a project manager, a community organizer, or just want to chat with friends, this app provides the tools to create channels and invite participants with ease.
                </li>
                <li>
                    <strong>Responsive Design:</strong> I've used MaterialUI Components to make this app fully responsive, No matter the device you're using, the app's design will look great and function flawlessly.
                </li>
            </ol>
            <h5><strong>Tech Stack Highlights:</strong></h5>
            <ol>
                <li>
                    <strong>ReactJs: </strong><span>Our front-end is built using ReactJs, a powerful and efficient JavaScript library for building user interfaces. It ensures a responsive and interactive user experience, making navigation and communication a breeze.</span>
                </li>
                <li>
                    <strong>MaterialUI: </strong><span>"My Slack App" boasts a sleek and modern design, thanks to the MaterialUI framework. This UI toolkit brings a clean and consistent look to the app, enhancing its visual appeal.</span>
                </li>
                <li>
                    <strong>Firebase: </strong><span>We've integrated Firebase, Google's cloud-based platform, to provide real-time database and authentication services. This ensures that your conversations and data remain secure and always accessible.</span>
                </li>
                <li>
                    <strong>Redux: </strong><span>Managing state and data flow is essential in any application, and Redux helps us do just that. It ensures that user interactions are smooth and consistent throughout the app.
                    </span>
                </li>
            </ol>
        </div>
    },
    {
        id: 8,
        name: "My Gmail App",
        type: "Web",
        featuredImage: "assets/img/projects/gmail/1.png",
        created: "March 23, 2021",
        link: "https://app-8c307.web.app/",
        technologies: ["HTML5", "CSS3", "Javascript", "ReactJS", "Firebase", "Redux", "Styled Components", "React Router Dom", "MaterialUI", "MaterialUi Icons"],
        images: ["assets/img/projects/gmail/1.png", "assets/img/projects/gmail/2.png", "assets/img/projects/gmail/3.png"],
        description: <div>
            <p>
                In an age where email communication is pivotal, ensuring the ease of authentication and security of email exchanges is of utmost importance. "My Gmail App" is a cutting-edge application developed using ReactJs, MaterialUI, Firebase, and Redux, offering users a seamless and secure email communication experience.
            </p>
            <h5><strong>Key Features:</strong></h5>
            <ol>
                <li>
                    <strong>Easy Authentication:</strong> My Gmail App simplifies the sign-in process with the integration of the Google sign-in button. Users can access their email accounts with a single click, saving time and streamlining the login experience.
                </li>
                <li>
                    <strong>Secure Email Sending:</strong> Users can compose and send emails to others effortlessly. The built-in email composer allows for quick and intuitive message drafting, ensuring a smooth user experience.
                </li>
                <li>
                    <strong>Firestore Storage:</strong> Worried about email data privacy? Fear not! "My Gmail App" stores all emails in Firestore, a secure and scalable NoSQL database provided by Google. This ensures that user emails are stored safely and cannot be accessed by unauthorized parties.
                </li>
                <li>
                    <strong>ReactJs for Dynamic UI:</strong> The application's frontend is developed using ReactJs, a powerful and efficient JavaScript library. This ensures a highly responsive and dynamic user interface, enhancing user interaction and experience.
                </li>
                <li>
                    <strong>MaterialUI for Modern Design:</strong> My Gmail App boasts a sleek and modern design, thanks to MaterialUI. The Material Design components not only look great but also improve usability, making navigation and interaction a breeze.
                </li>
                <li>
                    <strong>Firebase for Backend Services:</strong> The Firebase backend handles authentication, real-time updates, and Firestore integration. Firebase is known for its reliability and real-time data synchronization, offering a robust foundation for secure email communication.
                </li>
                <li>
                    <strong>Redux for State Management:</strong> State management is crucial for any web application. My Gmail App employs Redux to efficiently manage the application's state, ensuring that data is organized, consistent, and easily accessible.
                </li>
            </ol>
            <h5><strong>How it Works:</strong></h5>
            <ol>
                <li><strong>Authentication:</strong><span>Users authenticate with their Google accounts using the Google sign-in button, ensuring a secure and convenient login process.</span></li>
                <li>
                    <strong>Compose and Send Emails: </strong><span>Users can easily compose and send emails to their contacts. The application provides a clean and user-friendly interface for drafting messages.</span>
                </li>
                <li>
                    <strong>Data Security: </strong><span>All emails are stored securely in Firestore, protecting user data from unauthorized access.</span>
                </li>
                <li>
                    <strong>Real-time Updates: </strong><span>Firebase's real-time capabilities ensure that users receive updates and notifications promptly, creating a dynamic email experience.</span>
                </li>
            </ol>
        </div>
    },
    {
        id: 9,
        name: "My Hulu App",
        type: "Web",
        featuredImage: "assets/img/projects/hulu/1.png",
        created: "December 25, 2021",
        link: "https://myhuluapp.vercel.app",
        technologies: ["HTML5", "CSS3", "Javascript", "NextJS", "TailwindCSS", "React Flip Move", "Heroicons"],
        images: ["assets/img/projects/hulu/1.png"],
        description: <div>
            <p>
                Are you a movie enthusiast looking for a seamless way to discover and enjoy your favorite films, or simply seeking a quick and efficient way to filter through various movie categories? Look no further than "My Hulu App." This remarkable application has been thoughtfully crafted to cater to your movie-watching needs, providing a delightful experience through an elegant blend of Next.js, Tailwind CSS, React Flip Move, and Heroicons.
            </p>
            <h5><strong>Key Features:</strong></h5>
            <ol>
                <li>
                    <strong>User-Friendly Interface:</strong> My Hulu App boasts a user-friendly and visually appealing interface that makes your movie-watching experience a breeze. The clean and modern design ensures effortless navigation, allowing you to focus on what matters most – the movies.
                </li>
                <li>
                    <strong>Extensive Movie Library:</strong> Discover a vast and ever-expanding movie library at your fingertips. With a rich collection spanning multiple genres, you're sure to find something that suits your mood, be it action, comedy, horror, romance, mystery, or other categories.
                </li>
                <li>
                    <strong>Category Filters:</strong> One of the standout features of My Hulu App is its robust category filtering system. Easily switch between categories like "Trending," "Top Rated," and your preferred genres, ensuring that you always find the perfect movie for the moment.
                </li>
                <li>
                    <strong>Smooth Animations:</strong> The integration of React Flip Move adds a touch of elegance to the user experience. Smooth animations and transitions provide a visually appealing way to browse through movies, making your time on the app all the more enjoyable.
                </li>
                <li>
                    <strong>User-Friendly Icons:</strong> Heroicons, with their simple and elegant design, enhance the app's visual aesthetics while maintaining a high degree of usability.
                </li>
            </ol>
        </div>
    },
    {
        id: 10,
        name: "My Signal App",
        type: "App",
        featuredImage: "assets/img/projects/signal/1.png",
        created: "December 25, 2021",
        link: null,
        technologies: ["React Native", "Firebase", "React Native Elements"],
        images: ["assets/img/projects/signal/1.png", "assets/img/projects/signal/2.png", "assets/img/projects/signal/3.png", "assets/img/projects/signal/4.png", "assets/img/projects/signal/5.png"],
        description: <div>
            <p>
                In a world where communication is at the heart of our digital lives, having a secure and efficient messaging app is essential. <strong>My Signal App</strong> is a revolutionary chat application that allows users to log in or register with ease and create chat rooms for secure, seamless communication. Developed using React Native, Firebase, and React Native Elements, this app combines cutting-edge technology with a user-friendly interface to provide an exceptional messaging experience.
            </p>
            <h5><strong>Key Features:</strong></h5>
            <ol>
                <li>
                    <strong>User Authentication:</strong> My Signal App offers a robust and secure authentication process. Users can create an account or log in using their email or phone number. Firebase Authentication ensures the safety of user credentials.
                </li>
                <li>
                    <strong>Create Chat Rooms:</strong> With the app, users can create chat rooms for different purposes. Whether it's for personal conversations, work-related discussions, or hobby groups, you can easily set up and manage chat rooms.
                </li>
                <li>
                    <strong>Real-time Messaging:</strong> The app leverages Firebase Realtime Database, which ensures that messages are delivered instantly to all participants in a chat room. Say goodbye to delays and hello to real-time conversations.
                </li>
                <li>
                    <strong>React Native Elements UI:</strong> The app's user interface is built using React Native Elements, ensuring a visually appealing and responsive design.
                </li>
            </ol>
        </div>
    },
    {
        id: 11,
        name: "Pronef - A Nft Marketplace",
        type: "App",
        featuredImage: "assets/img/projects/pronef/1.png",
        created: "December 25, 2022",
        link: null,
        technologies: ["React Native"],
        images: ["assets/img/projects/pronef/1.png", "assets/img/projects/pronef/2.png"],
        description: <div>
            <p>
                It is an NFT Marketplace app that shows the list of nfts with their basic information. User can view details of these nfts by pressing place a bid button. I've created this app to learn how we can create stunning UI design in React Native.
            </p>
            <h5><strong>Key Features of Pronef:</strong></h5>
            <ol>
                <li>
                    <strong>Curated NFT Listings:</strong> Pronef ensures that you have access to a curated list of NFTs, saving you the hassle of sifting through an overwhelming number of options.
                </li>
                <li>
                    <strong>Detailed Information:</strong> Get in-depth insights into each NFT, including its creator, historical ownership, and the bidding history.
                </li>
                <li>
                    <strong>User-Friendly Interface:</strong> Pronef offers a clean and user-friendly interface, making your NFT exploration a breeze.
                </li>
                <li>
                    <strong>Bidding Convenience:</strong> With a straightforward "Place a Bid" button, participating in NFT auctions is just a click away.
                </li>
            </ol>
        </div>
    },
    {
        id: 12,
        name: "House Plant Hub - An Plant Selling Plateform",
        type: "App",
        featuredImage: "assets/img/projects/house-plant-hub/1.png",
        created: "March 25, 2023",
        link: null,
        technologies: ["React Native", "TailwindCSS", "React Navigation"],
        images: ["assets/img/projects/house-plant-hub/1.png", "assets/img/projects/house-plant-hub/2.png", "assets/img/projects/house-plant-hub/3.png", "assets/img/projects/house-plant-hub/4.png", "assets/img/projects/house-plant-hub/5.png", "assets/img/projects/house-plant-hub/6.png", "assets/img/projects/house-plant-hub/7.png", "assets/img/projects/house-plant-hub/8.png", "assets/img/projects/house-plant-hub/9.png", "assets/img/projects/house-plant-hub/10.png", "assets/img/projects/house-plant-hub/11.png", "assets/img/projects/house-plant-hub/12.png", "assets/img/projects/house-plant-hub/13.png", "assets/img/projects/house-plant-hub/14.png", "assets/img/projects/house-plant-hub/15.png"],
        description: <div>
            <p>
                It is a house plant selling plateform where user's can easily purchase plants for their home. In this app I've only focused on creating and designing stunning app screen that shows the required details to users. I've added some basic pages like (Splash, Walkthrough, Welcome, Login, Register, Forgot Password, Verify OTP, Home, Categories, Category Detail, Wishlist, Orders, Product Detail, etc) screens. I've Learn a lot by creating this app.
            </p>
        </div>
    },
    {
        id: 13,
        name: "Gayatri Inter College",
        type: "Web",
        featuredImage: "assets/img/projects/gayatri-inter-collage/1.png",
        created: "December 25, 2022",
        link: "https://gicdaulatpur.tech",
        technologies: ["HTML5", "CSS3", "Javascript", "NextJS", "TailwindCSS", "React Flip Move", "Heroicons"],
        images: ["assets/img/projects/gayatri-inter-collage/1.png", "assets/img/projects/gayatri-inter-collage/2.png", "assets/img/projects/gayatri-inter-collage/3.png"],
        description: <div>
            <p>
                GAYATRI INTER COLLEGE DAULTAPUR was established in 1998 and it is managed by the Private Unaided.
            </p>

            <p>
                It is located in Rural area. It is located in MASAUDHA block of FAIZABAD in Uttar Pradesh.
            </p>

            <p>
                There are total 11 teachers in Gayatri Inter College Daultapur, Daulatpur with 8 male teachers and 3 female teachers. 11 teachers are qualified with graduation and above and 10 teachers are with professional qualification.
            </p>

            <p>
                The school consists of Grades from 9 to 12. The school is Co-educational and it doesn't have an attached pre-primary section. The school is Private in nature and is not using school building as a shift-school.
            </p>
        </div>
    },
    {
        id: 14,
        name: "VK construction and builders",
        type: "Web",
        featuredImage: "assets/img/projects/vkconstructionandbuilders/1.png",
        created: "April 25, 2024",
        link: "https://vkconstructionandbuilders.in/",
        technologies: ["HTML5", "CSS3", "Javascript", "Jquery", "Bootstrap", "Material UI"],
        images: ["assets/img/projects/vkconstructionandbuilders/1.png", "assets/img/projects/vkconstructionandbuilders/2.png", "assets/img/projects/vkconstructionandbuilders/3.png", "assets/img/projects/vkconstructionandbuilders/4.png"],
        description: <div>
            <p>
                VK Construction & Builders was established in 2005 with a vision to excel in the civil engineering sector. Over the years, we have significantly expanded our operational scope and capacity, successfully managing projects with an annual throughput worth up to 27+ crores. Our core expertise lies in the design and construction of complex civil and structural engineering projects.
            </p>
        </div>
    },
    {
        id: 15,
        name: "Ecoism Technology PVt LTD.",
        type: "Web",
        featuredImage: "assets/img/projects/ecoism/1.png",
        created: "February 25, 2023",
        link: "https://ecoism.co.in/",
        technologies: ["HTML5", "CSS3", "Javascript", "Jquery", "Bootstrap", "Material UI"],
        images: ["assets/img/projects/ecoism/1.png", "assets/img/projects/ecoism/2.png", "assets/img/projects/eocism/3.png", "assets/img/projects/ecoism/4.png"],
        description: <div>
            <p>
                It's stand for Electronics Company of Integrated System Management has been initiated as a solution provider of security, safety, automation, and eco-friendly environment.
                Ecoism is a system integrator, leading solution provider, and innovative solutions consultant for all types of electronic security, safety, automation, and solar power solutions, with in-depth expertise in the design, engineering, procurement, installation, and maintenance of systems.
            </p>
            <p>
                It has sound experience behind them in working with leading companies in the field of Electronic Security, Safety, Automation, Networking, and Solar Energy system. This experience has helped us to offer the perfect customized solutions to the need.
            </p>
        </div>
    },
]

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
                <img src={item} alt={item} className='object-fit-contain' width="100%" style={{ maxHeight: "356px" }} />
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >

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
                className='position-static mt-5'
                style={{ background: "rgba(57, 57, 57, 0.5)", padding: "8px 12px", borderRadius: "24px" }}
            />
        </div>

    );
}

const Portfolio = () => {
    const [projects, setProjects] = useState(allProjects);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectDetails = useMemo(() => projects.find((project) => project.id === selectedProject), [projects,selectedProject]);

    useEffect(() => {
        const projects = allProjects.filter((project) => searchParams.get("type") ? (project.type === searchParams.get("type")) : true);

        setProjects(projects);
    }, [searchParams])

    const onChangeProjectType = (type = "") => {
        if (type.trim().length > 0) {
            searchParams.set("type", type)
        } else {
            searchParams.delete("type")
        }

        setSearchParams(searchParams)
    }

    const onToggleProjectDetail = (id) => {
        setSelectedProject(id);
        setIsProjectDetailOpen((prevState) => !prevState);
    }

    return (
        <main id="main">
            {/* ======= Portfolio Section =======  */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Welcome to my portfolio, a curated collection of my creative endeavors. <br />I invite you to explore my work, which spans across various domains, from graphic design to web development.<br /> Each piece reflects my passion for innovation and dedication to delivering exceptional results.<br /> Thank you for visiting and enjoy the journey.</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li onClick={() => onChangeProjectType()} className={`${searchParams.get("type") === null ? "filter-active" : ""} `} >All</li>
                                <li onClick={() => onChangeProjectType("App")} className={`${searchParams.get("type") === "App" ? "filter-active" : ""} `}>App</li>
                                <li onClick={() => onChangeProjectType("Web")} className={`${searchParams.get("type") === "Web" ? "filter-active" : ""} `}>Web</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cards portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        {
                            projects.map((project, key) => (
                                <div className="portfolio-item filter-app shadow rounded" key={key}>
                                    <div className="portfolio-wrap d-flex justify-content-center">
                                        <img src={project.featuredImage} className="img-fluid" alt="" style={{ maxHeight: "256px" }} />
                                        <div className="portfolio-info">
                                            <h4>{project.name}</h4>
                                            <p>{project.type}</p>
                                            <div className="portfolio-links text-white">
                                                <i className="bi bi-eye" style={{ cursor: "pointer" }} onClick={() => onToggleProjectDetail(project.id)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {
                        isProjectDetailOpen ? (
                            <Modal isOpen={isProjectDetailOpen} toggle={onToggleProjectDetail} size='xl' centered fade backdrop="static" keyboard={false}>
                                <ModalBody>
                                    <section id="portfolio-details" className="portfolio-details">
                                        <div className="container">

                                            <div className="row gy-4 justify-content-center">
                                                <div className="col-lg-12 d-flex justify-content-end">
                                                    <i className="bi bi-x" style={{ cursor: "pointer", fontSize: "28px" }} onClick={onToggleProjectDetail}></i>
                                                </div>
                                                <div className="col-lg-12">
                                                    <Slider items={projectDetails.images} />
                                                </div>

                                                <div className="col-lg-9">
                                                    <div className="portfolio-description">
                                                        <h2>{projectDetails.name}</h2>

                                                        {
                                                            projectDetails.description
                                                        }

                                                        <div>

                                                            {
                                                                (projectDetails.technologies.length > 0) ? (
                                                                    <div className='my-2'>
                                                                        <strong>Technology Used - </strong>

                                                                        {
                                                                            projectDetails.technologies.map((tech, key) => (<span key={key}>{tech}{(projectDetails.technologies.length !== (key + 1)) ? "," : null} </span>))
                                                                        }

                                                                    </div>
                                                                ) : null
                                                            }

                                                            {
                                                                projectDetails.link ? (
                                                                    <div>
                                                                        <strong>View Online  - </strong>
                                                                        <Link to={projectDetails.link} target='_blank'>{projectDetails.link}</Link>
                                                                    </div>
                                                                ) : null
                                                            }

                                                            {
                                                                projectDetails.created ? (
                                                                    <div>
                                                                        <strong>Date Created - </strong>
                                                                        <span>{projectDetails.created}</span>
                                                                    </div>
                                                                ) : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </section>
                                </ModalBody>
                            </Modal>
                        ) : null
                    }
                </div>
            </section>
            {/* End Portfolio Section  */}
        </main>
    )
}

export default Portfolio;