import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function UnfreezeLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M20.964 21.756l.792-.792-18.72-18.72-.792.792 8.376 8.376-3.144-.024-2.664-2.64-.72.72 2.016 1.968-3.408-.048v1.08l3.408-.024-2.016 1.968.72.72 2.664-2.664 3.384-.024-5.424 5.4.72.72 5.4-5.424-.024 3.384-2.664 2.664.72.72 1.968-2.016-.024 3.408h1.08l-.048-3.408 1.968 2.016.72-.72-2.64-2.664-.024-3.144 8.376 8.376zM8.868 4.692l3.72 3.72.024-1.08 2.64-2.64-.72-.72-1.968 1.992.048-3.384h-1.08l.024 3.384-1.968-1.992-.72.72zm4.872 4.872l.696.696 4.248-4.224-.72-.72-4.224 4.248zm1.848 1.848l3.72 3.72.72-.72-1.992-1.968 3.384.024v-1.08l-3.384.048 1.992-1.968-.72-.72-2.64 2.64-1.08.024z"  /></Svg>;
}

export default UnfreezeLight;