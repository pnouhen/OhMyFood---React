import { NavLink } from "react-router";

import Heart from "../Heart/Heart";

import "./cards.scss";

export default function Cards({item}) {
  return (
    <article key={item.id}>
      <NavLink to={`/Menu/${item.id}`} key={item.id}>
        <img src={item.image} alt={`Photo de ${item.restaurant}`} />
        <span className={item.new == 1 ? "new" : ""}>
          {item.new == 1 ? "Nouveau" : ""}
        </span>
        <div>
          <h3>{item.restaurant}</h3>
          <p>Charonne</p>
        </div>
      </NavLink>
      <Heart />
    </article>
  );
}
