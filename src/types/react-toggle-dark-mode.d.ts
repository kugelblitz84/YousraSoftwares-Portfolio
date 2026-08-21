declare module "react-toggle-dark-mode" {
  import type { ButtonHTMLAttributes, CSSProperties, FC } from "react";

  export interface DarkModeSwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    checked: boolean;
    onChange: (checked: boolean) => void;
    size?: number | string;
    style?: CSSProperties;
    moonColor?: string;
    sunColor?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
  }

  export const DarkModeSwitch: FC<DarkModeSwitchProps>;
}
