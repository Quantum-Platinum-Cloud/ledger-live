import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PlaneRegular({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M9.948 22.092l3.168-3.072-1.056-3.12 2.04-2.064 3.864 7.32 2.592-2.832L18.54 9.42l2.784-2.784c.48-.504.768-1.2.768-1.92 0-1.632-1.272-2.808-2.808-2.808-.768 0-1.44.336-2.136 1.032l-2.544 2.52-8.976-2.04-2.712 2.688L10.164 9.9l-2.04 2.04-3.144-.984-3.072 3.096 5.232 2.88 2.808 5.16zm-5.616-8.376l1.08-1.104 3.12 1.008 4.104-4.104-7.248-3.792.72-.696 8.952 2.04 3.12-3.096c.432-.432.744-.6 1.104-.6.744 0 1.344.528 1.344 1.344 0 .336-.12.648-.336.864l-3.36 3.36 2.016 8.952-.648.72-3.816-7.224-4.128 4.104 1.08 3.12-1.128 1.08-2.088-3.84-3.888-2.136z"  /></Svg>;
}

export default PlaneRegular;