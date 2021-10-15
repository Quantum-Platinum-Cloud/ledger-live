import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeSyncLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.74 20.616c.312 0 .624 0 .912-.024l-1.176-1.2c-.264 0-.552-.024-.792-.024-3.384-.144-5.448-1.056-5.448-2.256V15.12c1.2 1.032 3.6 1.608 6.504 1.608.384 0 .768 0 1.128-.024l1.008-.936.744.672c1.512-.24 2.784-.672 3.624-1.272v.288l1.2-1.2v-8.64c0-2.208-3.264-3.48-7.704-3.48-4.32 0-7.704 1.272-7.704 3.48v11.496c0 2.208 3.336 3.576 7.704 3.504zm-6.504-7.344v-1.968c1.2 1.032 3.6 1.632 6.504 1.632 2.856 0 5.28-.6 6.504-1.656v1.992c0 1.656-3.6 2.376-6.504 2.376-4.032 0-6.504-1.032-6.504-2.376zm0-3.84V7.488c1.2 1.032 3.6 1.584 6.504 1.584 2.856 0 5.28-.576 6.504-1.608v1.968c0 1.368-2.544 2.424-6.504 2.424-4.032 0-6.504-1.056-6.504-2.424zm0-3.816c0-1.296 2.496-2.28 6.504-2.28 4.104 0 6.504.984 6.504 2.28 0 1.368-2.544 2.376-6.504 2.376-4.032 0-6.504-.984-6.504-2.376zm7.92 12.984l3.24 3.264 5.568-5.568-.84-.84-4.728 4.704-2.4-2.4-.84.84z"  /></Svg>;
}

export default FullnodeSyncLight;