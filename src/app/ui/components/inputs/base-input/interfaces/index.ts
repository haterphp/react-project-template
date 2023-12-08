import { HTMLInputTypeAttribute } from "react";
import { PartialRecord } from "../../../../common";
import { InputFactoryFunction } from "../input-factory";

/**
 * Base types
 */

type InputVariant = 'outlined' | 'standard'
type InputIcons = PartialRecord<'start' | 'end', JSX.Element>

/**
 * Base html input props
 */

type HTMLInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IHTMLInputProps extends HTMLInputProps {
    type: Exclude<HTMLInputTypeAttribute, 'button' | 'reset' | 'submit'>
}

/**
 * Finally input props
 */

interface ISpecialInputProps {
    variant: InputVariant
    label?: string
    isError?: boolean
    feedback?: string
    icons?: InputIcons
    InputFactory?: InputFactoryFunction
}

interface IInputProps extends ISpecialInputProps, IHTMLInputProps {}

export type {
    InputVariant,
    InputIcons,
    ISpecialInputProps,
    IInputProps,
    IHTMLInputProps
}