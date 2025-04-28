import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchData } from "../../service/fetchData";

import Header from "../../components/Header/Header";
import Heart from "../../components/Heart/Heart";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

import "./menu.scss";

export default function Menu() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchData()
      .then((data) => {
        const menu = data.find((item) => item.id === id);
        if (menu) {
          setData(menu);
        } else {
          setData(null);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !data) {
    return <p className="loading">Chargement...</p>;
  }



  return (
    <>
      <Header arrowLeft="fa-solid fa-arrow-left" />
      <main className="mainMenu">
        <Helmet>
          <title>{`Menu de ${data.restaurant || "Restaurant"}`}</title>
          <meta
            name="description"
            content={`Découvrez la carte du restaurant ${
              data.restaurant || "Restaurant"
            }`}
          />
        </Helmet>
        <img
          className="imgResto"
          src={data.image}
          alt={`Photo de ${data.restaurant || "Restaurant"}`}
          loading="lazy"
        />
        <section className="menu">
          <div className="titleRestaurant">
            <h1>{data.restaurant || "Restaurant"}</h1>
            <Heart />
          </div>

          {/* Entrées */}
          <MenuCategory category="starter" title="Entrées" data={data} />
          <MenuCategory category="mainCourses" title="Plats" data={data} />
          <MenuCategory category="desserts" title="Desserts" data={data} />
          <Button content="Commander" />
        </section>
      </main>
      <Footer />
    </>
  );
}
