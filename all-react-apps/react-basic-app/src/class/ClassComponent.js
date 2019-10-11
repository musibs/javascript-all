import React, { Component } from "react";
import Demo from "../functional/Demo";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "Java in action",
      sold: 123487
    };
  }

  changeState = () => {
    // Incorrect way - DO NOT chnage state like this
    //this.state.book = 'Spring in action'

    //Correct Way -1
    // this.setState((previousState, props) => ({
    //     book : 'Spring in action',
    //     sold : previousState.sold + 1
    // }))

    // Correct Way -2

    this.setState({ book: "Spring in Action", sold: this.state.sold + 1 });
  };

  changeStateProperty1 = () => {
    this.setState({ book: this.state.book + "L" });
  };

  changeStateProperty2 = () => {
    this.setState({ sold: this.state.sold + 1 });
  };

  render() {
    return (
      //<div>Class based component - {this.props.nickname}</div>
      <div>
        Book Name: {this.state.book} <br />
        Copied Sold: {this.state.sold} <br />
        {/* <button onClick={() => this.changeState()}>Sell More</button> */}
        <button onClick={() => this.changeStateProperty1()}>
          Change Property1
        </button>{" "}
        &nbsp;
        <button onClick={() => this.changeStateProperty2()}>
          Change Property2
        </button>{" "}
        <br />
        <Demo name={this.state.book} age={this.state.sold} />
      </div>
    );
  }
}

export default ClassComponent;
