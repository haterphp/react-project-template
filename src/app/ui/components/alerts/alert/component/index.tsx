import { ForwardRefRenderFunction, forwardRef } from "react";
import { makeClassname } from "../../../../common";
import { AlertIcon } from "../../alert-icon";

import {
  ALERT_TITLE_CLASSNAME,
  DESCRIPTION_TITLE_CLASSNAME,
  makeAlertClassname,
} from "../classnames";

import { mergeAlertProps } from "../default-values";

import { IAlertProps } from "../interfaces";

import "../styles/index.scss";

const AlertRenderFunction: ForwardRefRenderFunction<
  HTMLDivElement,
  IAlertProps
> = (props, ref): JSX.Element => {
  const {
    title,
    description,
    color,
    variant,
    className: externalClassname,
    RightContent,
    ...rest
  } = mergeAlertProps(props);

  return (
    <div
      {...rest}
      ref={ref}
      className={makeClassname(
        externalClassname,
        ...makeAlertClassname(variant, color)
      )}
    >
      <AlertIcon color={color} variant={variant} />

      <div className="flex flex-col flex-1 gap-1">
        <h6 className={ALERT_TITLE_CLASSNAME}>{title}</h6>
        {description && (
          <p className={DESCRIPTION_TITLE_CLASSNAME}>{description}</p>
        )}
      </div>

      {RightContent}
    </div>
  );
};

const Alert = forwardRef(AlertRenderFunction);

export { Alert };
