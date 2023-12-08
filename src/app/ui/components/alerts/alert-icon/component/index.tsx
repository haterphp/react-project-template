import { Icon } from "../../../icon";
import { ALERTS_PALETTE } from "../../../../common/colors/palette/alerts";
import { makeClassname } from "../../../../common";

import { makeAlertIconClassname } from "../classnames";
import { IAlertIconProps } from "../interfaces";

import "../styles/index.scss";

import { getIconByColor } from "../icons";

const AlertIcon = (props: IAlertIconProps): JSX.Element => {
  const { variant, color } = props;

  return (
    <div
      className={makeClassname(
        undefined,
        ...makeAlertIconClassname(variant, color)
      )}
    >
      <Icon
        content={getIconByColor(color)}
        options={{ ...props, colors: ALERTS_PALETTE }}
      />
    </div>
  );
};

export { AlertIcon };
