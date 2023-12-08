import { useMemo } from "react";

import { createPortal } from "react-dom";

import { SnackbarContext } from "../context";

import { useSnackbarService } from "../service";

import { mergeSnackbarOptions } from "../default-values";

import { SNACKBAR_CLASSNAME } from "../classnames";

import type { ISnackbarContext, ISnackbarProps } from "../interfaces";

import "../styles/index.scss";
import { SnackbarMessage } from "./snackbar-message";

const SnackbarProvider = ({
  children,
  ...restOptions
}: ISnackbarProps): JSX.Element => {
  const options = mergeSnackbarOptions(restOptions);

  const { renderData, enqueueSnackbar, dequeueSnackbar } =
    useSnackbarService(options);

  const context = useMemo<ISnackbarContext>(
    () => ({ enqueueSnackbar, dequeueSnackbar }),
    [enqueueSnackbar, dequeueSnackbar]
  );

  return (
    <SnackbarContext.Provider value={context}>
      {createPortal(
        <div className={SNACKBAR_CLASSNAME}>
          {renderData.map((item) => (
            <SnackbarMessage key={item.id} {...item} />
          ))}
        </div>,
        document.body
      )}
      {children}
    </SnackbarContext.Provider>
  );
};

export { SnackbarProvider };
