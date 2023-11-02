import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container d-flex flex-column align-items-center text-center overlay" data-aos="zoom-in" data-aos-delay="100">
                <h1>Rahul Rai</h1>
                <h2>I'm a software engineer with a solid technical foundation, a track record of successful projects, and a commitment to continuous learning and improvement. I'm enthusiastic about applying my skills and experience to solve complex problems and contribute to innovative software solutions.</h2>
                <Link to="/about" className="btn-about mb-5">About Me</Link>
            </div>
        </section>
    )
}

export default Home;