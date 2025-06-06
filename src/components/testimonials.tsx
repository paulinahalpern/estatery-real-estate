import classes from "./testimonials.module.css";

type TestimonialsProps = { classNames?: string };

export function Testimonials({ classNames }: TestimonialsProps) {
  return (
    <div className={classNames}>
      <p className={classes["headline-title"]}>Testimonials</p>
      <p className={classes.headline}>
        See what our property managers, landlords, and <br></br>tenants have to
        say
      </p>
      <p className={classes.review}>
        “Estatery is the platform I go to on almost a daily basis for 2nd home
        and vacation condo shopping, or to just look at dream homes in new
        areas. Thanks for fun home shopping and comparative analyzing,
        Estatery!”
      </p>
      <p className={classes.author}>Mira Culos, Renter </p>
      <div className={classes.awatars}>
        <img src="awatar_1.png" className={classes.awatar} />
        <img src="awatar_1.png" className={classes.awatar} />
        <img src="awatar_1.png" className={classes.awatar} />
      </div>
    </div>
  );
}
