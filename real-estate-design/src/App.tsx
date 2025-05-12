import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Button } from "./components/button";
import { NavMobile } from "./components/nav-mobile";
import { PropertyData } from "./components/property-data.tsx";
import { PropertySearchToggle } from "./components/property-search";
import classes from "./app.module.css";
import { TabComponent } from "./components/tab-component.tsx";
import { Illustration } from "./components/illustration.tsx";
import { Benefit } from "./components/benefit.tsx";
import benefit1 from "/benefit1.png";
import benefit2 from "/benefit2.png";
import benefit3 from "/benefit3.png";
import { PropertyListing } from "./components/property-listing.tsx";
import { ListedProperties } from "./components/listed-properties.tsx";
import { Testimonials } from "./components/testimonials.tsx";
import { Cta } from "./components/cta.tsx";
import { Footer } from "./components/footer.tsx";
import GridSection from "./components/grid-section.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <header className={classes.header}>
        <img src="logo.png" alt="Company logo" className={classes.logo} />
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <div className={classes["header-btn"]}>
          <Button className="primary button">Login</Button>
          <Button className="secondary button">Sign Up</Button>
        </div>
      </header>
      <NavMobile />
      <GridSection background>
        <article>
          <h1> Buy, rent, or sell your property easily</h1>
          <h2>
            A great platform to buy, sell, or even rent your properties without
            any commisions.
          </h2>
          <PropertyData />
          <PropertySearchToggle />
        </article>
        <aside>
          <img src="map.png" alt="Map image" className={classes["map-image"]} />
        </aside>
      </GridSection>
      <GridSection>
        <article>
          <img
            src="house.png"
            alt="House image"
            className={classes["house-image"]}
          />
        </article>
        <aside>
          <TabComponent />
        </aside>
      </GridSection>
      <GridSection>
        <article>
          <Illustration />
          <div className={classes["benefit-component"]}>
            <Benefit
              img={benefit1}
              alt={"house-icon"}
              number={"7.4%"}
              description={"Property Return Rate"}
            />
            <Benefit
              img={benefit2}
              alt={"house-icon"}
              number={"3,856"}
              description={"Property in Sell & Rent"}
            />
            <Benefit
              img={benefit3}
              alt={"house-icon"}
              number={"2,540"}
              description={"Daily Completed Transactions"}
            />
          </div>
        </article>
        <aside>
          <img src="house2.png" alt="House image" />
        </aside>
      </GridSection>
      <PropertyListing />
      <div className={classes["grid-properties"]}>
        <ListedProperties />
      </div>
      <Testimonials classNames={classes.testimonials} />
      <Cta classNames={classes.cta} />
      <Footer />
    </BrowserRouter>
  );
}
