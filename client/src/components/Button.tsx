import React from 'react'
import { ButtonComponentProps } from '../Interfaces/IButton'

const Button = ({type = "primary", size = "md", text="Submit", handleClick}: ButtonComponentProps) => (
<button className={`btn btn-${type} btn-${size}`} onClick={handleClick}>{text}</button>
)

export default Button