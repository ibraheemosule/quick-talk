import { ReactElement } from "react";
import { AppProps } from "next/app";

export interface CustomAppProps extends AppProps {}

export interface ILayout {
  children: ReactElement;
}

export interface IHomePage {}
