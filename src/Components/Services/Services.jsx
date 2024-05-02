import Btn from '../Button/Btn'
import Card from '../Card/Card'
import './Services.css'
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
                            <Card title={"House cleaning"} subtitle={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
                            <Card title={"Office cleaning"} subtitle={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
                            <Card title={"Industrial cleaning"} subtitle={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
                        </div>

                        <div className="services-btn">

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

