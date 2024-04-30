import './Header.css'
import { useTranslation } from 'react-i18next'
import logo from '/logo.svg'
import Button from '../Button/Button';
export default function Header() {
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
                            <div className="header-logo">
                                <img src={logo} alt="" />
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#">{t('header.home')}</a></li>
                                    <li><a href="#">{t('header.about')}</a></li>
                                    <li><a href="#">{t('header.services')}</a></li>
                                    <li><a href="#">{t('header.articles')}</a></li>
                                    <li><a href="#">{t('header.contact')}</a></li>
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
                            <Button/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}