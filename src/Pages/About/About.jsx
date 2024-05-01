import Btn from "../../Components/Button/Btn"
import Button from "../../Components/Button/Button"
import Card from "../../Components/Card/Card"
import Header from "../../Components/Header/Header"
import "./About.css"

export default function About() {

    return (
        <>
            <Header />
            <section className="about">
                <div className="container">
                    <div className="about-wrapper">
                        <h2 className="about-title">About Us</h2>
                        <h4 className="about-subtitle">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
                            nisi felis non ultrices massa id egestas quam velit pretium nu.</h4>

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