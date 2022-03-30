import { ThemeType } from "../styles/theme";

export interface IStyle {
  theme: ThemeType;
}

export interface GlobalProps extends IStyle {}
