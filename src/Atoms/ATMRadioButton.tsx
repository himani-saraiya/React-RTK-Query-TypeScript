import React from 'react'

export type RadioButtonProps={
    type:string,
    name:string,
    value:string,
    checked?:Boolean
}
const ATMRadioButton : React.FC<RadioButtonProps> = ({ type, name, value})=> {

  return (
    <div>
        <input
        type={type}
        name={name}
        value={value}
        />
    </div>
  )
}

export default ATMRadioButton