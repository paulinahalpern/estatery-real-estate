import { Button } from "./button";
import classes from "./toggle.tab.module.scss";
import { useState } from "react";

export function ToggleTab() {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <div className={classes["toggle-tab-container"]}>
      <div className={classes.buttons}>
        <button
          className={classes["tab-btn"]}
          onClick={toggleDisabled}
          style={
            isDisabled
              ? { backgroundColor: "#FFFFFF", color: "#7065f0" }
              : { backgroundColor: "#EFEFFB", color: "#6c727f" }
          }
        >
          For tenants
        </button>
        <button
          className={classes["tab-btn"]}
          onClick={toggleDisabled}
          style={
            !isDisabled
              ? { backgroundColor: "#FFFFFF", color: "#7065f0" }
              : { backgroundColor: "#EFEFFB", color: "#6c727f" }
          }
        >
          For landlords
        </button>
      </div>
      <h3>We make it easy for tenants and landlords.</h3>
      <h4>
        Whether it’s selling your current home, getting financing, or buying a
        new home, we make it easy and efficient. The best part? you’ll save a
        bunch of money and time with our services.
      </h4>
      <Button label="See More >" className={classes["see-more-btn"]} />
    </div>
  );
}
