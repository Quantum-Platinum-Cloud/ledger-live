import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function GroupUltraLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M5.904 17.736v1.776h12.192v-1.776c0-2.664-2.088-4.584-4.512-4.584h-3.168c-2.544 0-4.512 2.04-4.512 4.584zM1.68 19.512h.84v-1.416c0-1.176.72-2.016 1.8-2.184.096-.312.216-.576.36-.84-1.632.024-3 1.368-3 3.216v1.224zm.192-9.24A2.796 2.796 0 004.68 13.08c1.56 0 2.832-1.248 2.832-2.808A2.837 2.837 0 004.68 7.44c-1.56 0-2.808 1.272-2.808 2.832zm.744 0c0-1.152.912-2.064 2.064-2.064 1.152 0 2.064.912 2.064 2.064a2.049 2.049 0 01-2.064 2.064 2.049 2.049 0 01-2.064-2.064zm4.128 8.472v-1.272c0-1.968 1.512-3.504 3.576-3.504h3.36c2.064 0 3.576 1.536 3.576 3.504v1.272H6.744zM8.496 7.968c0 1.92 1.584 3.48 3.504 3.48s3.504-1.56 3.504-3.48S13.92 4.488 12 4.488s-3.504 1.56-3.504 3.48zm.816 0c0-1.488 1.2-2.688 2.688-2.688 1.488 0 2.712 1.2 2.712 2.688 0 1.488-1.224 2.688-2.712 2.688a2.684 2.684 0 01-2.688-2.688zm7.2 2.304a2.796 2.796 0 002.808 2.808c1.56 0 2.832-1.248 2.832-2.808A2.837 2.837 0 0019.32 7.44c-1.56 0-2.808 1.272-2.808 2.832zm.744 0c0-1.152.912-2.064 2.064-2.064 1.152 0 2.064.912 2.064 2.064a2.049 2.049 0 01-2.064 2.064 2.049 2.049 0 01-2.064-2.064zm2.064 4.8c.144.264.264.528.36.84 1.08.168 1.8 1.008 1.8 2.184v1.416h.84v-1.224c0-1.848-1.344-3.192-3-3.216z"  /></Svg>;
}

export default GroupUltraLight;