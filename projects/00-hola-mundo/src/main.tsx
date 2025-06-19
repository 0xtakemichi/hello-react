import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/Button'
import './main.css'
import appleIcon from './assets/apple.svg'
import googleIcon from './assets/google.svg'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World</h1>
    <Button onClick={() => console.log('Apple')} icon={appleIcon} > Apple</Button>
    <Button onClick={() => console.log('Google')} icon={googleIcon} > Google</Button>
  </StrictMode>,
)
