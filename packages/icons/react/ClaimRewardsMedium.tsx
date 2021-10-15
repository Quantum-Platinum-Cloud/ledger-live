import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ClaimRewardsMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M5.184 18.36h13.632v-1.68h-1.584c1.92-1.464 3.048-3.72 3.048-6.24 0-4.56-3.72-8.28-8.28-8.28-4.56 0-8.28 3.72-8.28 8.28 0 2.52 1.128 4.776 3.048 6.24H5.184v1.68zM1.68 21.84h20.64v-7.08H20.4v5.28H3.6v-5.28H1.68v7.08zm3.96-11.4c0-3.504 2.856-6.36 6.36-6.36 3.504 0 6.36 2.856 6.36 6.36 0 3.096-2.232 5.664-5.136 6.24h-2.448c-2.904-.576-5.136-3.144-5.136-6.24zm3.312 1.056c-.048 1.416.96 2.496 2.448 2.712v.96h1.2v-.96c1.44-.216 2.472-1.2 2.472-2.4 0-1.176-.816-1.872-2.184-2.064l-1.272-.168c-.72-.096-.984-.288-.984-.84 0-.696.456-.912 1.392-.912 1.056 0 1.32.24 1.296 1.2h1.584c0-1.248-.984-2.256-2.304-2.496v-.96h-1.2v.96c-1.344.216-2.232 1.152-2.232 2.328 0 1.152.72 1.824 1.968 1.968l1.224.144c.84.096 1.128.312 1.128.936 0 .768-.384 1.008-1.488 1.008-1.248 0-1.536-.288-1.536-1.416H8.952z"  /></Svg>;
}

export default ClaimRewardsMedium;