import { makeClassname } from "../../../common";

import { makeChipClassname } from "../classnames";

import { mergeChipProps } from "../default-value";

import type { IChipProps } from "../interfaces";

import "../styles/index.scss";

const Chip = (props: IChipProps): JSX.Element => {
  const {
    label,
    size,
    variant,
    color,
    isRounded,
    className,
    onIconClick,
    onClick,
    ...rest
  } = mergeChipProps(props);

  return (
    <span
      className={makeClassname(
        className,
        ...makeChipClassname({
          variant,
          size,
          color,
          isRounded,
          isHovered: onClick !== undefined,
        })
      )}
      {...rest}
    >
      {label}
    </span>
  );
};

export { Chip };
