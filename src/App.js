// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar aboutname="About" contactname="Contact" />
      <Form />
      {/* <About /> */}
    </>
  );
}
export default App;
