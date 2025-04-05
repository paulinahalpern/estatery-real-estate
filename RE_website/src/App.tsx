import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Logo } from "./components/Logo";
import { Button } from "./components/Button";
import "./index.css";
import { NavMobile } from "./components/NavMobile";

export default function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Logo />
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <div className="header-btn">
          <Button label="Name" className="primary" />
          <Button label="Sign Up" className="secondary" />
        </div>
        <NavMobile />
      </header>
    </BrowserRouter>
  );
}
