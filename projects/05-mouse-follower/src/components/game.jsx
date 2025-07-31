import { useState } from 'react'

function Game() {
  const [isPlaying, setIsPlaying] = useState(false)

  const style = {
    button: {
      marginTop: '10px',
    },
  }
  return (
    <div>
      <button style={style.button} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play!'}
      </button>
    </div>
  )
}

export default Game