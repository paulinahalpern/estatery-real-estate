import { Button } from "./button";
import classes from "./property-listing.module.css";

export function PropertyListing() {
  return (
    <div className={classes["top-nav-property-listing"]}>
      <div className={classes["header-text"]}>
        <p className={classes["first-text"]}> Based on your location</p>
        <p className={classes["second-text"]}>
          Some of our picked properties near your location
        </p>
      </div>
      <div className={classes["header-button"]}>
        <Button className="secondary button">Browse more properties</Button>
      </div>
    </div>
  );
}
