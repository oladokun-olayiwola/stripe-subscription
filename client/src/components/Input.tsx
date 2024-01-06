import React from 'react'
import { InputComponentProps } from '../IRegister'

const Input = ({label, value, type = "text", setValue}: InputComponentProps) => {
  return (
    <div className="input-group mb-3">
        <span className="input-group-text">
            {label}
        </span>
        <input type={type} value ={value} className="form-control" onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

export default Input
