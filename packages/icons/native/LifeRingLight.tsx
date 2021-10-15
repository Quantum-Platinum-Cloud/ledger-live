import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function LifeRingLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 14.784A2.786 2.786 0 019.216 12 2.791 2.791 0 0112 9.192 2.796 2.796 0 0114.808 12 2.791 2.791 0 0112 14.784zM2.88 12c0 5.088 4.032 9.12 9.12 9.12 5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12zm1.2 0c0-1.992.696-3.816 1.896-5.184L8.88 9.72A3.76 3.76 0 008.136 12c0 .864.264 1.632.744 2.28l-2.904 2.904C4.776 15.816 4.08 13.992 4.08 12zm2.736 6.024L9.72 15.12a3.76 3.76 0 002.28.744 3.76 3.76 0 002.28-.744L17.16 18A7.776 7.776 0 0112 19.92c-1.992 0-3.816-.696-5.184-1.896zm0-12.048C8.184 4.776 10.008 4.08 12 4.08s3.816.696 5.184 1.896L14.28 8.88A3.78 3.78 0 0012 8.112a3.78 3.78 0 00-2.28.768L6.816 5.976zm8.304 8.304a3.78 3.78 0 00.768-2.28 3.78 3.78 0 00-.768-2.28l2.904-2.904c1.2 1.368 1.896 3.192 1.896 5.184A7.87 7.87 0 0118 17.16l-2.88-2.88z"  /></Svg>;
}

export default LifeRingLight;