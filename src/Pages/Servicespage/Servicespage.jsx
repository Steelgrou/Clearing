import Btn from "../../Components/Button/Btn"
import Button from "../../Components/Button/Button"
import Card from "../../Components/Card/Card"
import Header from "../../Components/Header/Header"
import "./Servicespage.css"

export default function Servicespage() {

    return (
        <>
            <Header />
            <section className="services">
                <div className="container">
                    <div className="services-wrapper">
                        <h2 className="services-title">Our Services</h2>
                        <Btn />
                        <div className="services-cards">
                            <Card title={"House cleaning"}  subtitle={"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."} />
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