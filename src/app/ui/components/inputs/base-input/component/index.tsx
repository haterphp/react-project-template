import { makeClassname } from "../../../../common";

import { IInputProps } from "../interfaces";
import { mergeInputProps } from "../default-values";

import {
  INPUT_FEEDBACK_CLASSNAME,
  INPUT_GROUP_CLASSNAME,
  INPUT_GROUP_FAILED_CLASSNAME,
  INPUT_GROUP_FOCUSED_CLASSNAME,
  INPUT_LABEL_CLASSNAME,
  INNER_INPUT_CLASSNAME,
  makeInputClassname,
  makeInputIconClassname,
} from "../classnames";

import { IconContext, createIconContextPayload } from "../../../icon";

import {
  FocusEvent,
  ForwardRefRenderFunction,
  MouseEvent,
  forwardRef,
  useRef,
  useState,
} from "react";
import { mergeRefs } from "react-merge-refs";

import "../styles/index.scss";

const InputIcon = (
  position: "start" | "end",
  icon?: JSX.Element
): JSX.Element | null => {
  if (icon === undefined) return null;
  return (
    <span
      className={makeClassname(undefined, ...makeInputIconClassname(position))}
    >
      {icon}
    </span>
  );
};

const BaseInputRenderFuntion: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputProps
> = (props, ref): JSX.Element => {
  const {
    label,
    feedback,
    variant,
    isError,
    icons,
    InputFactory,
    className = undefined,
    onClick,
    onFocus,
    onBlur,
    ...restInputProps
  } = mergeInputProps(props);

  const localRef = useRef<HTMLInputElement>();
  const [isFocus, setIsFocus] = useState(false);

  const handleOnClick = (e: MouseEvent<HTMLInputElement>): void => {
    if (localRef.current) localRef.current.focus();
    onClick && onClick(e);
  };

  const handleOnToggleFocusState =
    (
      state: "focus" | "blur",
      externalHandler?: (e: FocusEvent<HTMLInputElement>) => void
    ) =>
    (e: FocusEvent<HTMLInputElement>): void => {
      if (state === "focus") setIsFocus(true);
      else setIsFocus(false);

      externalHandler && externalHandler(e);
    };

  return (
    <div
      className={makeClassname(
        className,
        INPUT_GROUP_CLASSNAME,
        isError && INPUT_GROUP_FAILED_CLASSNAME,
        !isError && isFocus && INPUT_GROUP_FOCUSED_CLASSNAME
      )}
    >
      {label && <label className={INPUT_LABEL_CLASSNAME}>{label}</label>}
      <div
        className={makeClassname(undefined, ...makeInputClassname(variant))}
        onClick={handleOnClick}
      >
        <IconContext.Provider
          value={createIconContextPayload(undefined, "small")}
        >
          {InputIcon("start", icons.start)}
          {InputFactory({
            ...restInputProps,
            ref: mergeRefs([localRef, ref]),
            onFocus: handleOnToggleFocusState("focus", onFocus),
            onBlur: handleOnToggleFocusState("blur", onBlur),
            className: INNER_INPUT_CLASSNAME,
          })}
          {InputIcon("end", icons.end)}
        </IconContext.Provider>
      </div>
      {feedback && <span className={INPUT_FEEDBACK_CLASSNAME}>{feedback}</span>}
    </div>
  );
};

const BaseInput = forwardRef(BaseInputRenderFuntion);

export { BaseInput };
