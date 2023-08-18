import React, { FC, HTMLAttributes } from "react";
import "./switch.styles.css";

export type SwitchProps = HTMLAttributes<HTMLSpanElement> & {
  on?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: (event: boolean) => void;
};

const Switch: FC<SwitchProps> = ({
  on,
  className,
  ariaLabel = "",
  onClick,
  ...props
}) => {
  const btnClassName = [
    className,
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label aria-label={ariaLabel || "Toggle"} style={{ display: "block" }}>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={() => {
          console.log("onChange");
        }}
        onClick={onClick}
        data-testid="toggle-input"
      />
      <span className={btnClassName} {...props} />
    </label>
  );
};

export { Switch };
