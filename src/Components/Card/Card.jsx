import './Card.css'
import card from '/logo.svg'


export default function Card({ title, subtitle, img }) {


    return (
        <>
            <section id='card'>

                <div className="card-wrapper">
                    <div className="card-box">
                        <img className={card} src={img} alt="error" />
                        <h2>{title}</h2>
                        <h4>{subtitle}</h4>
                    </div>
                </div>



            </section >
        </>
    )
}