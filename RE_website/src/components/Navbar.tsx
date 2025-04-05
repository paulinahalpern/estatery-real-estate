const navbar: string[] = [
  "Rent",
  "Buy",
  "Sell",
  "Manage Property",
  "Resources",
];

export function Navbar() {
  return (
    <div>
      <ul className="navbar-component__unordered-list">
        {navbar.map((item) => (
          <li navbar-component__item>
            <a href="/{item}" className="single-nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
