import React from "react";
class ClassComponents extends React.Component {
  constructor(props) {
    super(props);
    console.log("child components");
  }
  componentDidMount() {
    console.log("componentdid mount here");
  }
  render() {
    const { name, location } = this.props;
    console.log("child render");
    return (
      <div>
        <h1>Im from the class based components</h1>
        <h4>Name:{name}</h4>
        <h4>City:{location}</h4>
      </div>
    );
  }
}

export default ClassComponents;
