import { Link } from "react-router-dom";
import classes from "./navbar.module.css";

const navbar: { name: string; link: string }[] = [
  { name: "Rent", link: "/rent" },
  { name: "Buy", link: "/buy" },
  { name: "Sell", link: "/sell" },
  { name: "Manage Property", link: "/manage-property" },
  { name: "Resources", link: "/resources" },
];

export function Navbar() {
  return (
    <div className={classes["navbar-component"]}>
      <ul className={classes["nav-links"]}>
        {navbar.map((item) => (
          <li key={item.name} className={classes["list-item"]}>
            <Link to="{item.link}" className={classes["single-nav-link"]}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
