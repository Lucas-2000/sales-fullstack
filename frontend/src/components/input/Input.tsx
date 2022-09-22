import React from 'react'
import { IInputProps } from '../../interfaces/IInputProps'
import { InputStyled, Label } from './styles'

const Input = ({ name, label, type, value, placeholder, onChange }:IInputProps) => {
  return (
    <>
      <Label htmlFor={name}>
        {label}
      </Label>
      <InputStyled
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  )
}

export default Input