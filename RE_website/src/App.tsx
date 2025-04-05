import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { Button } from "./components/button";
import { NavMobile } from "./components/nav-mobile";
import "./index.css";
import { HeadingText } from "./components/heading-text";

export default function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Logo />
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <div className="header-btn">
          <Button label="Login" className="primary" />
          <Button label="Sign Up" className="secondary" />
        </div>
      </header>
      <HeadingText />
      <NavMobile />
    </BrowserRouter>
  );
}
