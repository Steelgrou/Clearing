import './Card.css'
import card from '/logo.svg'
import "./Card.css"

export default function Card() {


    return (
        <>
            <section id='card'>

                <div className="card-wrapper">
                    <div className="card-box">

                        <img className='card-img' src={card} alt="" />
                        <h2>1. Schedule online</h2>
                        <h4>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</h4>
                    </div>
                                   

                   
                </div>



            </section >
        </>
    )
}