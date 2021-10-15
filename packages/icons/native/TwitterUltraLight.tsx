import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function TwitterUltraLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M8.172 20.4c3.768 0 7.008-1.584 8.976-3.96 1.992-2.328 3.096-5.28 3.096-8.112 0-.24 0-.408-.048-.528.84-.6 1.56-1.344 2.136-2.232-.792.36-1.608.6-2.4.696a4.1 4.1 0 001.848-2.352 8.82 8.82 0 01-2.712 1.032c-.84-.912-1.872-1.344-3.12-1.344-2.304 0-4.176 1.92-4.176 4.224 0 .336.024.648.072.984-3.456-.144-6.6-1.8-8.712-4.44-.408.672-.624 1.392-.624 2.136 0 1.512.648 2.688 1.896 3.552a4.21 4.21 0 01-1.896-.552v.072c.024 2.184 2.04 3.984 2.976 4.224-.24.048-.48.072-.72.072-.216 0-.48-.048-.768-.072.552 1.68 2.088 2.928 3.984 2.928-1.56 1.2-3.336 1.824-5.304 1.824-.36 0-.696-.024-1.008-.048C3.636 19.752 5.796 20.4 8.172 20.4z"  /></Svg>;
}

export default TwitterUltraLight;