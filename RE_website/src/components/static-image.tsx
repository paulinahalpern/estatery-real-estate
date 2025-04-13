import classes from "./static-image.module.scss";

export function StaticImage() {
  return <img src="map.png" alt="Map" className={classes["map-image"]} />;
}
