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
                        <Card />
                        <div className="about-btn">
                            <Button />
                            <Button />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}