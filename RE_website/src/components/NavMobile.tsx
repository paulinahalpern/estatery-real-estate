import { useState } from "react";
import Hamburger from "hamburger-react";
import { Navbar } from "./Navbar";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="nav-mobile">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && <Navbar />}
    </div>
  );
};
