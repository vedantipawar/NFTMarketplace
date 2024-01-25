import React from 'react'
import './App.css';
import InfoSection from './components/InfoSection';
import TopFold from './components/TopFold';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <TopFold />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default App