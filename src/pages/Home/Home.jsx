import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { fetchData } from "../../service/fetchData";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import FonctionnementCards from "../../components/FonctionnementCards/FonctionnementCards";
import RestaurantCards from "../../components/RestaurantCards/RestaurantCards";
import Footer from "../../components/Footer/Footer";
import "./home.scss";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="loading">Chargement...</p>;
  }

  return (
    <>
      <Helmet>
        <title>Oh My Food</title>
        <meta
          name="description"
          content="Avec OhMyFood, réservez le menu de votre choix dans les restaurants gastronomiques les plus tendances. Découvrez les cartes et commandez en ligne."
        />
      </Helmet>
      <Loader />
      <Header />
      <main>
        <section className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Paris, Belleville</p>
        </section>
        <section className="reservation">
          <h1>Réservez le menu qui vous convient</h1>
          <p>
            Découvrez des restaurants d’exception, sélectionnés par nos soins.
          </p>
          <Button
            localisation="#restaurants"
            content="Explorer nos restaurants"
          />
        </section>
        <section className="fonctionnement">
          <h2>Fonctionnement</h2>
          <ul>
            <FonctionnementCards
              className="fa-solid fa-mobile-screen-button"
              text="Choisissez un restaurant"
            />
            <FonctionnementCards
              className="fa-solid fa-list"
              text="Composez votre menu"
            />
            <FonctionnementCards
              className="fa-solid fa-store"
              text="Dégustez au restaurant"
            />            
          </ul>
        </section>
        <section id="restaurants" className="restaurants">
          <div className="restaurants__container">
            <h2>Restaurants</h2>
            {data.map((item) => (
              <RestaurantCards item={item} key={item.id} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
