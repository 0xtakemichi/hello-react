import React from 'react'

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-600 mt-20 align-center ">
      <div>
          {props.children}
        </div>
    </div>
  )
}

export default Layout