import "./App.css";
import FunctionUp from "./components/FunctionUp/FunctionUp";
// import Greet from "./components/Greet/Greet";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let arr = [1, 2, 3];
  // let element = <h1>Hello, McLovin</h1>;

  const getNumber = (num) => {
    console.log(num + 2);
  };
  return (
    <div className="App">
      <FunctionUp getNumber={getNumber} />

      {/* <Greet name="John" />
      <hr />
      <Greet
        earl={arr}
        h1={element}
        name="EarlSweatshirt"
        image="https://www.independent.ie/incoming/090a9/35156054.ece/AUTOCROP/w1240h700/Superbad-Fogell-christopher-mintz-plasse-5274699-1200-800.jpg"
        age={27}
      /> */}
    </div>
  );
}

export default App;
