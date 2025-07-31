import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log({ enabled })
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      console.log(`X=${clientX}, Y=${clientY}`)
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMouseMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} Mouse Follower
      </button>
    </>
  )
}

export default App
