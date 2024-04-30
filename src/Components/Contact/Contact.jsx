import './Contact.css';
import call from '/contact-phone.svg'
import axios from 'axios'
import { useTranslation } from 'react-i18next'


export default function Contact() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLaungage = event.target.value;
        i18n.changeLanguage(selectedLaungage);
    }
    // Send message
    const sendMessage = (event) => {
        event.preventDefault();
        const token = "6807646236:AAGeUZUjG8k_owEhXgSmLi_yZDMzbLXw4cQ";
        const chatID = 806346535;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const adress = document.getElementById("adress").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const day = document.getElementById("day").value;
        const add = document.getElementById("add").value;

        const messageContent = `ID: ${name}\nFull name: ${number}\nPhone number: ${adress}\nAddress: ${email}\nEmail: ${service}\nDay of service: ${day}\nAdd a note: ${add}`
        axios({
            url: url,
            method: 'POST',
            data: {
                "chat_id": chatID,
                "text": messageContent,

            }
        }).then((res) => {
            document.getElementById("myForm").reset();
            alert("Успешно отправлено")
        }).catch((error) => {
            console.log("Что то пошло не так!");
        })
    }
    return (
        <>
            <section className='contact'>
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-left">
                            <h2 className='contact-title'>{t('contact.title')}</h2>
                            <h4 className='contact-subtitle'>{t('contact.subtitle')}</h4>
                            <div className="contact-call">
                                <div className="contact-img">
                                    <img className='contact-img__phone' src={call} alt="" />
                                </div>
                                <div className="contact-number">
                                    <h3>{t('contact.number')}</h3>
                                    <a href="tel:+998993024512">(414) 567 - 2109</a>

                                </div>

                            </div>
                            <h5 className='contact-quest'>{t('contact.quest')}</h5>
                            <h6 className='contact-desc'>{t('contact.desc')}</h6>
                            <button className='contact-btn'>{t('contact.btn')}</button>
                        </div>
                        <div className="contact-right">
                            <form id='myForm' onSubmit={sendMessage}>

                                <div className="div">
                                    <label htmlFor="text">{t('contact.fullname')}</label>
                                    <input type="text" id='name' required />
                                </div>

                                <div className="div">
                                    <label htmlFor="">{t('contact.phone')}</label>
                                    <input type="text" id='number' placeholder='+998' required />
                                </div>

                                <div className="div">
                                    <label htmlFor="">{t('contact.address')}</label>
                                    <input type="text" id='adress' placeholder={t('contact.placeholder-address')} required />
                                </div>
                                <div className="div">
                                    <label htmlFor="">{t('contact.email')}</label>
                                    <input type="text" id='email' placeholder={t('contact.placeholder-email')} required />
                                </div>
                                <div className="div">
                                    <label htmlFor=""> {t('contact.request')}</label>
                                    <input type="text" id='service' />
                                </div>
                                <div className="div">
                                    <label htmlFor="">{t('contact.service')}</label>
                                    <input type="text" id='day' />
                                </div>
                                <div className="btn">
                                    <label htmlFor="">{t('contact.add')}</label>
                                    <input type="text" id='add' />
                                </div>
                                <button className='btn-grad' type='submit'>{t('contact.submit')}</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}