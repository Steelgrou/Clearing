import Btn from '../Button/Btn'
import Card from '../Card/Card'
import './Services.css'

//img card services
import servicesFirst from '/services-card-first.jpg'
import servicesSecond from '/services-card-second.jpg'
import servicesThird from '/services-card-third.jpg'

import { useTranslation } from 'react-i18next'

export default function Services() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    return (
        <>
            <section className="services">
                <div className="container">
                    <div className="services-wrapper">
                        <h2 className="services-title">{t('services.title')}</h2>
                        <Btn />
                        <div className="services-cards">
                            <Card img={servicesFirst} title={t('services-card.title.first')} subtitle={t('services-card.subtitle.all')} />
                            <Card img={servicesSecond} title={t('services-card.title.second')} subtitle={t('services-card.subtitle.all')} />
                            <Card img={servicesThird} title={t('services-card.title.third')} subtitle={t('services-card.subtitle.all')} />
                        </div>

                        <div className="services-btn">

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

