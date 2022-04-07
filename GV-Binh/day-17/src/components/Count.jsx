import React, { useEffect, useState } from "react";

const Count = () => {
  // loading => setLoading
  const [count, setCount] = useState(10);
  const [data, setData] = useState([]);
  // const [number, setnumber] = useState(8);


  // const [globalState, setGlobalState] = useState({
  //   count: 0,
  //   load: false,
  //   nember: 0,
  //   text: 'Hi'
  // })


  useEffect(() => {
    console.log('xin chao');
    fetch('https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/users')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);


  return (
    <div className="contaner">
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment (+)</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement (-)</button>

      <br />

      {/* <input type="text" onInput={this.handleChangeText} />

    <Display child={text} /> */}
    </div>
  );
};

export default Count;
