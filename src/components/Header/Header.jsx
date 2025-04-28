import { NavLink } from "react-router";

import "./header.scss";

export default function Header({arrowLeft}) {
  return (
    <header>
      <NavLink to="/">
      <i className={arrowLeft}></i>
      </NavLink>
      <img
        className="logo"
        src="/assets/images/logo/ohmyfood.webp"
        alt="Logo website"
      />
    </header>
  );
}
