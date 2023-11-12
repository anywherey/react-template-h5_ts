import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
// 过时方案,且该插件已经不再维护
// import "amfe-flexible";
// 高清方案
import "./utils/highDefinition";
process.env.NODE_ENV === "development" && require("./mock");
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 性能分析
if (process.env.NODE_ENV !== "production") {
  import("./reportWebVitals").then((module) => {
    const reportWebVitals = module.default;
    // eslint-disable-next-line no-console
    reportWebVitals(console.log);
  });
}
