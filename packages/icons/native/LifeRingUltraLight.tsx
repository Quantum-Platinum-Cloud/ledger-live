import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function LifeRingUltraLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 15.072A3.063 3.063 0 018.928 12 3.063 3.063 0 0112 8.928 3.063 3.063 0 0115.072 12 3.063 3.063 0 0112 15.072zM3 12c0 5.04 3.96 9 9 9s9-4.104 9-9c0-5.04-3.96-9-9-9s-9 3.96-9 9zm.84 0c0-2.136.768-4.056 2.064-5.496L9 9.6a3.808 3.808 0 00-.864 2.4c0 .912.336 1.752.864 2.4l-3.072 3.072A8.106 8.106 0 013.84 12zm2.664-6.096C7.944 4.608 9.864 3.84 12 3.84c2.136 0 4.056.768 5.496 2.064L14.4 9a3.808 3.808 0 00-2.4-.864c-.912 0-1.752.336-2.4.864L6.504 5.904zm.024 12.168L9.6 15a3.808 3.808 0 002.4.864c.912 0 1.752-.336 2.4-.864l3.072 3.072A8.152 8.152 0 0112 20.16a8.106 8.106 0 01-5.472-2.088zM15 14.4a3.808 3.808 0 00.864-2.4c0-.912-.336-1.752-.864-2.4l3.096-3.096c1.296 1.44 2.064 3.36 2.064 5.496a8.244 8.244 0 01-2.088 5.472L15 14.4z"  /></Svg>;
}

export default LifeRingUltraLight;