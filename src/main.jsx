import { createRoot } from "react-dom/client";
import App from "./App";

//"#content"は、id"content"を持つ要素を選択させる
createRoot(document.querySelector("#content")).render(<App />);