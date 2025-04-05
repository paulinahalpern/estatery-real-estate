const navbar: { name: string; link: string }[] = [
  { name: "Rent", link: "/rent" },
  { name: "Buy", link: "/buy" },
  { name: "Sell", link: "/sell" },
  { name: "Manage Property", link: "/manage-property" },
  { name: "Resources", link: "/resources" },
];

export function Navbar() {
  return (
    <div className="navbar-component">
      <ul className="navbar-component__unordered-list">
        {navbar.map((item) => (
          <li key="item.name" className="navbar-component__item">
            <a href="/{item.link}" className="single-nav-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
