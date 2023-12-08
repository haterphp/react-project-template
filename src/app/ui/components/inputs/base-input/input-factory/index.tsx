import { IHTMLInputProps } from "../interfaces";

type InputFactoryFunction = (options: IHTMLInputProps) => JSX.Element;

const DefaultInputFactory: InputFactoryFunction = (options) => {
  return <input {...options} />;
};

export type { InputFactoryFunction };
export { DefaultInputFactory };
