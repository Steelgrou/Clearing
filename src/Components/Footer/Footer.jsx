import Button from '../Button/Button'
import './Footer.css'
import logo from '/logo.svg'

export default function Footer() {


    return (
        <>
            <section className='footer'>
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-up">
                            <div className="footer-home">
                                <h3>Quality cleaning for your home</h3>
                                <h4>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</h4>
                            </div>
                            <div className="footer-contact">
                                <h3>Contact us</h3>
                                <h4>1827 Nickel Road, Los Angeles, CA, 90017, United States</h4>
                                <h4>(414) 567 - 2109</h4>
                                <h4>contact@cleaning.com</h4>
                            </div>
                            <div className="footer-hours">
                                <h3>Hours</h3>
                                <h3>Monday to Friday</h3>
                                <h4>6:00 AM - 9:00 PM</h4>
                                <h3>Saturday & Sunday</h3>
                                <h4>8:00 AM - 8:00 PM</h4>
                            </div>
                            <div className="footer-call">
                                <h3>Get a free estimate</h3>
                                <a href="tel:+998993024512">(414) 567 - 2109</a>
                                <h3>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</h3>
                                <Button />
                            </div>
                        </div>
                        <div className="footer-down">
                            <div className="footer-logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="footer-license">
                                <h3>Copyright © Cleaning X | Designed by</h3>
                                <a href="">BRIX Templates</a>
                                <h3>- Powered by</h3>
                                <a href="">Webflow</a>
                                <a href="">Licenses</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
