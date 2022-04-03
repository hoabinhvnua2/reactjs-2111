import React from "react";
import "./App.scss";
import Count from "./components/Count";
import { MASTER_DATA } from "./ultis/constants";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log("Will mount");
  }

  componentDidMount() {
    //  nên call api trong hàm này
    console.log("Did mount");
  }

  handleDecreament = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleIncreament = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Render");
    const { count } = this.state;
    return (
      <div className="App">
        <p className="container">{count}</p>
        <Count
          number={count}
          inCrement={this.handleIncreament}
          deCrement={this.handleDecreament}
        />
        <ul>
          {MASTER_DATA.length > 0 ? (
            MASTER_DATA.map((item, index) => (
              <li key={item.name}>{item.name}</li>
            ))
          ) : (
            <p>No Data</p>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
