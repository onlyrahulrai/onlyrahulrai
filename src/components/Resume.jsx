import React from "react";

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
                    <li>+91 9648772088</li>
                    <li>rrai06125@gmail.com</li>
                  </ul>
                </div>
              </div>

              <h3 className="resume-title">Education</h3>

              <div className="resume-item">
                <h4>Bachelor of Technology (B.Tech) – Computer Science</h4>
                <h5>July 2022 – June 2025</h5>
                <h6 className="font-semibold">
                  <em>
                    Himalayan Institute of Technology &amp; Management, Lucknow,
                    Uttar Pradesh
                  </em>
                </h6>
                <div className="py-1" />
                <p>
                  Completed B.Tech in Computer Science with strong foundations
                  in programming, data structures, databases, and software
                  development. Actively worked on real-world projects involving
                  web and mobile application development.
                </p>
              </div>

              <div className="resume-item">
                <h4>Diploma – Information Technology</h4>
                <h5>July 2017 – June 2020</h5>
                <h6 className="font-semibold">
                  <em>
                    Chhatrapati Shahu Ji Maharaj Government Polytechnic College,
                    Ambedkar Nagar, Uttar Pradesh
                  </em>
                </h6>
                <div className="py-1" />
                <p>
                  Completed a government-recognized diploma focusing on
                  programming, computer networks, databases, and practical IT
                  system development, providing a strong technical foundation.
                </p>
              </div>

              <div className="resume-item">
                <h4>Intermediate (12th Standard)</h4>
                <h5>April 2022 – March 2023</h5>
                <h6 className="font-semibold">
                  <em>
                    KD Public Inter College, Tihura, Ayodhya – 224001, Uttar
                    Pradesh
                  </em>
                </h6>
                <div className="py-1" />
                <p>
                  Completed higher secondary education with a focus on academic
                  fundamentals, discipline, and analytical thinking, supporting
                  continued studies in computer science.
                </p>
              </div>

              <div className="resume-item">
                <h4>High School (10th Standard)</h4>
                <h5>April 2016 – March 2017</h5>
                <h6 className="font-semibold">
                  <em>
                    Dr. Ambedkar Balika Inter College, Chandpur Harvansh
                    Dabhasemar, Ayodhya – 224001, Uttar Pradesh
                  </em>
                </h6>
                <div className="py-1" />
                <p>
                  Completed secondary education with emphasis on core subjects
                  and foundational learning, building discipline and
                  problem-solving skills at an early stage.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>

              <div className="resume-item">
                <h4>Software Developer (Full Stack)</h4>
                <h5>June 2021 – Present</h5>
                <h6 className="font-semibold">
                  <em>Shepple Technologies Pvt. Ltd, New Delhi</em>
                </h6>
                <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                  <li>
                    Developed and maintained high-performance web applications
                    using React.js and Django, improving scalability and user
                    experience.
                  </li>
                  <li>
                    Built and deployed cross-platform mobile applications using
                    React Native for Android and iOS.
                  </li>
                  <li>
                    Designed and optimized MySQL databases, ensuring data
                    integrity and efficient query performance.
                  </li>
                  <li>
                    Integrated Redis caching and Celery background workers,
                    reducing API response times by nearly 40%.
                  </li>
                  <li>
                    Managed server deployment and monitoring on AWS and
                    DigitalOcean, including NGINX configuration and security
                    hardening.
                  </li>
                  <li>
                    Successfully published production applications on the Google
                    Play Store and Apple App Store.
                  </li>
                  <li>
                    Collaborated closely with cross-functional teams to deliver
                    scalable and reliable software solutions.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Full Stack Engineer</h4>
                <h5>December 2020 – May 2021</h5>
                <h6 className="font-semibold">
                  <em>Infoventive Technologies, Noida, Uttar Pradesh</em>
                </h6>
                <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                  <li>
                    Developed RESTful APIs using Django REST Framework to handle
                    complex business logic.
                  </li>
                  <li>
                    Implemented Redux-based state management to improve frontend
                    performance and maintainability.
                  </li>
                  <li>
                    Integrated secure authentication mechanisms using OAuth and
                    JWT.
                  </li>
                  <li>
                    Conducted code reviews and followed best practices to ensure
                    code quality and scalability.
                  </li>
                  <li>
                    Improved mobile application UI/UX and resolved performance
                    bottlenecks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section  */}
    </main>
  );
};

export default Resume;
