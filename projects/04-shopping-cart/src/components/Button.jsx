import React from 'react'

function Button(props) {
  return (
    <button 
        className="bg-blue-500 text-white p-2 mt-2 rounded-lg cursor-pointer hover:bg-blue-600"
        {...props} 
    />
  )
}

export default Button