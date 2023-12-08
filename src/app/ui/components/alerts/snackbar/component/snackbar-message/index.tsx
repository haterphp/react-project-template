import {
  SNACKBAR_MESSAGE_CLASSNAME,
  SNACKBAR_MESSAGE_ICON_CLASSNAME,
} from "../../classnames";

import { makeClassname } from "../../../../../common";

import { Alert } from "../../../alert";

import type { ISnackbarMessage } from "../../interfaces";
import { useCallback, useEffect, useRef } from "react";
import { Icon } from "../../../../icon";
import { CloseIcon } from "../../../../../assets/icons";

const slideAnimation = (
  target: HTMLDivElement,
  isReverse = false
): Animation => {
  const keyframes = [
    { transform: "translateX(-110%)" },
    { transform: "translateX(0)" },
  ];

  return target.animate(keyframes, {
    duration: 150,
    fill: "forwards",
    direction: isReverse ? "reverse" : "normal",
  });
};

const SnackbarMessage = (props: ISnackbarMessage): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleOnClose = useCallback((): void => {
    if (ref.current !== null) {
      slideAnimation(ref.current, true).finished.then(props.onCloseCallback);
    }
  }, [ref.current]);

  useEffect(() => {
    if (ref.current !== null) void slideAnimation(ref.current);
    const timeout = setTimeout(handleOnClose, props.options.duration);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Alert
      ref={ref}
      title={props.message}
      color={props.options.color}
      variant={props.options.variant}
      RightContent={
        <Icon
          onClick={handleOnClose}
          className={SNACKBAR_MESSAGE_ICON_CLASSNAME}
          content={CloseIcon}
        />
      }
      className={makeClassname(SNACKBAR_MESSAGE_CLASSNAME)}
    />
  );
};

export { SnackbarMessage };
