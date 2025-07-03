import React from 'react'
import Carro from './Carro'

function Navbar() {
  return (
    <nav className="flex justify-between items-center text-white p-4">
        <p>Logo</p>
        <Carro/>
    </nav>
  )
}

export default Navbar