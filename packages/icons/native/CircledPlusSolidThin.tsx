import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledPlusSolidThin({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 20.88c4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88 0 4.968 3.912 8.88 8.88 8.88zm-5.376-8.64v-.48h5.136V6.624h.48v5.136h5.136v.48H12.24v5.136h-.48V12.24H6.624z"  /></Svg>;
}

export default CircledPlusSolidThin;