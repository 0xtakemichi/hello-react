import { useEffect, useState } from 'react'
import Game from './game'

const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        console.log({ enabled })
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event
            console.log(`X=${clientX}, Y=${clientY}`)
            setPosition({ x: clientX, y: clientY })
        }
        if (enabled) {
            window.addEventListener('pointermove', handleMouseMove)
            document.body.classList.toggle('no-cursor', enabled)
            setMounted(true)
        }
        return () => {
            window.removeEventListener('pointermove', handleMouseMove)
            document.body.classList.remove('no-cursor')
            setPosition({ x: 0, y: 0 })
            setMounted(false)
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
            ><span style={{ color: '#fff', fontSize: '20px' }}>👀</span>
            </div>
            <h2>Mouse Follower</h2>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Disable' : 'Enable'} Mouse Follower
            </button>
            { mounted && <Game /> }
        </>
    )
}
export default FollowMouse