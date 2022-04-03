import React from "react";
import Display from "./display";

class Count extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDecrement = () => {
    this.props.deCrement();
  };

  handleIncrement = () => {
    this.props.inCrement();
  };

  //   handleChangeText = (e) => {
  //     console.log(e.target.value);
  //     this.setState({
  //         text: e.target.value
  //     })
  //   }

  render() {
    return (
      <div className="contaner">
        <button onClick={this.handleIncrement}>Increment (+)</button>
        <button onClick={this.handleDecrement}>Decrement (-)</button>

        <br />

        {/* <input type="text" onInput={this.handleChangeText} />

        <Display child={text} /> */}
      </div>
    );
  }
}

export default Count;
