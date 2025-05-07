import classes from "./illustration.module.css";

export function Illustration() {
  return (
    <div>
      <p className={classes["sentence-first"]}>
        The new way to find your new home
      </p>
      <p className={classes["sentence-second"]}>
        Find your dream place to live in with more than 10k+ properties listed.
      </p>
    </div>
  );
}
