import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Spinner } from 'reactstrap';



const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const onSendEmail = (e) => {
        e.preventDefault();

        setLoading(true)

        emailjs.sendForm('service_cfgsjnq', 'template_loiprz4', formRef.current, '0FnB3X9Vnx-L36xER')
            .then((result) => {
                setLoading(false)
                toast.success("Your message has been sent. Thank you!")
                formRef.current.reset()
            }, (error) => {
                setLoading(false)
                setError("Sorry, Your message is not sent 🙏 <br /> Please try again later.")
            });
    };

    return (
        <main id="main">
            {/* ======= Contact Section =======  */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>
                            Welcome to our Contact Us page! We're delighted that you've taken the time to reach out to us.<br /> Whether you have questions, feedback, or simply want to connect, this is the place to do it. Our dedicated team is here to assist you and provide the information you need.<br /> Don't hesitate to get in touch - we're all ears and eager to help.</p>
                    </div>

                    <div>
                        <iframe
                            style={{ border: "0", width: "100%", height: "270px" }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7126.464415842383!2d82.16439495!3d26.73696505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a08f118352b63%3A0x792af8b19e3a1ef5!2sChandpur%20Harbanshpur%2C%20Uttar%20Pradesh%20224133!5e0!3m2!1sen!2sin!4v1697009645701!5m2!1sen!2sin"
                            frameBorder="0"
                            allowFullScreen
                            title='Contact-Map'
                        ></iframe>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Chandpur Harvansh Dabhasemar, <br /> Ayodhya - 224001, <br /> Uttar Pradesh </p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>rrai06125@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+919648772088</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form className="php-email-form" ref={formRef} onSubmit={onSendEmail}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="mobile_number" id="subject" placeholder="Mobile No" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Your Message..." required></textarea>
                                </div>
                                <div className="my-3">
                                    
                                    {
                                        error ? <div className="error-message d-block"><div dangerouslySetInnerHTML={{ __html: error }} />
                                        </div> : null
                                    }

                                </div>
                                <div className="text-center">
                                    <button type="submit" className='d-inline-flex align-items-center gap-3' disabled={loading}>Send Message {loading ? <Spinner style={{ width: "1.5rem", height: "1.5rem" }} /> : null}</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
            {/* End Contact Section  */}

        </main>
    )
}

export default Contact;