import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { Button } from "./components/button";
import { NavMobile } from "./components/nav-mobile";
import { PropertyData } from "./components/property-data.tsx";
import { StaticImage } from "./components/static-image";
import { PropertySearchToggle } from "./components/property-search";
import classes from "./app.module.scss";
import { Headline } from "./components/headline.tsx";
import map from "/map.png";
import house from "/house.png";
import { ToggleTab } from "./components/toggle-tab.tsx";
import { ListingPage } from "./components/listing-page.tsx";

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
          <Headline
            h1={"Buy, rent, or sell your property easily"}
            h2={
              "A great platform to buy, sell, or even rent your properties without any commisions."
            }
          />
          <PropertyData />
          <PropertySearchToggle />
        </article>
        <aside>
          <StaticImage
            img={map}
            className={classes["map-image"]}
            alt={"Map image"}
          />
        </aside>
      </div>
      <div className={classes["grid-container"]}>
        <article>
          <StaticImage
            img={house}
            className={classes["house-image"]}
            alt={"House image"}
          />
        </article>
        <aside>
          <ToggleTab />
        </aside>
      </div>
      <ListingPage />
    </BrowserRouter>
  );
}
