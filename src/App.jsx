// Style
import './App.css'

// Pages
import Homepage from './Pages/Homepage/Homepage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Servicespage from './Pages/Servicespage/Servicespage';
import Contactpage from './Pages/Contactpage/Contactpage';

//Lang
import { useTranslation } from 'react-i18next'

//React-Router-dom
import { Routes, Route } from 'react-router-dom'



export default function App() {

  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Servicespage" element={<Servicespage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
      </Routes>

    </>
  )
}


