import { IconCreateFunction } from "../../../components";

const CloseIcon: IconCreateFunction = ({ className, id }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="-0.5 0 25 25"
      id={id}
      className={className({ stroke: true })}
    >
      <path
        d="M3 21.32L21 3.32001"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 3.32001L21 21.32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export { CloseIcon };
