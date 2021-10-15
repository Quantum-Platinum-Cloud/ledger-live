import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PlaneMedium({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.056 22.32l3.576-3.504-1.032-3.048 1.488-1.488 3.744 7.128 3.024-3.264-1.968-8.664 2.568-2.568c.552-.552.864-1.32.864-2.136 0-1.776-1.392-3.096-3.096-3.096-.84 0-1.608.36-2.352 1.104L14.52 5.112 5.808 3.12l-3.12 3.12L9.72 9.912 8.232 11.4l-3.024-.96-3.528 3.528 5.448 2.976 2.928 5.376zm-5.4-8.784l1.056-1.056 3.024.96 4.008-3.984-7.056-3.672.696-.696 8.712 1.992 3.048-3.024c.408-.408.72-.576 1.08-.576.72 0 1.296.504 1.296 1.296 0 .336-.12.648-.336.864L16.92 8.904l1.968 8.712-.648.696-3.696-7.032-4.008 4.008 1.032 3.024-1.08 1.056-2.04-3.744-3.792-2.088z"  /></Svg>;
}

export default PlaneMedium;