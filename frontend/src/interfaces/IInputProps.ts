import { ChangeEventHandler } from "react";

export interface IInputProps {
  name: string,
  label: string,
  type: string,
  value?: string | number,
  placeholder: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}