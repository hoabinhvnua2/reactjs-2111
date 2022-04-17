import React, { createContext, useReducer } from "react";

const initState = {
  count: 10,
};

const CountContext = createContext();

const reduce = (state, action) => {
    const {type} = action;

    switch (type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count - 1}
    
        default:
            break;
    }
}

const ProviderCustom = ({ children }) => {

    const [state, dispatch] = useReducer(reduce, initState);
  return (
    <CountContext.Provider value={{state, dispatch}}>{children}</CountContext.Provider>
  );
};


export {
    ProviderCustom,
    CountContext
}