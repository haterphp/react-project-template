import { ForwardRefRenderFunction, forwardRef } from "react";
import { BaseInput } from "../../base-input";
import { TextFieldFactory } from "../input-factory";
import { ITextFieldProps } from "../interfaces";

import "../styles/index.scss";

const TextFieldRenderFuntion: ForwardRefRenderFunction<
  HTMLInputElement,
  ITextFieldProps
> = (props, ref): JSX.Element => {
  return <BaseInput {...props} InputFactory={TextFieldFactory} ref={ref} />;
};

const TextField = forwardRef(TextFieldRenderFuntion);

export { TextField };
