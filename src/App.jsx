// Style
import './App.css'

// Pages
import About from './Pages/About/About';
import Homepage from './Pages/Homepage/Homepage';

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
        <Route path="/About" element={<About />} />
      </Routes>

    </>
  )
}


