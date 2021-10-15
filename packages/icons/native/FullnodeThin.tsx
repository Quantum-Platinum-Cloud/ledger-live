import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeThin({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.12c4.368 0 7.704-1.248 7.704-3.216V6.072c0-1.968-3.216-3.192-7.704-3.192-4.368 0-7.704 1.224-7.704 3.192v11.832c0 1.968 3.264 3.216 7.704 3.216zm-7.224-3.216v-2.712C5.832 16.44 8.568 17.208 12 17.208c3.384 0 6.144-.768 7.224-2.04v2.736c0 1.584-2.952 2.736-7.224 2.736-4.344 0-7.224-1.152-7.224-2.736zm0-3.936v-2.712c1.056 1.272 3.792 2.04 7.224 2.04 3.384 0 6.144-.768 7.224-2.064v2.736c0 1.56-2.952 2.76-7.224 2.76-4.344 0-7.224-1.2-7.224-2.76zm0-3.96V7.32C5.832 8.592 8.568 9.312 12 9.312c3.384 0 6.144-.744 7.224-2.016v2.712c0 1.608-2.952 2.808-7.224 2.808-4.344 0-7.224-1.2-7.224-2.808zm0-3.936C4.776 4.488 7.728 3.36 12 3.36c4.392 0 7.224 1.128 7.224 2.712 0 1.632-2.952 2.76-7.224 2.76-4.344 0-7.224-1.128-7.224-2.76z"  /></Svg>;
}

export default FullnodeThin;