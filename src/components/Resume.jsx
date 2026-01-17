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
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Rahul Rai</h4>
                <p>
                  <em>
                    I'm an innovative and deadline-driven Software Engineer with
                    3+ years of experience designing and development with a keen
                    eye for detail and a deep understanding of programming
                    languages such as Python, and JavaScript, I enjoy crafting
                    clean, maintainable code that delivers exceptional user
                    experiences.
                  </em>
                </p>
                <div>
                  <ul>
                    <li>
                      Chandpur Harvansh Dabhasemar,
                      <br /> Ayodhya - 224001,
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
                <h4>Bachelor's Degree - B Tech in Computer Science</h4>
                <h5>July 2021 - June 2025</h5>
                <p>
                  <em>
                    Himalayan Institute of Technology & Management - Lucknow,
                    Uttar Pradesh
                  </em>
                </p>
                <p>
                  It is one of the best engineering colleges in Lucknow where
                  many of engineering courses are available for students to join
                  for making their career better.{" "}
                </p>
              </div>
              <div className="resume-item">
                <h4>Polytechnic - Diploma in Information Technology</h4>
                <h5>July 2017 - June 2020</h5>
                <p>
                  <em>
                    Chhatrapati Shahu Ji Maharaj Government Polytechnic
                    Ambedkarnagar - 224122, Uttar Pradesh
                  </em>
                </p>
                <p>
                  It was situated in AmbedkarNagar district on Faizabad road and
                  started in 2005 by BTEUP, with 30 students in CS branch and 30
                  student in IT branch. Currently Institute has running four
                  courses of diploma namely Electrical Engg, Electronics Engg,
                  Computer science and Engg and Information Technology.{" "}
                </p>
              </div>
              <div className="resume-item">
                <h4>Intermediate</h4>
                <h5>April 2022 - March 2023</h5>
                <p>
                  <em>
                    KD Public Inter Collage Tihura, Ayodhya - 224001, Uttar
                    Pradesh
                  </em>
                </p>
                <p>
                  It was established in 2005 in a rural area and is managed by a
                  private unaided organization.
                </p>
              </div>
              <div className="resume-item">
                <h4>High School</h4>
                <h5>April 2016 - March 2017</h5>
                <p>
                  <em>
                    Dr. Ambedkar Balika Inter collage Chandpur harvansh
                    Dabhasemar,Ayodhya - 224001, Uttar Pradesh
                  </em>
                </p>
                <p>
                  It is a distinguished educational inter collage committed to
                  providing a nurturing, innovative, and inclusive learning
                  environment for students of all backgrounds.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Full Stack Developer</h4>
                <h5>May 2021 - Present</h5>
                <p>
                  <em>Shepple Technology Pvt. Ltd - New Delhi, Delhi</em>
                </p>
                <div>
                  <ul>
                    <li>
                      Developed and maintained web applications using a variety
                      of technologies, including HTML, CSS, JavaScript,ReactJs,
                      NextJs and various back-end frameworks.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to define project
                      requirements and design user-friendly interfaces.{" "}
                    </li>
                    <li>
                      Implemented and optimized database structures to ensure
                      data integrity and efficient query performance.
                    </li>
                    <li>
                      Continuously improved code quality and application
                      performance through regular testing and debugging.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="resume-item">
                <h4>Frontend Developer</h4>
                <h5>Dec 2020 - May 2021</h5>
                <p>
                  <em>Infoventive Technology - Noida, Uttar Pradesh</em>
                </p>
                <div>
                  <ul>
                    <li>
                      Designed, developed, and maintained web applications using
                      Django, Python, and related technologies.
                    </li>
                    <li>
                      Utilized JavaScript frameworks like React to build
                      interactive features and enhance the overall user
                      experience.
                    </li>
                    <li>
                      Ensured cross-browser compatibility and optimized site
                      performance by identifying and resolving code issues.
                    </li>
                    <li>
                      Participated in code reviews and followed best practices
                      to maintain code quality.
                    </li>
                    <li>
                      Worked closely with designers to implement UI/UX
                      improvements and create visually appealing websites.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="resume-item">
                <h4>Django Developer</h4>
                <h5>June 2020 - July 2020</h5>
                <p>
                  <em>Softspire - Faizabad, Uttar Pradesh</em>
                </p>
                <div>
                  <ul>
                    <li>
                      Designed, developed, and maintained web applications using
                      Django, Python, and related technologies.
                    </li>
                    <li>
                      Collaborated with cross-functional teams, including
                      designers and front-end developers, to create seamless
                      user experiences.
                    </li>
                    <li>
                      Implemented security best practices to protect data and
                      user information, ensuring compliance with privacy
                      regulations.
                    </li>
                    <li>
                      Optimized database performance and improved website speed,
                      resulting in a 20% reduction in page load times.
                    </li>
                    <li>
                      Actively participated in code reviews, identifying and
                      resolving issues to maintain high code quality.
                    </li>
                  </ul>
                </div>
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
