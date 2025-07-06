import React from 'react'
import Carro from './Carro'

function Navbar({carro}) {
  return (
    <nav className="flex justify-between items-center text-white p-4">
        <p>Logo</p>
        <Carro carro={carro} />
    </nav>
  )
}

export default Navbar