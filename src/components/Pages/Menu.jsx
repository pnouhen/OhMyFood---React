import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';

import Header from "../structures/Header";
import GenerateData from "../service/GenerateData";
import Heart from "../ui/Heart";
import Button from "../ui/Button";
import Footer from "../structures/Footer";
import "../../styles/menu.scss";

export default function Menu() {
  // To recover the ID
  const { id } = useParams();
  // To store data of the accommodation
  const [data, setData] = useState(null);

  // Reset data when the id changes
  useEffect(() => {
    if (id) {
      setData(null);
    }
  }, [id]);

  // Set the document title once the data is available
  useEffect(() => {
    if (data) {
      document.title = `Menu de ${data.restaurant}`;
    }
  }, [data]);

  // States to handle checked items for each group
  const [checkedStarters, setCheckedStarters] = useState([]);
  const [checkedMainCourses, setCheckedMainCourses] = useState([]);
  const [checkedDesserts, setCheckedDesserts] = useState([]);

  // Toggle the checked state for an item in a specific group
  const toggleCheck = (group, index) => {
    let updatedCheckedItems = [];
    
    if (group === 'starter') {
      updatedCheckedItems = [...checkedStarters];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      setCheckedStarters(updatedCheckedItems);
    } else if (group === 'mainCourse') {
      updatedCheckedItems = [...checkedMainCourses];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      setCheckedMainCourses(updatedCheckedItems);
    } else if (group === 'dessert') {
      updatedCheckedItems = [...checkedDesserts];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      setCheckedDesserts(updatedCheckedItems);
    }
  };

  return (
    <>
      <Header />
      <NavLink to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </NavLink>

      <main>
        <GenerateData setData={setData} />
        {data ? (
          <>
          <Helmet>
        <title>{`Menu de ${data.restaurant}`}</title>
        <meta
          name="description"
          content={`Découvrez la carte du restaurant ${data.restaurant}`}
        />
      </Helmet>
            <img className="imgResto" src={data.image} alt={`Photo de ${data.restaurant}`}></img>
            <section className="menu">
              <div className="titleRestaurant">
                <h1>{data.restaurant}</h1>
                <Heart />
              </div>

              {/* Entrées */}
              <article className="starter">
                <h2>Entrées</h2>
                {data.starter.map((item, index) => (
                  <div
                    className="choice"
                    key={index}
                    onClick={() => toggleCheck('starter', index)}
                  >
                    <div className="info-group">
                      <div className="title">{item.name}</div>
                      <div className="description">{item.description}</div>
                      <div className="price">{item.price}</div>
                    </div>
                    <div className={checkedStarters[index] ? "check move" : "check"}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                ))}
              </article>

              {/* Plats principaux */}
              <article className="mainCourses">
                <h2>Plats</h2>
                {data.mainCourses.map((item, index) => (
                  <div
                    className="choice"
                    key={index}
                    onClick={() => toggleCheck('mainCourse', index)}
                  >
                    <div className="info-group">
                      <div className="title">{item.name}</div>
                      <div className="description">{item.description}</div>
                      <div className="price">{item.price}</div>
                    </div>
                    <div className={checkedMainCourses[index] ? "check move" : "check"}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                ))}
              </article>

              {/* Desserts */}
              <article className="desserts">
                <h2>Desserts</h2>
                {data.desserts.map((item, index) => (
                  <div
                    className="choice"
                    key={index}
                    onClick={() => toggleCheck('dessert', index)}
                  >
                    <div className="info-group">
                      <div className="title">{item.name}</div>
                      <div className="description">{item.description}</div>
                      <div className="price">{item.price}</div>
                    </div>
                    <div className={checkedDesserts[index] ? "check move" : "check"}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                ))}
              </article>

              <Button content="Commander" />
            </section>
          </>
        ) : (
          <div>Chargement...</div>
        )}
      </main>

      <Footer />
    </>
  );
}
