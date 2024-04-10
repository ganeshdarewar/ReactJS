import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  return (
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div class="container">
        <CurrencyConverter/>
      </div>
    </div>
  )
}

export default App
