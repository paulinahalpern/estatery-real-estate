import classes from "./property-data.module.scss";

export function PropertyData() {
  return (
    <>
      <div className={classes["data-component"]}>
        <section className={classes["data-item"]}>
          <span className={classes["data-item-number"]}>50k+</span>
          <p className={classes["data-item-text"]}>renters</p>
        </section>
        <section className={classes["data-item"]}>
          <span className={classes["data-item-number"]}>10k+</span>
          <p className={classes["data-item-text"]}>properties</p>
        </section>
      </div>
    </>
  );
}
