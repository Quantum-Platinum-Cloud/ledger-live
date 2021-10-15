import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkMedium({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M9.936 14.088c2.016 1.896 5.136 1.944 7.104-.024l3.216-3.216c1.968-1.968 1.968-5.16 0-7.104-1.944-1.968-5.112-1.944-7.08 0l-2.4 2.352 1.416 1.464 2.424-2.376c1.608-1.584 2.616-1.584 4.2 0 1.608 1.608 1.608 2.616 0 4.2l-3.24 3.24c-1.608 1.632-2.664 1.656-4.296.096l-.696-.672-1.32 1.392.672.648zm-6.192 6.168c1.944 1.968 5.112 1.944 7.08 0l2.4-2.352-1.416-1.464-2.424 2.376c-1.608 1.584-2.616 1.584-4.2 0-1.608-1.608-1.608-2.616 0-4.2l3.24-3.24c1.608-1.632 2.664-1.656 4.296-.096l.696.672 1.32-1.392-.672-.648c-2.016-1.896-5.136-1.944-7.104.024l-3.216 3.216c-1.968 1.968-1.968 5.16 0 7.104z"  /></Svg>;
}

export default LinkMedium;