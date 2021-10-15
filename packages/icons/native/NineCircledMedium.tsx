import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NineCircledMedium({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.36c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36 0 5.232 4.128 9.36 9.36 9.36zM4.56 12c0-4.176 3.264-7.44 7.44-7.44s7.44 3.264 7.44 7.44c0 4.056-3.264 7.44-7.44 7.44S4.56 16.176 4.56 12zm4.176 1.776c.072 1.776 1.536 2.928 3.408 2.928 2.376 0 3.648-1.872 3.624-4.8-.024-2.856-1.368-4.56-3.648-4.56-1.728 0-3.264 1.32-3.264 3.168 0 1.704 1.32 3 2.952 3 .696 0 1.416-.24 1.824-.72h.264c0 1.608-.6 2.256-1.8 2.256-.96 0-1.416-.408-1.488-1.272H8.736zm2.016-2.976v-.744c0-.72.384-1.008 1.32-1.008h.24c.936 0 1.32.288 1.32 1.008v.744c0 .72-.384 1.008-1.32 1.008h-.24c-.936 0-1.32-.288-1.32-1.008z"  /></Svg>;
}

export default NineCircledMedium;