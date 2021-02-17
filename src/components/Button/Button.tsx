import React from 'react'
import './Button.scss'

//Interface para props
interface InputProps {
    name: string;
    logo: string;
}

function Button(props: InputProps) {
    return (
        <div className="bt">
            <img className="icon-bt" src={props.logo} alt="" />
            {props.name}
        </div>


    )
}

export default Button;