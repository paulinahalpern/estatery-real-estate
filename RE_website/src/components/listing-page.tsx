import { Button } from "./button";
import classes from "./listing-page.module.scss";

export function ListingPage() {
  return (
    <div>
      <h1 className={classes["sentence-first"]}>Based on your location</h1>
      <p className={classes["sentence-second"]}>
        Some of our picked properties near you location
      </p>

      <Button label="Browse more properties" className={classes.secondary} />
    </div>
  );
}
