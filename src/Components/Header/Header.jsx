import './Header.css'
import { useTranslation } from 'react-i18next'

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
                                <img src="" alt="" />
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#">{t('home')}</a></li>
                                    <li><a href="#">{t('about')}</a></li>
                                    <li><a href="#">{t('services')}</a></li>
                                    <li><a href="#">{t('articles')}</a></li>
                                    <li><a href="#">{t('contact')}</a></li>
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
                            <div className="header-btn">{t("free")}</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}