import Button from '../Button/Button'
import './Footer.css'
import logo from '/logo.svg'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    return (
        <>
            <section className='footer'>
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-up">
                            <div className="footer-home">
                                <h3>{t('footer.title')}</h3>
                                <h4>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</h4>
                            </div>
                            <div className="footer-contact">
                                <h3>{t('footer.contact')}</h3>
                                <h4>1827 Nickel Road, Los Angeles, CA, 90017, United States</h4>
                                <h4>(414) 567 - 2109</h4>
                                <h4>contact@cleaning.com</h4>
                            </div>
                            <div className="footer-hours">
                                <h3>{t('footer.hours')}</h3>
                                <h3>{t('footer.monday')}</h3>
                                <h4>6:00 AM - 9:00 PM</h4>
                                <h3>{t('footer.saturday')}</h3>
                                <h4>8:00 AM - 8:00 PM</h4>
                            </div>
                            <div className="footer-call">
                                <h3>{t('footer.get')}</h3>
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
