import classes from "./footer.module.css";
import footerList from "../data/footer-data";

export function Footer() {
  return (
    <div className={classes.footer}>
      <img src="logo.png" alt="Company logo" className={classes.logo1} />
      {footerList.map(({ title, items }) => (
        <div key={title} className={classes["grid-links"]}>
          <ul className={classes["links-list"]}>
            <p className={classes.title}>{title}</p>
            {items.map(({ label, id }) => (
              <li key={id} className={classes.pages}>
                <a href="#" className={classes.links}>
                  {" "}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
