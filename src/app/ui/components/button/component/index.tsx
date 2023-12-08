import { IconContext, createIconContextPayload } from "../../icon";
import { makeClassname, objectUtilities } from "../../../common";
import { makeButtonClassname, BUTTON_CONTENT_CLASSNAME } from "../classnames";
import { mergeButtonProps } from "../default-value";
import { IButtonProps } from "../interfaces";

import "../styles/index.scss";
import { ForwardRefRenderFunction, forwardRef } from "react";

const { pick, omit } = objectUtilities();

const CUSTOM_BUTTON_PROPS: (keyof IButtonProps)[] = [
  "variant",
  "color",
  "size",
  "icons",
  "isIcon",
];

const DEFAULT_ICONS: Record<"start" | "end", null> = {
  start: null,
  end: null,
};

const ButtonRenderFunction: ForwardRefRenderFunction<
  HTMLButtonElement,
  IButtonProps
> = (props, ref): JSX.Element => {
  const mergedProps = mergeButtonProps(props);

  const buttonProps = pick(mergedProps, "variant", "color", "size", "isIcon");
  const htmlButtonProps = omit(mergedProps, ...CUSTOM_BUTTON_PROPS);

  const { start: startIconJSX, end: endIconJSX } = {
    ...DEFAULT_ICONS,
    ...props.icons,
  };

  return (
    <button
      {...htmlButtonProps}
      ref={ref}
      className={makeClassname(
        props.className,
        "btn",
        ...makeButtonClassname(buttonProps)
      )}
    >
      <IconContext.Provider
        value={createIconContextPayload(mergedProps.color, "normal")}
      >
        {startIconJSX}
        <span className={BUTTON_CONTENT_CLASSNAME}>{props.children}</span>
        {endIconJSX}
      </IconContext.Provider>
    </button>
  );
};

const Button = forwardRef(ButtonRenderFunction);

export { Button };
