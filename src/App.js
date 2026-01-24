import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Footer, Header, Home, Portfolio, Resume } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Crisp } from "crisp-sdk-web";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    Crisp.configure("08d56c13-bdad-40c9-859d-c124c0b0b35a");

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, [])

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: 0
    },

    background: {
      color: { value: "transparent" }
    },

    fpsLimit: 120,
    detectRetina: true,

    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800
        }
      },

      color: {
        value: ["#00c6ff", "#8e2de2", "#ff4d4d"]
      },

      shape: {
        type: "circle"
      },

      size: {
        value: 2,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1
        }
      },

      opacity: {
        value: 0.8,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3
        }
      },

      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"   // ♾ infinite looping
        }
      }
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },

    pauseOnBlur: false,
    pauseOnOutsideViewport: false
  }), []);


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/resume"
            element={<Resume />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>

      {init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      }
    </div>
  );
}

export default App;
