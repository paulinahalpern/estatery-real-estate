import classes from "./cta.module.scss";
import { Button } from "./button";

type CtaProps = { classNames?: string };
export function Cta({ classNames }: CtaProps) {
  return (
    <div className={classNames}>
      <p className={classes.title}>No Spam Promise</p>
      <p className={classes["headline-question"]}>Are you a landlord?</p>
      <p className={classes.paragraph}>
        Discover ways to increase your home's value and get listed. No Spam.
      </p>
      <div className={classes["newstletter"]}>
        <input
          name="newstletter"
          type="text"
          defaultValue="Enter your email address"
          className={classes.input}
        ></input>
        <div className={classes["search-btn"]}>
          <Button label="Browse Properties" className={classes.secondary} />
        </div>
      </div>
      <p className={classes.paragraph}>
        Join 10,000+ other landlords in our estatery community.
      </p>
    </div>
  );
}
