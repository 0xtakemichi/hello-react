import React from 'react'

function BubbleAlert({n}) {
  const getQuantity = (n) => {
    return n > 9 ? '9+' : n;
  }
  return (
    <span className="relative left-2 top-2">
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1.5 text-xs font-medium leading-3 text-white bg-blue-600 rounded-full ring-1 ring-blue-600/20">
            {getQuantity(n)}
        </span>
    </span>
  )
}

export default BubbleAlert