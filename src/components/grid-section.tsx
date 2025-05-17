import classes from "./grid-section.module.css";

interface GridSectionProps {
  children: any;
  background?: boolean;
}

export default function GridSection({
  children,
  background = false,
}: GridSectionProps) {
  const classNames = `${classes["grid-container"]} ${
    background ? classes["background-color"] : ""
  }`;
  return <div className={classNames}>{children}</div>;
}
