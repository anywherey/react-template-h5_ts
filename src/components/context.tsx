import { Dispatch as ReactDispatch } from "react";
import { createContext } from 'react';
import { InitialState } from '../reducers/reducers';
// const Dispatch = createContext({}); // <--- I'm missing somthing here??
interface ActionInterface {
  type: string;
}
const Dispatch = createContext<{ dispatch: ReactDispatch<ActionInterface> }>({
  dispatch: () => { }
});
const Global = createContext({
  global: InitialState,
});
export { Dispatch, Global };