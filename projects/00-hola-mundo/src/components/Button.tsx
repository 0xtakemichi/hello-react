// Button.tsx
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string
}

function Button({ children, className, icon, ...props }: ButtonProps) {
  return (
    <button 
    {...props}
    className={`button ${className}`.trim()}>
      {icon && <img src={icon} alt="" className="button__icon" />}
      {children}
    </button>
  )
}

export default Button