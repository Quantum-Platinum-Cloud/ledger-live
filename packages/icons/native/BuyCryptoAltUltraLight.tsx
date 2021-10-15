import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function BuyCryptoAltUltraLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21c5.04 0 9-4.104 9-9 0-5.04-3.96-9-9-9s-9 3.96-9 9 3.96 9 9 9zm-8.16-9c0-4.584 3.6-8.16 8.16-8.16 4.584 0 8.16 3.576 8.16 8.16 0 4.44-3.576 8.16-8.16 8.16-4.56 0-8.16-3.6-8.16-8.16zm4.512 1.416c.024 1.968 1.368 3.264 3.312 3.408v1.152h.696V16.8c1.8-.12 3.12-1.2 3.12-2.784 0-1.392-1.032-2.208-2.616-2.424l-.504-.072v-3.6c1.392.12 2.136.936 2.136 2.352h.816c0-1.728-1.176-2.976-2.952-3.12V5.976h-.696v1.176c-1.656.12-2.952 1.152-2.952 2.64 0 1.344.912 2.16 2.376 2.328l.576.072v3.864c-1.608-.12-2.472-1.008-2.496-2.64h-.816zm1.152-3.672c0-1.08.864-1.752 2.16-1.848v3.552l-.36-.048c-1.2-.144-1.8-.672-1.8-1.656zm2.856 6.312v-3.768l.288.024c1.32.168 2.016.696 2.016 1.752 0 1.176-.864 1.872-2.304 1.992z"  /></Svg>;
}

export default BuyCryptoAltUltraLight;