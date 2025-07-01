// const headling = React.createElement("h1", {id:"gopal"}, "hellow world from react js");
// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Im a children")));
// console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//jsx code --babel--reactelement--
import React from "react";
import ReactDOM from "react-dom/client";
//react function components

const Title = () => <h1>Introduction of java</h1>;

// const ReactComponet = () => (
//   <div>
//     <div>
//       {Title()}
//       <Title>
//         <Title />
//       </Title>
//       <Title />
//       <h1 className="head">Namaste react function conponents</h1>
//     </div>
//     <div>
//       <Title />
//     </div>
//   </div>
// );

const jsxheadling = <h1>Namaste react</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheadling);
root.render(<ReactComponet />);
