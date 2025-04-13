import classes from "./heading-text.module.scss";

export function HeadingText() {
  return (
    <>
      <div className={classes["text-component"]}>
        <h1>Buy, rent, or sell your property easily</h1>
        <h2>
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </h2>
      </div>
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
