import './Contact.css';
import call from '/contact-phone.svg'
import axios from 'axios'
export default function Contact() {

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
                            <h2>Contact Us</h2>
                            <h4>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</h4>
                            <div className="contact-call">
                                <div className="contact-img">
                                    <img className='contact-img__phone' src={call} alt="" />
                                </div>
                                <div className="contatc-number">
                                    <h3>Call us now</h3>
                                    <a href="tel:+998993024512">(414) 567 - 2109</a>
                                </div>
                            </div>
                            <h5>Not convinced yet?</h5>
                            <h6>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</h6>
                            <button>Browse our packages</button>
                        </div>
                        <div className="contact-right">
                            <form id='myForm' onSubmit={sendMessage}>
                                <label htmlFor="text">Full name</label>
                                <input type="text" id='name' required />
                                <label htmlFor="">Phone number</label>
                                <input type="text" id='number' placeholder='+998' required />
                                <label htmlFor="">Adress</label>
                                <input type="text" id='adress' placeholder='Street....' required/>
                                <label htmlFor="">Email</label>
                                <input type="text" id='email' placeholder='......@gmail.com' required />
                                <label htmlFor=""> Requested service</label>
                                <input type="text" id='service' />
                                <label htmlFor="">Day of service</label>
                                <input type="text" id='day' />
                                <label htmlFor="">Add a note</label>
                                <input type="text" id='add' />
                                <button className='btn-grad' type='submit'>Submit message</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}