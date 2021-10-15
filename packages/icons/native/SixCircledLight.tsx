import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.12c5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12 0 5.088 4.032 9.12 9.12 9.12zM4.08 12c0-4.44 3.48-7.92 7.92-7.92 4.44 0 7.92 3.48 7.92 7.92 0 4.32-3.48 7.92-7.92 7.92-4.44 0-7.92-3.48-7.92-7.92zm4.392.144c.024 2.856 1.32 4.56 3.504 4.56 1.848 0 3.144-1.32 3.144-3.096s-1.296-3.096-3-3.096c-1.056 0-1.944.552-2.304 1.416h-.168C9.624 9.912 10.128 8.4 12 8.4c1.128 0 1.824.552 1.968 1.608h1.128c-.24-1.632-1.392-2.664-3.072-2.664-2.28 0-3.576 1.872-3.552 4.8zm1.44 1.632v-.408c0-1.128.672-1.824 1.968-1.824h.144c1.248 0 1.944.672 1.944 1.824v.408c0 1.152-.696 1.824-1.944 1.824h-.144c-1.296 0-1.968-.744-1.968-1.824z"  /></Svg>;
}

export default SixCircledLight;