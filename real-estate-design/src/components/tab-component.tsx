import { Button } from "./button";
import classes from "./tab-component.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export function TabComponent() {
  return (
    <div className={classes["tab=component"]}>
      <Tabs className={classes["tab-component"]}>
        <div className={classes["tab-header"]}>
          <TabList className={classes["toggle-tab-container"]}>
            <Tab
              className={classes["tab-btn"]}
              selectedClassName={classes.tabBtnSelected}
            >
              For tenants
            </Tab>
            <Tab
              className={classes["tab-btn"]}
              selectedClassName={classes.tabBtnSelected}
            >
              For landlords
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <h3>We make it easy for tenants.</h3>
          <h4>
            Whether you're moving out, looking for a new place, or sorting your
            paperwork, we make the process simple and efficient. The best part?
            You'll save both time and money with our services.
          </h4>
        </TabPanel>
        <TabPanel>
          <h3>We make it easy for landlords.</h3>
          <h4>
            Whether you're listing a property, managing tenants, or handling
            paperwork, we streamline the entire process. The best part? You'll
            save valuable time and reduce stress with our reliable services.
          </h4>
        </TabPanel>
      </Tabs>
      <div className={classes['centered-button']}>
        <Button className={`${classes["see-more-btn"]} button`}>
          See More
        </Button>
      </div>
    </div>
  );
}
