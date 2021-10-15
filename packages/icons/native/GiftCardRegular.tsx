import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function GiftCardRegular({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M4.68 20.784h14.64c1.104 0 1.92-.816 1.92-1.92v-8.88c0-1.104-.816-1.92-1.92-1.92h-.96c.432-.504.624-1.152.624-1.752 0-1.656-1.344-3.096-3.072-3.096-.552 0-1.128.144-1.584.432-.792.48-1.416 1.344-1.92 2.328L12 6.768l-.408-.792c-.504-.984-1.128-1.848-1.92-2.328-.456-.288-1.032-.432-1.584-.432-1.728 0-3.072 1.44-3.072 3.096 0 .6.192 1.248.624 1.752h-.96c-1.104 0-1.92.816-1.92 1.92v8.88c0 1.104.816 1.92 1.92 1.92zm-.36-1.872v-5.208h15.36v5.208c0 .24-.144.408-.384.408H4.728c-.264 0-.408-.168-.408-.408zm0-7.128V9.936c0-.264.144-.408.408-.408h14.568c.24 0 .384.144.384.408v1.848H4.32zm1.56 5.688h3.6v-1.92h-3.6v1.92zm.528-11.16c0-.912.72-1.728 1.68-1.728 1.104 0 1.752 1.008 2.28 2.016l.816 1.56H9.408c-.792 0-1.632-.024-2.232-.408-.552-.312-.768-.912-.768-1.44zm6.408 1.848l.816-1.56c.528-1.008 1.176-2.016 2.28-2.016.96 0 1.68.816 1.68 1.728 0 .528-.216 1.128-.768 1.44-.576.384-1.44.408-2.232.408h-1.776z"  /></Svg>;
}

export default GiftCardRegular;