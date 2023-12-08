import {
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useMemo,
} from "react";

import { makeIconClassname, makeInnerIconClassname } from "../classnames";
import {
  IIconCreateFunctionPayload,
  IIconProps,
  IconClassnameCreateFunction,
} from "../interfaces";
import { useIconContext } from "../context";

import { makeClassname } from "../../../common";

import "../styles/index.scss";

const IconRenderFunction: ForwardRefRenderFunction<
  HTMLSpanElement,
  IIconProps
> = (props, ref) => {
  const {
    content: ContentIcon,
    className: extenalClassname,
    id,
    color: extenalColor,
    size: extenalSize,
    options,
    ...rest
  } = props;

  const { color: themeIconColor, size: themeIconSize } = useIconContext();

  const color = useMemo(() => {
    return extenalColor ?? themeIconColor ?? "default";
  }, [extenalColor, themeIconColor]);

  const size = useMemo(() => {
    return extenalSize ?? themeIconSize ?? "normal";
  }, [extenalSize, themeIconSize]);

  const className = useCallback<IconClassnameCreateFunction>(
    (options) => {
      return makeClassname(
        undefined,
        ...makeInnerIconClassname(color, options)
      );
    },
    [color, size]
  );

  const paylaod = useMemo<IIconCreateFunctionPayload>(
    () => ({
      id,
      className,
      options,
    }),
    [id, className, options]
  );

  return (
    <span
      className={makeClassname(extenalClassname, ...makeIconClassname(size))}
      ref={ref}
      {...rest}
    >
      <ContentIcon {...paylaod} />
    </span>
  );
};

const Icon = forwardRef(IconRenderFunction);

export { Icon };
