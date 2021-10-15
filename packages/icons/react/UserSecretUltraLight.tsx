import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function UserSecretUltraLight({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M4.668 19.344v2.016h14.664v-2.016c0-2.112-1.104-3.888-2.88-4.728v-3.504H7.524v3.504c-1.776.864-2.856 2.616-2.856 4.728zm.864 1.2v-1.512c0-1.896 1.008-3.24 2.808-3.84V11.88h3.264v8.664H5.532zm.216-13.392h12.48v-.816h-2.4v-2.16c0-.864-.672-1.536-1.536-1.536H9.684c-.864 0-1.536.672-1.536 1.536v2.16h-2.4v.816zM8.676 8.64c0 .768.624 1.392 1.392 1.392.648 0 1.2-.456 1.344-1.056h1.128a1.39 1.39 0 001.344 1.056 1.393 1.393 0 000-2.784c-.648 0-1.2.456-1.344 1.056h-1.128a1.39 1.39 0 00-1.344-1.056c-.768 0-1.392.624-1.392 1.392zm.264-2.304V4.224c0-.504.288-.816.792-.816h4.512c.504 0 .816.312.816.816v2.112H8.94zm.408 2.304c0-.408.336-.72.72-.72.408 0 .72.312.72.72 0 .384-.312.72-.72.72a.738.738 0 01-.72-.72zm3.024 11.904V11.88h3.264v3.312c1.8.576 2.808 1.944 2.808 3.84v1.512h-6.072zm.792-11.904c0-.408.336-.72.72-.72.408 0 .72.312.72.72 0 .384-.312.72-.72.72a.738.738 0 01-.72-.72z"  /></Svg>;
}

export default UserSecretUltraLight;