import Button from '../Button/Button'
import Call from '../Call/Call'
import './Entrance.css'
import img from "/entrance-right-img.jpg"

export default function Entrance() {


  return (
    <>
      <section className='entrance'>
        <div className="container">
          <div className="entrance-wrapper">
            <div className="entrance-left">
              <h2 className='entrance-title'>Quality cleaning for your home</h2>
              <h3 className='entrance-subtitle'>Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus
                penatibus.</h3>
              <div className="entrance-box">
                <Button /> 
                <Call/>
                
              </div>
            </div>
            <div className="entrance-right">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}