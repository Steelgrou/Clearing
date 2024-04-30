import Button from '../Button/Button'
import Call from '../Call/Call'
import './Entrance.css'
import img from "/entrance-right-img.jpg"
import { useTranslation } from 'react-i18next'

export default function Entrance() {

  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  }
  return (

    <>
      <section className='entrance'>
        <div className="container">
          <div className="entrance-wrapper">
            <div className="entrance-left">
              <h2 className='entrance-title'>{t('entrance.title')}</h2>
              <h3 className='entrance-subtitle'>{t('entrance.subtitle')}</h3>
              <div className="entrance-box">
                <Button />
                <Call />

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