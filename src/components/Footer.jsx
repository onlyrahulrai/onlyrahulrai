import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>
                        2023</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed and Managed by <Link to={{ pathname: "https://www.linkedin.com/in/rahulraifzb/" }} target='_blank'>Rahul Rai</Link> 💕
                </div>
            </div>
        </footer>
    )
}

export default Footer