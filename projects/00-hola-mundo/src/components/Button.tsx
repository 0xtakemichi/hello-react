import './Button.css'

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: string }) {
  return (
    <button {...props} className="button">
      {props.icon && <img src={props.icon} alt="" />}
      {props.children}
    </button>
  )
}

export default Button