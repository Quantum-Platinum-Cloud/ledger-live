import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function WifiNoneUltraLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M19.68 21.084l.576-.576L2.664 2.916l-.576.576L5.496 6.9a14.895 14.895 0 00-3.408 2.424l.624.624a13.783 13.783 0 013.432-2.4l2.928 2.928a10.348 10.348 0 00-3.936 2.16l.576.648c1.2-1.032 2.544-1.752 4.08-2.088l3.6 3.6A5.394 5.394 0 0012 14.628a5.801 5.801 0 00-3.816 1.416l.576.624A5.002 5.002 0 0112 15.492c1.008 0 1.92.288 2.688.768l.072-.096 4.92 4.92zM8.856 5.676l.744.744a13.129 13.129 0 012.4-.216c3.744 0 6.912 1.44 9.312 3.744l.6-.624A14.164 14.164 0 0012 5.34c-1.08 0-2.136.096-3.144.336zm1.896 13.2L12 20.244l1.248-1.368c-.312-.288-.744-.456-1.248-.456s-.936.168-1.248.456zm2.568-8.736l1.176 1.176c1.416.336 2.688 1.032 3.792 1.992l.576-.672a10.598 10.598 0 00-5.544-2.496z"  /></Svg>;
}

export default WifiNoneUltraLight;