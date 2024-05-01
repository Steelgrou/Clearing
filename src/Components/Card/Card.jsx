import './Card.css'
import card from '/logo.svg'


export default function Card({ title, subtitle }) {


    return (
        <>
            <section id='card'>

                <div className="card-wrapper">
                    <div className="card-box">
                        <img className='card-img' src={card} alt="" />
                        <h2>{title}</h2>
                        <h4>{subtitle}</h4>
                    </div>
                </div>



            </section >
        </>
    )
}