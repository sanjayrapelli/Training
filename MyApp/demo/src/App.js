// import Footer from "./Components/Footer";
// import Main from "./Components/Main";
// import Navbar from "./Components/NavBar";
// import Sidebar1 from "./Components/Sidebar1";
// import Sidebar2 from "./Components/Sidebar2";
// import"./global.css";
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Main />
//       <div className="side">
//         <Sidebar1 />
//         <Sidebar2 />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
// Props

// import React, { Component } from "react";
// import CBCPropEx1 from "./propexample/CBCPropEx1";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1
//           username="Sanjay"
//           age={21}
//           hobbies={["Palying" ,"Eating"]}
//           address={{ Place: "Siddipet" }}
//           sendFun={function(){alert("hi sanjay")}}
//         />
//       </div>
//     );
//   }
// }

// props.childern

// import React from 'react'
// import PropsChildrenex from './propexample/PropsChildrenex';
// import SubChildProps from './propexample/SubChildProps';

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenex username="ASDF" company="Meta">
//         <h1> This data is passing as a props children to chils component</h1>
//         <SubChildProps/>
//       </PropsChildrenex>
//     </div>
//   )
// }
// export default App

import React from "react";
import CBCStateEx from "./stateexample/CBCStateEx";

const App = () => {
  return (
    <div>
      <CBCStateEx />
    </div>
  );
};

export default App;
