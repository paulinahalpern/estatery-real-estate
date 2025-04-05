import { useState } from "react";
import Hamburger from "hamburger-react";
import { Navbar } from "./Navbar";
import Button from "./Button";
import { Logo } from "./Logo";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="nav-mobile">
      <Logo />
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <div className="nav-mobile-menu">
          <Navbar />
            <Button label="Login" className="primary" />
            <Button label="Sign Up" className="secondary" />
        </div>
      )}
    </div>
  );
};
