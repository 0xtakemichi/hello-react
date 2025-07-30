import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('App mounted')
  }, [])

  return (
    <>
      <h1>Mouse Follower</h1>
    </>
  )
}

export default App
