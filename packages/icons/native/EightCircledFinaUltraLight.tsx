import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EightCircledFinaUltraLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.908 16.704h.048c1.896 0 3.216-1.128 3.216-2.616 0-1.008-.624-1.848-1.656-2.208v-.096c.888-.336 1.416-1.08 1.416-1.968 0-1.392-1.248-2.472-2.976-2.472h-.048c-1.728 0-2.976 1.08-2.976 2.472 0 .888.552 1.632 1.416 1.968v.096c-1.032.36-1.632 1.176-1.632 2.208 0 1.488 1.32 2.616 3.192 2.616zM4.068 21h6.864c5.04 0 9-4.104 9-9 0-5.04-3.96-9-9-9H4.068v.84h6.864c4.584 0 8.16 3.576 8.16 8.16 0 4.44-3.576 8.16-8.16 8.16H4.068V21zm4.512-6.84v-.192c0-1.056.792-1.728 2.304-1.728h.096c1.536 0 2.328.672 2.328 1.728v.192c0 1.08-.816 1.752-2.328 1.752h-.096c-1.488 0-2.304-.672-2.304-1.752zm.192-4.224v-.168c0-1.008.744-1.632 2.112-1.632h.096c1.368 0 2.112.624 2.112 1.632v.168c0 .984-.72 1.584-2.112 1.584h-.096c-1.392 0-2.112-.6-2.112-1.584z"  /></Svg>;
}

export default EightCircledFinaUltraLight;