import { Button } from "./button";
import classes from "./property-listing.module.scss";

export function PropertyListing() {
  return (
    <div className={classes["top-nav-property-listing"]}>
      <div>
        <p className={classes["first-text"]}> Based on your location</p>
        <p className={classes["second-text"]}>
          Some of our picked properties near your location
        </p>
      </div>
      <div>
        <Button label="Browse more properties" className='secondary' />
      </div>
    </div>
  );
}
