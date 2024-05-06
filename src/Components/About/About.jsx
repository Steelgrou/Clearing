import Btn from "../Button/Btn"
import Button from "../Button/Button"
import Card from "../Card/Card"
import { useTranslation } from 'react-i18next'
import "./About.css"
import aboutFirst from '/about-card-first.jpg'
import aboutSecond from '/about-card-second.jpg'
import aboutThird from '/about-card-third.jpg'
const room = {
"title" : "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed "
}



export default function About() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
 
    return (
        <>


            <section className="about">
                <div className="container">
                    <div className="about-wrapper">
                        <h2 className="about-title">{t('about.title')}</h2>
                        <h4 className="about-subtitle">{t('about.subtitle')}</h4>

                        <div className="about-cards">
                            <Card img={aboutFirst} title={t('about-card.title.first')} subtitle={t('about-card.subtitle.all')} />
                            <Card img={aboutSecond} title={t('about-card.title.second')} subtitle={t('about-card.subtitle.all')} />
                            <Card img={aboutThird} title={t('about-card.title.thrid')} subtitle={t('about-card.subtitle.all')} />
                        </div>

                        <div className="about-btn">
                            <Button title={"bars"} />
                            <Btn />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}