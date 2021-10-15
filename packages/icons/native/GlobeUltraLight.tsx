import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function GlobeUltraLight({
  size = 16,
  color = "palette.neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21c5.088 0 9-4.104 9-9 0-5.04-3.936-9-9-9s-9 3.96-9 9 3.936 9 9 9zm-8.184-8.664h3.192c.024 1.632.288 3.12.744 4.392H5.256c-.864-1.248-1.368-2.76-1.44-4.392zm0-.672c.072-1.656.576-3.144 1.416-4.392h2.52c-.456 1.272-.72 2.76-.744 4.392H3.816zM5.76 6.576a7.933 7.933 0 014.128-2.568c-.744.576-1.392 1.464-1.872 2.568H5.76zm.024 10.848h2.232c.48 1.104 1.128 1.992 1.872 2.568-1.632-.432-3.048-1.32-4.104-2.568zm1.92-5.088h3.96v4.392H8.448c-.432-1.248-.696-2.76-.744-4.392zm0-.672c.024-1.656.312-3.144.744-4.392h3.216v4.392h-3.96zm1.032-5.088c.72-1.608 1.752-2.64 2.928-2.808v2.808H8.736zm0 10.848h2.928v2.808c-1.176-.168-2.208-1.224-2.928-2.808zm3.6 2.808v-2.808h2.928c-.72 1.584-1.752 2.64-2.928 2.808zm0-3.504v-4.392h3.96c-.048 1.632-.312 3.144-.744 4.392h-3.216zm0-5.064V7.272h3.216c.432 1.248.72 2.736.744 4.392h-3.96zm0-5.088V3.768c1.176.168 2.208 1.2 2.928 2.808h-2.928zm1.776-2.568a7.933 7.933 0 014.128 2.568h-2.256c-.48-1.104-1.128-1.992-1.872-2.568zm.024 15.96c.744-.576 1.368-1.44 1.848-2.544h2.208c-1.056 1.224-2.448 2.136-4.056 2.544zm2.112-3.24c.456-1.272.72-2.76.744-4.392h3.192a8.347 8.347 0 01-1.464 4.392h-2.472zm0-9.456h2.52c.84 1.248 1.344 2.736 1.416 4.392h-3.192c-.024-1.632-.288-3.12-.744-4.392z"  /></Svg>;
}

export default GlobeUltraLight;