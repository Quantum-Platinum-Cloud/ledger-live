import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function BlockchainThin({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M3.648 19.152l4.296 2.496L12 19.296l4.056 2.352 4.296-2.496v-4.944L16.536 12l3.816-2.208V4.848l-4.296-2.496L12 4.704 7.944 2.352 3.648 4.848v4.944L7.464 12l-3.816 2.208v4.944zm.48-.288v-4.128l3.6 2.064v4.152l-3.6-2.088zm0-9.36V5.376l3.6 2.064v4.152l-3.6-2.088zm.216 4.872l3.624-2.112 3.6 2.088-3.624 2.088-3.6-2.064zm0-9.36l3.6-2.088 3.6 2.088-3.6 2.064-3.6-2.064zM8.16 20.952V16.8l3.624-2.064v4.128L8.16 20.952zm0-9.336V7.44l3.624-2.064v4.152L8.16 11.616zm.216.384L12 9.888 15.624 12 12 14.112 8.376 12zm3.84 6.864v-4.128L15.84 16.8v4.152l-3.624-2.088zm0-9.336V5.376L15.84 7.44v4.176l-3.624-2.088zm.216 4.824l3.6-2.088 3.624 2.112-3.6 2.064-3.624-2.088zm.024-9.336l3.6-2.088 3.6 2.088-3.6 2.064-3.6-2.064zm3.816 15.936V16.8l3.6-2.064v4.128l-3.6 2.088zm0-9.36V7.44l3.6-2.064v4.128l-3.6 2.088z"  /></Svg>;
}

export default BlockchainThin;