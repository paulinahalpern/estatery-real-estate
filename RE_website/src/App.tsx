import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { Button } from "./components/button";
import { NavMobile } from "./components/nav-mobile";
import { HeadingText } from "./components/heading-text";
import { StaticImage } from "./components/static-image";
import { PropertySearchToggle } from "./components/property-search";
import classes from "./app.module.scss";

export default function App() {
  return (
    <BrowserRouter>
      <header className={classes.header}>
        <Logo />
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <div className={classes["header-btn"]}>
          <Button label="Login" className={classes.primary} />
          <Button label="Sign Up" className={classes.secondary} />
        </div>
      </header>
      <NavMobile />
      <div className={classes["grid-container"]}>
        <article>
          <HeadingText />
          <PropertySearchToggle />
        </article>
        <aside>
          <StaticImage />
        </aside>
      </div>
    </BrowserRouter>
  );
}
