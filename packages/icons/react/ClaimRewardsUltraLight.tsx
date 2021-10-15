import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ClaimRewardsUltraLight({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M5.28 17.844h13.44v-.768h-2.28c2.136-1.416 3.48-3.792 3.48-6.456 0-4.368-3.552-7.92-7.92-7.92s-7.92 3.552-7.92 7.92c0 2.664 1.32 5.016 3.456 6.456H5.28v.768zM2.4 21.3h19.2v-6.36h-.84v5.544H3.24V14.94H2.4v6.36zm2.52-10.68A7.078 7.078 0 0112 3.54a7.078 7.078 0 017.08 7.08c0 2.952-1.824 5.472-4.368 6.456h-5.4c-2.568-.984-4.392-3.504-4.392-6.456zm4.2 1.056c0 1.584 1.032 2.592 2.544 2.736v.936h.672v-.912c1.464-.12 2.496-.984 2.496-2.256 0-1.152-.816-1.824-2.112-1.992l-.384-.048V7.356c1.08.096 1.632.72 1.608 1.848h.768c0-1.416-.96-2.424-2.376-2.544v-.912h-.672v.936c-1.296.144-2.256.984-2.256 2.16 0 1.056.72 1.728 1.92 1.872l.336.048v2.952c-1.176-.12-1.8-.768-1.824-2.04h-.72zm1.008-2.88c0-.816.576-1.32 1.536-1.416v2.688l-.168-.024c-.936-.12-1.368-.504-1.368-1.248zm2.208 4.944v-2.904l.216.024c1.032.12 1.536.528 1.536 1.344 0 .912-.624 1.44-1.752 1.536z"  /></Svg>;
}

export default ClaimRewardsUltraLight;