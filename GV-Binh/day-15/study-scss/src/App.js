import logo from "./logo.svg";
import "./App.scss";
import Count from "./components/Count";

function App() {
  return (
    <div className="App">
      <p className="text-default">Xin chào các bạn</p>
      <Count />
      <div className="text-danger">React 2011</div>
      <ul>
        <li className="item-1">A</li>
        <li className="item-2">B</li>
        <li className="item-3">C</li>
        <li className="item-4">D</li>
        <li className="item-5">E</li>
      </ul>
    </div>
  );
}

export default App;
