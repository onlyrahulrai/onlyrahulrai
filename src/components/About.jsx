import { useState } from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Waypoint } from "react-waypoint";
import Certificates from "./Certificates";

const skills = [
  {
    name: "HTML",
    score: 99,
  },
  {
    name: "Axios",
    score: 73,
  },
  {
    name: "CSS",
    score: 97,
  },
  {
    name: "Firebase",
    score: 57,
  },
  {
    name: "Javascript",
    score: 83,
  },
  {
    name: "ExpressJs",
    score: 79,
  },

  {
    name: "Bootstrap",
    score: 91,
  },

  {
    name: "GraphQL",
    score: 68,
  },

  {
    name: "TailwindCSS",
    score: 86,
  },

  {
    name: "Socket.io",
    score: 72,
  },

  {
    name: "ReactJs",
    score: 78,
  },

  {
    name: "WebRTC",
    score: 73,
  },

  {
    name: "NextJs",
    score: 73,
  },

  {
    name: "MongoDB",
    score: 61,
  },
  {
    name: "ContextAPI",
    score: 93,
  },
  {
    name: "MySQL",
    score: 86,
  },
  {
    name: "ReduxJs",
    score: 74,
  },
  {
    name: "Postman",
    score: 71,
  },
  {
    name: "React Native",
    score: 77,
  },

  {
    name: "Git",
    score: 62,
  },
  {
    name: "JSON Web Token(JWT)",
    score: 89,
  },
  {
    name: "Github",
    score: 48,
  },
  {
    name: "Python",
    score: 90,
  },
  {
    name: "Django",
    score: 81,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Feeroz Khan",
    occupation: "Co-Founder & CTO",
    image: "assets/img/testimonials/1.jpg",
    message:
      "He is a software engineer extraordinaire! Their ability to grasp complex concepts and turn them into functional, efficient code is truly remarkable. They're not just a team player, but a team leader, and their passion for software development is evident in the exceptional work they consistently deliver.",
  },
  {
    id: 2,
    name: "Abu Talha Danish",
    occupation: "Technical Lead Manager",
    image: "assets/img/testimonials/2.jpg",
    message:
      "I've had the privilege of working with many software engineers, but Rahul Rai stands out as one of the best. Their ability to write clean, maintainable code is unparalleled. What's more, they have a knack for troubleshooting and debugging that saves the team countless hours. I wholeheartedly endorse Rahul Rai for any software development project.",
  },
  {
    id: 3,
    name: "Manish Maurya",
    occupation: "Backend Developer",
    image: "assets/img/testimonials/3.jpg",
    message:
      "I've worked with Rahul Rai on several projects, and each time I've been amazed by their technical prowess and problem-solving skills. They have a rare ability to quickly understand complex requirements and turn them into elegant, efficient software solutions. I have no doubt that Rai is among the best software engineers in the field.",
  },
  {
    id: 4,
    name: "Vishal Gond",
    occupation: "Magento Developer",
    image: "assets/img/testimonials/4.jpg",
    message:
      "If you're looking for a software engineer who can turn your vision into a reality, Rahul Rai is the person you need. They have a unique blend of technical expertise and a deep understanding of the end-user experience. Rahul Rai not only delivers top-notch code but also a product that users love.",
  },
];

