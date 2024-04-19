import { NavLink } from "react-router-dom";

export default function NavHeader() {
  return (
    <nav>
      <ul>
        <div>
          <NavLink to="/">Produkter</NavLink>
        </div>
      </ul>
    </nav>
  );
}
