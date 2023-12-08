import { IHTMLInputProps, IInputProps, ISpecialInputProps } from "../../base-input";

type IHTMLTextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { rows?: number; maxRows?: number };

type Type = IInputProps['type'] | 'textfield'

type SpecialInputProps = Omit<ISpecialInputProps, 'InputFactory'> & { type: Type } 

type HTMLElementProps<T extends SpecialInputProps> = T['type'] extends 'textarea' 
  ? IHTMLTextAreaProps
  : IHTMLInputProps

interface ITextFieldProps extends SpecialInputProps, Omit<HTMLElementProps<SpecialInputProps>, 'type'> {
  rows?: number
  maxRows?: number
}

export type { ITextFieldProps, IHTMLTextAreaProps }