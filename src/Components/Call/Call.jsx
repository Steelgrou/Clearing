import './Call.css'
import { useTranslation } from 'react-i18next'
import call from '/contact-phone.svg'

export default function Call() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    return (
        <>
            <div className="contact-call">
                <div className="contact-img">
                    <img className='contact-img__phone' src={call} alt="" />
                </div>
                <div className="contact-number">
                    <h3>{t('contact.number')}</h3>
                    <a href="tel:+998993024512">(414) 567 - 2109</a>

                </div>

            </div>
        </>
    )
}