const About = () => {
  const [startCounting, setStartCounting] = useState(false);

  const onWaypointEnter = () => {
    let skilsContent = document.getElementById("skills-content");

    if (skilsContent) {
      let progress = document.querySelectorAll(".progress");

      if (progress.length > 0) {
        progress.forEach((element) => {
          element.firstChild.style.width = `${element.getAttribute("aria-valuenow")}%`;
        });
      }
    }
  };

  const onWaypointEnterInFacts = () => {
    setStartCounting(true);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <main
      id="main"
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50"
    >
      {/* ======= About Section =======  */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p className="text-center">
              Welcome to our About Us page, your gateway to discovering the
              heart and soul of my self.
              <br />
              we aim to provide you with a comprehensive glimpse into who we
              are, our mission, values, and the driving force behind everything
              we do. <br /> Believe me you will find us best suitable.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3">
              <img
                src="assets/img/pic.jpg"
                className="img-fluid"
                alt=""
                style={{ borderRadius: "56px 8px 56px 8px" }}
              />
            </div>
            
            <div className="col-lg-9 pt-0 content">
              <h3 style={{marginTop:"6px"}}>Software Engineer</h3>

              <div className="pt-1">
                <p>
                  Hi, I’m <strong>Rahul Rai</strong>, a passionate Software
                  Engineer with over 5 years of hands-on experience in building
                  modern web and mobile applications.
                </p>

                <p>
                  I have completed my Bachelor’s degree in Computer Science and
                  currently work as a Full-Stack Developer at Shepple
                  Technologies, where I design, develop, and maintain scalable,
                  production-ready applications.
                </p>

                <p>
                  I enjoy solving complex problems and transforming ideas into
                  efficient, user-focused solutions. Writing clean, maintainable
                  code and delivering high-quality user experiences are central
                  to my development approach.
                </p>

                <p>
                  My technical expertise includes{" "}
                  <strong>
                    JavaScript, React, React Native, Nodejs, Expressjs, Python, Django, and Prisma.
                  </strong>
                  . I specialize in building robust backend systems, developing
                  RESTful APIs, and creating seamless integrations between
                  frontend and backend services.
                </p>

                <p>
                  I thrive in fast-paced environments and continuously adapt to
                  new technologies, best practices, and industry standards to
                  deliver reliable and impactful software solutions.
                </p>
              </div>

              <div className="row mt-2">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 17 April 2002
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.onlyrahulrai.in"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.onlyrahulrai.in
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Phone:</strong> +91 9648772088
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>City:</strong> Ayodhya
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Age:</strong> {calculateAge("2002-04-17")}
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Degree:</strong> Bachelor of Technology (B.Tech)
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Email:</strong> rrai06125@gmail.com
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section  */}

      {/* ======= Skills Section ======= */}
      <section id="skills" className="skills">
        <Waypoint onEnter={onWaypointEnter} onLeave={void 0} />
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Skills are the cornerstone of personal and professional success.
              <br /> They encompass expertise, knowledge, and proficiencies,
              shaping success and innovation.
            </p>
          </div>

          <div className="row" id="skills-content">
            {skills.map((skill, key) => (
              <div className="col-lg-6" key={key}>
                <div className="progress-section">
                  <span className="skill">
                    {skill.name} <i className="val">{skill.score}%</i>
                  </span>

                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={skill.score}
                    aria-valuemin="0"
                    aria-valuemax={skill.score}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: "0%",
                        backgroundColor: "#34b7a7",
                        transition: "0.9s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Skills Section  */}

      {/* ======= Certificates Section ====== */}

      <section id="certificates" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Certificates</h2>
            <p>
              {" "}
              Welcome to a world of recognition and achievement. These
              certificates celebrate dedication, skill, and knowledge, marking
              significant milestones in your journey.{" "}
            </p>
          </div>

          <Certificates />
        </div>
      </section>

      {/* ======= End Certificates Section ====== */}

      {/* ======= Facts Section =======  */}
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              {" "}
              we embark on a journey through a fascinating world of knowledge
              and information.
              <br /> and explore a diverse array of facts that span the realms
              of science, history, nature, culture, and beyond.{" "}
            </p>
          </div>

          <Waypoint onEnter={onWaypointEnterInFacts}>
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                {startCounting ? <CountUp end={11} duration={3} /> : 0}
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                {startCounting ? <CountUp end={49} duration={3} /> : 0}
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                {startCounting ? <CountUp end={365} duration={3} /> : 0}
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                {startCounting ? <CountUp end={5} duration={3} /> : 0}
                <p>Hard Workers</p>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
      {/* End Facts Section  */}

      {/* ======= Testimonials Section =======  */}
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>
              Our valued customers share their experiences, stories, and
              insights about their journey with our products and services.
              <br /> We take great pride in the relationships we've built and
              the trust we've earned. These testimonials offer a glimpse into
              the impact we've had on individuals and businesses alike.{" "}
            </p>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            autoplay={true}
            className="testimonials-slider"
            modules={[Autoplay, EffectFade]}
          >
            {testimonials.map((testimonial, key) => (
              <SwiperSlide key={key}>
                <div className="testimonial-item">
                  <img
                    src={testimonial.image}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.occupation}</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {testimonial.message}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default About;
