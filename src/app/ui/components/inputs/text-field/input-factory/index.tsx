import { IHTMLTextAreaProps } from "../interfaces";
import { DefaultInputFactory, InputFactoryFunction } from "../../base-input";
import {
  FormEvent,
  Ref,
  forwardRef,
  useMemo,
  useRef,
} from "react";
import { makeClassname } from "../../../../common";
import { TEXTFIELD_MULTILINE_INPUT_CLASSNAME } from "../classnames";
import { mergeRefs } from "react-merge-refs";

const TextAreaVariant = forwardRef<HTMLTextAreaElement, IHTMLTextAreaProps>(
  (props, ref): JSX.Element => {
    const {
      rows = 1,
      maxRows,
      className: externalClassName,
      onInput,
      ...rest
    } = props;

    const localRef = useRef<HTMLTextAreaElement>();

    const className = useMemo(
      () =>
        makeClassname(externalClassName, TEXTFIELD_MULTILINE_INPUT_CLASSNAME),
      [externalClassName]
    );

    const handleOnInput = (e: FormEvent<HTMLTextAreaElement>): void => {
      if (localRef.current) {
        const textArea = localRef.current;

        const lineHeight = parseInt(textArea.style.lineHeight || "21", 10);
        let lines = textArea.scrollHeight / lineHeight;
        if (e.currentTarget.value === "") lines = 1;

        if (maxRows && lines > maxRows) {
          textArea.style.overflow = "";
        } else {
          textArea.style.overflow = "hidden";

          if (lines > rows) {
            textArea.style.height = 0 + "px";
            textArea.style.height = textArea.scrollHeight + "px";
          } else {
            textArea.style.height = rows * lineHeight + "px";
          }
        }
      }
      onInput && onInput(e);
    };

    return (
      <textarea
        ref={mergeRefs([localRef, ref])}
        rows={rows}
        className={className}
        onInput={handleOnInput}
        {...rest}
      ></textarea>
    );
  }
);

const TextFieldFactory: InputFactoryFunction = (options) => {
  if (options.type === "textarea")
    return (
      <TextAreaVariant
        {...(options as IHTMLTextAreaProps)}
        ref={options.ref as undefined | Ref<HTMLTextAreaElement>}
      />
    );
  return DefaultInputFactory(options);
};

export { TextFieldFactory };
