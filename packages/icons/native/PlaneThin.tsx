import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PlaneThin({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M9.636 21.432l1.944-1.752-1.176-3.432 3.792-3.768 4.152 7.92 1.296-1.536-2.16-9.672 3.432-3.432c.336-.312.504-.792.504-1.272 0-1.152-.888-1.92-1.92-1.92-.576 0-1.008.264-1.512.792l-3.192 3.144L5.1 4.32 3.612 5.664l7.92 4.128L7.74 13.56l-3.408-1.08-1.752 1.872 4.632 2.52 2.424 4.56zm-6.288-7.2l1.128-1.2 3.408 1.08 4.44-4.44-7.872-4.104.792-.72 9.696 2.184 3.384-3.336c.456-.456.768-.648 1.176-.648.792 0 1.44.576 1.44 1.44 0 .384-.12.72-.36.936l-3.624 3.624 2.16 9.696-.672.792-4.128-7.848-4.464 4.44 1.176 3.408-1.248 1.128-2.208-4.152-4.224-2.28z"  /></Svg>;
}

export default PlaneThin;