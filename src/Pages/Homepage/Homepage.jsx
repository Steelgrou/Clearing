import About from "../../Components/About/About"
import Contact from "../../Components/Contact/Contact"
import Entrance from "../../Components/Entrance/Entrance"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

import "./Homepage.css"

export default function Homepage() {

    return (
        <>
            <Header />
            <Entrance />
            <About/>
            <Contact />
            <Footer/>
        </>
    )
}