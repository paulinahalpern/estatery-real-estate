import classes from "./headline.module.scss";

interface HeadlineProps {
  h1?: string;
  h2?: string;
}

export function Headline({ h1, h2 }: HeadlineProps) {
  return (
    <div className={classes["text-component"]}>
      <h1>{h1}</h1>
      <h2>{h2}</h2>
    </div>
  );
}
