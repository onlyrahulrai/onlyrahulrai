import React from "react";

const educations = [
  {
    title: "Bachelor of Technology (B.Tech) – Computer Science",
    duration: "July 2022 – June 2025",
    institute:
      "Himalayan Institute of Technology & Management, Lucknow, Uttar Pradesh",
    description:
      "During my B.Tech, I focused on core subjects like data structures, databases, and software development. Along with academics, I spent most of my time building real-world web and mobile applications, which helped me gain practical experience beyond the classroom.",
  },
  {
    title: "Diploma – Information Technology",
    duration: "July 2017 – June 2020",
    institute:
      "Chhatrapati Shahu Ji Maharaj Government Polytechnic College, Ambedkar Nagar, Uttar Pradesh",
    description:
      "This is where I started getting serious about programming. I learned the basics of coding, databases, and networking, and worked on small projects that gave me a clear understanding of how software systems actually work.",
  },
  {
    title: "Intermediate (12th Standard)",
    duration: "April 2022 – March 2023",
    institute:
      "KD Public Inter College, Ayodhya, Uttar Pradesh",
    description:
      "Completed my higher secondary education with a focus on building a strong academic base. This phase helped me develop discipline and problem-solving skills before moving into the technical field.",
  },
  {
    title: "High School (10th Standard)",
    duration: "April 2016 – March 2017",
    institute:
      "Dr. Ambedkar Inter College, Ayodhya, Uttar Pradesh",
    description:
      "Built my foundational knowledge across core subjects and developed a consistent learning mindset, which later helped me transition smoothly into technical education.",
  },
];

const experiences = [
  {
    role: "Software Developer (Full Stack)",
    duration: "June 2021 – September 2025",
    company: "Shepple Technologies Pvt. Ltd, New Delhi",
    points: [
      "Worked on building web applications using React and Django, handling both frontend and backend work",
      "Built mobile apps using React Native for Android and iOS and helped publish them on Play Store and App Store",
      "Improved API performance by around 40% by adding Redis caching and background jobs with Celery",
      "Created REST APIs and connected them with frontend features to keep everything working smoothly",
      "Handled deployments and basic server setup on AWS and DigitalOcean",
      "Implemented login and authentication using JWT and OAuth",
    ],
  },
  {
    role: "Full-Stack Engineer",
    duration: "December 2020 – May 2021",
    company: "Infoventive Technologies, Noida",
    points: [
      "Built REST APIs using Django REST Framework for different features in the application",
      "Used Redux for managing frontend state and keeping the code organized",
      "Added authentication using JWT and OAuth for secure access",
      "Worked on improving UI and fixing performance issues in the app",
    ],
  },
];

const Resume = () => {
  return (
    <main
      id="main"
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50"
    >
      {/* ======= Resume Section =======  */}
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              Welcome to my Resume. I am a dedicated professional with a proven
              track record in Software Development. <br />
              Explore my qualifications and experience below.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Rahul Rai</h4>
                <p>
                  <em>
                    Full Stack Developer with 4+ years of experience building
                    high-performance web and mobile applications. Skilled in
                    React.js, React Native, Django, Python, Socket.IO, and
                    payment gateway integrations such as Razorpay and Stripe.
                    Strong experience with MySQL, MongoDB, Redis, and Celery
                    task queues. Proven expertise in server management and
                    deploying applications on both the Google Play Store and
                    Apple App Store. Passionate about crafting scalable
                    solutions, optimizing performance, and delivering seamless
                    user experiences.
                  </em>
                </p>
                <div>
                  <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                    <li>
                      Chandpur Harvansh Dabhasemar,
                      <br /> Ayodhya – 224001,
                      <br />
                      Uttar Pradesh
                    </li>
                    <li>+917839603171</li>
                    <li>rrai06125@gmail.com</li>
                  </ul>
                </div>
              </div>

              <h3 className="resume-title">Education</h3>

              {
                educations.map((education, index) => (
                  <div className="resume-item" key={index}>
                    <h4>{education.title}</h4>
                    <h5>{education.duration}</h5>
                    <h6 className="font-semibold">
                      <em>{education.institute}</em>
                    </h6>
                    <div className="py-1" />
                    <p>{education.description}</p>
                  </div>
                ))
              }
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>

              {
                experiences.map((experience, index) => (
                  <div className="resume-item" key={index}>
                    <h4>{experience.role}</h4>
                    <h5>{experience.duration}</h5>
                    <h6 className="font-semibold">
                      <em>{experience.company}</em>
                    </h6>
                    <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                      {experience.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section  */}
    </main>
  );
};

export default Resume;
