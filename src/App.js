import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <h1>Olá mundo !</h1>

      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/about' element={<About />} />
        <Route path="/user"  element={<User />} />
        <Route path="/*"  element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
