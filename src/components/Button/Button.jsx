import './Button.css'

const Button = ({children, bgColor,textColor,onClick}) => {
    return <button className="btn" onClick={onClick} style={{backgroundColor: bgColor,color : textColor}}>{children}</button>
};


export default Button;