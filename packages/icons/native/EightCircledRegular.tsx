import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EightCircledRegular({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.24c5.184 0 9.24-4.2 9.24-9.24 0-5.16-4.08-9.24-9.24-9.24S2.76 6.84 2.76 12s4.08 9.24 9.24 9.24zM4.32 12c0-4.32 3.384-7.68 7.68-7.68 4.32 0 7.68 3.36 7.68 7.68 0 4.176-3.36 7.68-7.68 7.68-4.296 0-7.68-3.384-7.68-7.68zm4.248 2.016c0 1.536 1.464 2.688 3.408 2.688h.048c1.968 0 3.432-1.152 3.432-2.688 0-.96-.576-1.752-1.512-2.04v-.24c.744-.288 1.224-1.008 1.224-1.848 0-1.44-1.392-2.544-3.168-2.544h-.024c-1.752 0-3.144 1.104-3.144 2.544 0 .864.48 1.584 1.248 1.872v.216c-.936.264-1.512 1.08-1.512 2.04zm1.632.168v-.432c0-.768.552-1.152 1.728-1.152h.192c1.2 0 1.728.384 1.728 1.152v.432c0 .768-.552 1.128-1.728 1.128h-.192c-1.176 0-1.728-.36-1.728-1.128zm.144-3.936v-.456c0-.696.48-1.056 1.56-1.056h.168c1.08 0 1.584.36 1.584 1.056v.456c0 .696-.504 1.032-1.584 1.032h-.168c-1.08 0-1.56-.336-1.56-1.032z"  /></Svg>;
}

export default EightCircledRegular;