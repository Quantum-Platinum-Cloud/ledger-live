import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EightCircledFinaMedium({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.416 16.704h.048c1.992 0 3.528-1.176 3.528-2.712 0-.936-.552-1.728-1.44-1.992v-.288c.672-.264 1.128-.984 1.128-1.776 0-1.464-1.464-2.592-3.24-2.592h-.024c-1.776 0-3.24 1.128-3.24 2.592 0 .816.48 1.536 1.176 1.8V12c-.888.264-1.464 1.032-1.464 1.992 0 1.536 1.536 2.712 3.528 2.712zM4.2 21.36h6.24c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36H4.2v1.92h6.24c4.176 0 7.44 3.264 7.44 7.44 0 4.056-3.264 7.44-7.44 7.44H4.2v1.92zm4.728-7.152v-.576c0-.6.408-.84 1.416-.84h.24c1.032 0 1.44.24 1.44.84v.576c0 .6-.408.816-1.44.816h-.24c-1.008 0-1.416-.216-1.416-.816zm.096-3.816v-.576c0-.552.36-.768 1.296-.768h.216c.912 0 1.296.216 1.296.768v.576c0 .552-.384.768-1.296.768h-.216c-.936 0-1.296-.216-1.296-.768z"  /></Svg>;
}

export default EightCircledFinaMedium;