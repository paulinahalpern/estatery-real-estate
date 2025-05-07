import classes from "./benefit.module.css";

interface BenefitProps {
  img: string;
  alt: string;
  number: string;
  description: string;
}

export function Benefit({ img, alt, number, description }: BenefitProps) {
  return (
    <div className={classes.benefit}>
      <img src={img} alt={alt} className={classes.img} />
      <p className={classes.number}>{number}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
