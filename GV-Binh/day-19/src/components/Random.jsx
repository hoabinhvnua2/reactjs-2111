import React from "react";


const Random = () => {
  const [number, setNumber] = React.useState(0);
  const [number1, setNumber1] = React.useState(0);
  const inputEl = React.useRef(null);

  React.useLayoutEffect(() => {
      console.log('layout');
    if (number === 0) {
      setNumber(Math.random());
    }
  }, [number]);

  React.useEffect(() => {
   console.log('effect');
  }, [number]);

  const handleVal = () => {
    // inputEl.current.focus();
      console.log(444, inputEl.current.value);
  }

  return (
    <div>
        {console.log('render')}
      {number}
      <input type="text" ref={inputEl} />
      <button onClick={handleVal}>random</button>
    </div>
  );
};

export default Random;
