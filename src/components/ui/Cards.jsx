import { NavLink, useParams } from "react-router";
import { useState, useEffect } from "react";
import GenerateData from "../service/GenerateData";
import Heart from "./Heart";
import "../../styles/cards.scss";

export default function Cards() {
  // To recover the ID
  const { id } = useParams();
  // To stockage data of the accommodation
  const [data, setData] = useState(null);
  // For each change of id
  useEffect(() => {
    if (id) {
      setData(null);
    }
  }, [id]);
  return (
    <>
      <GenerateData setData={setData} />
      <section id="restaurants" className="restaurants">
        <div className="restaurants__container">
        <h2>Restaurants</h2>
        {data ? (
          data.map((item) => (
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
          ))
        ) : (
          <div>Chargement...</div>
        )}
        </div>
      </section>
    </>
  );
}
