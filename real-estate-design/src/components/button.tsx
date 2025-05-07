import classes from "./button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};
