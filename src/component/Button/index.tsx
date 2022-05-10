import React from 'react'
import { ButtonProps } from './interface'
import "./style.css"

export const Button: React.FC<ButtonProps> = ({ children, onClick, type}) => {
    const type_ = type || "default";

    return (
        <button onClick={onClick} className={`btn btn-${type_}`}>{children}</button>
    )
}