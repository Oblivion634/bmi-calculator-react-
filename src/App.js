import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Calculator from "./components/calculator/calculator";

function App() {
  return (
    <>
      <div className="container">
      <Navbar />
      <Calculator />
      </div>
  </>
  );
}

export default App;
