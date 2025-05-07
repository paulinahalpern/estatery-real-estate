import classes from "./property-data.module.css";

export function PropertyData() {
  return (
    <>
      <div className={classes["data-component"]}>
        <div className={classes["data-item"]}>
          <span className={classes["data-item-number"]}>50k+</span>
          <p className={classes["data-item-text"]}>renters</p>
        </div>
        <div className={classes["data-item"]}>
          <span className={classes["data-item-number"]}>10k+</span>
          <p className={classes["data-item-text"]}>properties</p>
        </div>
      </div>
    </>
  );
}
