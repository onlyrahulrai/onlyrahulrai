import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Footer, Header, Home, Portfolio, Resume } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    Crisp.configure("08d56c13-bdad-40c9-859d-c124c0b0b35a");
  },[])

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
    </div>
  );
}

export default App;
