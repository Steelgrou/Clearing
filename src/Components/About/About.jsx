import Btn from "../Button/Btn"
import Button from "../Button/Button"
import Card from "../Card/Card"
import { useTranslation } from 'react-i18next'
import "./About.css"

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
                            <Card title={"1. Schedule online"} subtitle={"Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."} />
                            <Card title={"2. Pay online easily"} subtitle={"Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."} />
                            <Card title={"3. Get your house cleaned"} subtitle={"Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."} />
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