import { deepmerge } from "deepmerge-ts";
import { IInputProps, ISpecialInputProps } from "../interfaces";
import { DefaultInputFactory } from "../input-factory";

type RequiredMergedInputProps = IInputProps & Required<ISpecialInputProps>

const DEFAULT_INPUT_PROPS: Required<ISpecialInputProps> = {
    label: '',
    feedback: '',
    variant: "outlined",
    icons: {},
    isError: false,
    InputFactory: DefaultInputFactory
}

const mergeInputProps = (props: IInputProps): RequiredMergedInputProps => {
    return deepmerge<[Required<ISpecialInputProps>, IInputProps]>(DEFAULT_INPUT_PROPS, props) as RequiredMergedInputProps
}

export { mergeInputProps }