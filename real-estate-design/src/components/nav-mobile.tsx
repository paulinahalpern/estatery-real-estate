import { useState } from "react";
import Hamburger from "hamburger-react";
import { Navbar } from "./navbar";
import { Button } from "./button";
import classes from "./nav-mobile.module.css";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={classes["nav-mobile"]}>
      <img src="logo.png" alt="Company logo" className={classes.logo} />
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <div className={classes["nav-mobile-menu"]}>
          <Navbar />
          <Button label="Login" className="primary" />
          <Button label="Sign Up" className="secondary" />
        </div>
      )}
    </div>
  );
};
