import React, { createContext, useReducer } from "react";

const initState = {
  count: 10,
  staff: [],
};

const AppContext = createContext();

const reduce = (state, action) => {
  const { type, payload } = action;
    
  switch ((type)) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADD_NEW_STAFF":
      return { ...state, staff: [...state.staff, payload] };
    default:
      break;
  }
};

const ProviderCustom = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

//  toj giao dien theem mowis nhaan viee
//  tee, tuoi, phong ban, so nam kinh nghiem, chuc vu
// sau khi theem thif luu vao context

export { ProviderCustom, AppContext };
