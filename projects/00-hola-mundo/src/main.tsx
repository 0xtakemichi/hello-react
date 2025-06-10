import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import apple from './assets/apple.svg'
import google from './assets/google.svg'

// PascalCase para nombres de componentes
const Button = ({text, icon}: {text: string, icon: string}) => {
  return (
    <button>
      <img src={icon} alt="apple" />
      <span>{text}</span>
    </button>
  )
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World</h1>
    <Button text="Apple" icon={apple} />
    <Button text="Google" icon={google} />
  </StrictMode>,
)
