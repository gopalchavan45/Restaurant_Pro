import FunUser from "./FunUser";
import ClassComponents from "./ClassBasedCom";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("parent componentdid mount here");
  }
  render() {
    console.log("parent render ");
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          button
        </button>
        <h1>This is About Page</h1>
        <p>
          We are to Import the page of functional component as well as class
          based components
        </p>
        {/* <FunUser name={"Im function based"} location={"Pune"} /> */}
        <ClassComponents name={"gopal"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
