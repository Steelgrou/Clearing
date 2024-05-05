import './Header.css'
import { useTranslation } from 'react-i18next'
import logo from '/logo.svg'
import Button from '../Button/Button';
import HeaderMenu from "../../Components/Header/BasicMenu"
// Link
import { Link } from 'react-router-dom'



export default function Header() {
    // Lang function
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }


    return (
        <>
            <section className='header'>
                <div className="container">

                    <div className="header-wrapper">
                        <div className="header-left">
                            <div className="header-menu">
                                <HeaderMenu />
                            </div>

                            <div className="header-logo">
                                <img src={logo} alt="" />
                            </div>
                            <nav>
                                <ul className='header-list'>
                                    <li><Link to='/' className='header-link'>{t('header.home')}</Link></li>
                                    <li><Link to='/Aboutpage' className='header-link'>{t('header.about')}</Link></li>
                                    <li><Link to="/Servicespage" className='header-link'>{t('header.services')}</Link></li>
                                    <li><Link to="/" className='header-link'>{t('header.articles')}</Link></li>
                                    <li><Link to="/Contactpage" className='header-link'>{t('header.contact')}</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <div className="header-box">
                                <select name="Lang" id="Lang" onChange={handleChange}>
                                    <option value="en">English</option>
                                    <option value="ru">Russian</option>
                                </select>
                            </div>
                            <Button />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}