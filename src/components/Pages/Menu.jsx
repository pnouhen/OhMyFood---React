import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../structures/Header";
import GenerateData from "../service/GenerateData";
import Heart from "../ui/Heart";
import Footer from "../structures/Footer";
import "../../styles/menu.scss";
export default function Menu() {
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

  useEffect(() => {
    if (data) {
      document.title = `Menu de ${data.restaurant}`; // Change the title dynamically
    }
  }, [data]);

  return (
    <>
      <Header />
      <GenerateData setData={setData} />
      {data ? (
        <>
          <img src={data.image}></img>
          <div className="title">
            <h1>{data.restaurant}</h1>
            <Heart />
          </div>
          <section>
            <h2>Entrées</h2>
            {data.starter.map((item, index) => (
              <article key={index}>
                <div class="choice">
                  <div class="info-group">
                    <div class="title">{item.name}</div>
                    <div class="description">{item.description}</div>
                    <div class="price">{item.price}</div>
                  </div>
                  <div class="check">
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h2>Plats</h2>
            {data.mainCourses.map((item, index) => (
              <article key={index}>
                <div class="choice">
                  <div class="info-group">
                    <div class="title">{item.name}</div>
                    <div class="description">{item.description}</div>
                    <div class="price">{item.price}</div>
                  </div>
                  <div class="check">
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section>
            <h2>Desserts</h2>
            {data.desserts.map((item, index) => (
              <article key={index}>
                <div class="choice">
                  <div class="info-group">
                    <div class="title">{item.name}</div>
                    <div class="description">{item.description}</div>
                    <div class="price">{item.price}</div>
                  </div>
                  <div class="check">
                    <i class="fa-solid fa-check"></i>
                  </div>
                </div>
              </article>
            ))}
          </section>      
        </>
      ) : (
        <div>Chargement...</div>
      )}
      <Footer />
    </>
  );
}
