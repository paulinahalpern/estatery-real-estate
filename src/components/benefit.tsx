import classes from "./benefit.module.css";

interface BenefitProps {
  image: string;
  alt: string;
  number: string;
  description: string;
}

export function Benefit({ image, alt, number, description }: BenefitProps) {
  return (
    <div className={classes.benefit}>
      <img src={image} alt={alt} className={classes["icon-image"]} />
      <p className={classes.number}>{number}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
