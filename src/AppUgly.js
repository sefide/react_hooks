import React from "react";

class AppUgly extends React.Component {
    state = {
      item: 1
    };
  
    render() {
      const item = this.state;
  
      return (
        <div className="AppUgly">
          <h1>Hello {item}</h1>
          <button onClick={this.incrementItem}>increment</button>
          <button onClick={this.decrementItem}>decrement</button>
        </div>
      );
    }
  
    incrementItem = () => {
      this.setState((state) => {
        console.log(state);
        return {
          item: state.item + 1
        };
      });
    };
  
    decrementItem = () => {
      this.setState((state) => {
        console.log(state);
  
        return {
          item: state.item - 1
        };
      });
    };
  }

  export default AppUgly;