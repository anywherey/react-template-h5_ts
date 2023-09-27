import "./App.less";
import { useReducer, Suspense } from "react";
import routes from "./router";
import { HashRouter, Routes } from "react-router-dom";
import RouteWithSubRoutes from "./router/components";
import { Dispatch, Global } from "./components/context";
import { InitialState, Reducer } from "./reducers/reducers";
import { Provider as ReduxProvider } from "react-redux";
import { StoresProvider as MobxProvider, mobxStores } from "./mobx";
import { store } from "./redux/index";

function App() {
  const [global, dispatch] = useReducer(Reducer, InitialState);
  return (
    <Dispatch.Provider value={{ dispatch }}>
      <Global.Provider value={{ global }}>
        <MobxProvider value={mobxStores}>
          <ReduxProvider store={store}>
            <HashRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {routes.map((route) => {
                    return RouteWithSubRoutes(route);
                  })}
                </Routes>
              </Suspense>
            </HashRouter>
          </ReduxProvider>
        </MobxProvider>
      </Global.Provider>
    </Dispatch.Provider>
  );
}

export default App;
