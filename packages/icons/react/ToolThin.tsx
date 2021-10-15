import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolThin({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M4.44 21.36c.432 0 .888-.168 1.272-.528l9.96-9.912c.432.144.936.24 1.416.24 2.352 0 4.272-1.92 4.272-4.248 0-.84-.264-1.728-.768-2.28L17.664 7.56 16.44 6.336l2.928-2.928c-.552-.504-1.44-.768-2.28-.768-2.328 0-4.248 1.92-4.248 4.272 0 .48.096.984.24 1.416l-9.888 9.936c-.384.384-.552.84-.552 1.272 0 1.008.792 1.824 1.8 1.824zm-1.32-1.8c0-.336.12-.672.408-.96L13.656 8.448a3.6 3.6 0 01-.336-1.536c0-2.088 1.704-3.792 3.768-3.792.552 0 1.08.12 1.536.36l-2.856 2.856 1.896 1.896 2.856-2.856c.24.456.36.984.36 1.536 0 2.064-1.704 3.768-3.792 3.768a3.6 3.6 0 01-1.536-.336L5.376 20.496c-.288.264-.6.384-.936.384-.744 0-1.32-.6-1.32-1.32z"  /></Svg>;
}

export default ToolThin;