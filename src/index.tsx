import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "amfe-flexible";
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
if (process.env.NODE_ENV !== "production") {
  import("./reportWebVitals").then((module) => {
    const reportWebVitals = module.default;
    // eslint-disable-next-line no-console
    reportWebVitals(console.log);
  });
}
