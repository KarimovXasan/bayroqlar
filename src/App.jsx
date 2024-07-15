import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar'
import Countries from './components/Countries'
import { Route, Routes } from 'react-router-dom'
import CountryDetail from './pages/CountryDetail'

const App = () => {
  return (
    <div className='dark:text-white dark:bg-dark min-h-screen'>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Countries/>} />
        <Route path='/countries/:name' element={<CountryDetail/>} />
      </Routes>
    </main>
    </div>
  )
}

export default App