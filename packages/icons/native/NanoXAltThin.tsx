import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoXAltThin({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M13.632 21.84h7.128V2.16H13.8v7.608L8.328 4.296 3.24 9.408 13.632 19.8v2.04zM3.912 9.408l4.416-4.44 11.04 11.04c.624.624.912 1.368.912 2.232 0 1.704-1.44 3.12-3.12 3.12a3.126 3.126 0 01-2.232-.936L3.912 9.408zm11.448 8.808c0 .984.792 1.824 1.824 1.824.984 0 1.752-.84 1.752-1.824 0-.984-.792-1.776-1.752-1.776-1.032 0-1.824.792-1.824 1.776zm.144-12.576c0-.984.792-1.776 1.824-1.776.96 0 1.752.792 1.752 1.776 0 .96-.792 1.824-1.752 1.824-1.032 0-1.824-.864-1.824-1.824zm.336 12.576c0-.72.576-1.296 1.344-1.296.696 0 1.272.576 1.272 1.296 0 .72-.576 1.344-1.272 1.344a1.342 1.342 0 01-1.344-1.344zm.144-12.576c0 .72.576 1.344 1.344 1.344.696 0 1.272-.624 1.272-1.344 0-.72-.576-1.296-1.272-1.296-.768 0-1.344.576-1.344 1.296z"  /></Svg>;
}

export default NanoXAltThin;