import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function SearchDollarThin({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M15.444 15.804l5.904 5.88.336-.336-5.88-5.904a7.808 7.808 0 002.112-5.328c0-4.296-3.504-7.8-7.8-7.8-4.296 0-7.8 3.504-7.8 7.8 0 4.296 3.504 7.8 7.8 7.8a7.808 7.808 0 005.328-2.112zM2.796 10.116c0-4.032 3.288-7.32 7.32-7.32s7.32 3.288 7.32 7.32-3.288 7.32-7.32 7.32-7.32-3.288-7.32-7.32zm4.488 1.056c.024 1.632 1.056 2.64 2.592 2.76v.912h.48v-.912c1.488-.072 2.52-.912 2.52-2.184 0-1.152-.84-1.824-2.088-1.968l-.432-.048V6.636c1.248.072 1.92.816 1.92 2.064h.48c0-1.464-.936-2.472-2.4-2.544v-.912h-.48v.912c-1.272.12-2.28.936-2.28 2.112 0 1.056.72 1.704 1.92 1.848l.36.048v3.288c-1.296-.12-2.088-.912-2.112-2.28h-.48zm.792-2.904c0-.936.72-1.536 1.8-1.632v3.048l-.312-.048c-1.008-.12-1.488-.552-1.488-1.368zm2.28 5.184v-3.24l.384.048c1.08.12 1.656.6 1.656 1.488 0 1.008-.768 1.632-2.04 1.704z"  /></Svg>;
}

export default SearchDollarThin;