import React, { useContext, useEffect, useReducer, useState } from "react";
import { CountContext } from "../context";

// const initialState = {
//   count: 0,
// };

// const reduce = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };

//     default:
//       break;
//   }
// };

const Count = () => {
  const {state, dispatch} = useContext(CountContext);
  // const [state, dispatch] = useReducer(reduce, initialState);
  // loading => setLoading
  // const [count, setCount] = useState(10);
  // const [data, setData] = useState([]);
  // const [number, setnumber] = useState(8);

  // const [globalState, setGlobalState] = useState({
  //   count: 0,
  //   load: false,
  //   nember: 0,
  //   text: 'Hi'
  // })

  // useEffect(() => {
  //   console.log('xin chao');
  //   fetch('https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/users')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, []);

  return (
    <div className="contaner">
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment (+)
      </button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement (-)</button>

      <br />

      {/* <input type="text" onInput={this.handleChangeText} />

    <Display child={text} /> */}
    </div>
  );
};

export default Count;
