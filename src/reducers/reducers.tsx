const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const InitialState = {
  loggedIn: true,
};
const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};
export { Reducer, InitialState, LOG_IN, LOG_OUT };
