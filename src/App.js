import "./App.css";
// import MoviesList from "./components/MoviesList";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Details from "./components/Details";
import Company_Info from "./components/Company_Info";

function App() {
  return (
    <div className="bg-dark vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/company" element={<Company_Info />} />
      </Routes>
    </div>
  );
}

export default App;
