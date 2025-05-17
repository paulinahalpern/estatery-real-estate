import { useState } from "react";
import { Button } from "./button";
import classes from "./property-search.module.css";

export function PropertySearchToggle() {
  const [activeTab, setActiveTab] = useState<"Rent" | "Buy" | "Sell">("Rent");
  const tabs: Array<"Rent" | "Buy" | "Sell"> = ["Rent", "Buy", "Sell"];
  return (
    <>
      <div className={classes["tab-component"]}>
        <ul className={classes["tab-list"]}>
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`${classes["tab"]} ${
                  activeTab === tab ? classes["active"] : ""
                }`}
                aria-pressed={activeTab === tab}
              >
                {tab}
              </button>
            </li>
          ))}
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
          <Button className="secondary button">Browse Properties</Button>
        </div>
      </div>
    </>
  );
}
