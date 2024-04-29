
import { useState, useEffect, useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'
import Entrance from './Components/Entrance/Entrance'
// import { useTranslation } from 'react-i18next'
export default function App() {

  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  }
  return (
    <>
      <Header />
      <Entrance />
      <Contact />
    </>
  )
}


