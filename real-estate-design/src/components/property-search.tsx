import { useState } from "react";
import { Button } from "./button";
import classes from "./property-search.module.scss";

export function PropertySearchToggle() {
  const [activeTab, setActiveTab] = useState<string>("Rent");

  return (
    <>
      <div className={classes["tab-component"]}>
        <ul className={classes["tab-list"]}>
          <li>
            <button
              onClick={() => setActiveTab("Rent")}
              className={
                activeTab === "Rent"
                  ? `${classes["tab"]} ${classes["active"]}`
                  : `${classes["tab"]}`
              }
            >
              Rent
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Buy")}
              className={
                activeTab === "Buy"
                  ? `${classes["tab"]} ${classes["active"]}`
                  : `${classes["tab"]}`
              }
            >
              Buy
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Sell")}
              className={
                activeTab === "Sell"
                  ? `${classes["tab"]} ${classes["active"]}`
                  : `${classes["tab"]}`
              }
            >
              Sell
            </button>
          </li>
        </ul>
      </div>
      <div className={classes["search-input"]}>
        <input
          name="search location"
          type="text"
          defaultValue="Search location"
          className={classes.input}
        ></input>
        <div className={classes["search-btn"]}>
          <Button label="Browse Properties" className="secondary" />
        </div>
      </div>
    </>
  );
}
