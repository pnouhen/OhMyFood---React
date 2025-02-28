import { useParams } from "react-router";
import {useState, useEffect} from "react";
import Header from "../structures/Header";
import Button from "../ui/Button";
import GenerateData from "../service/GenerateData";
import Heart from "../ui/Heart";
import Footer from "../structures/Footer";
import "../../styles/home.scss";

export default function Home() {
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
        <Header />
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Paris, Belleville</p>
        </div>
        <div className="reservation">
          <h1>Réservez le menu qui vous convient</h1>
          <p>
            Découvrez des restaurants d’exception, sélectionnés par nos soins.
          </p>
          <Button content="Explorer nos restaurants" />
        </div>
        <section className="restaurant">
          <GenerateData setData={setData} />
          {data ? (
            data.map((item) => (
              <article key={item.id}>
                <img src={item.image} alt="Picture of La note enchantée" />
                <span className={item.new == 1 ? "new" : ""}>{item.new == 1 ? "Nouveau" : ""}</span>
                <div>
                  <h3>{item.restaurant}</h3>
                  <p>Charonne</p>
                </div>
                <Heart/>
              </article>
            ))
          ) : (
            <div>Chargement...</div>
          )}
        </section>

        <Footer />
      </>
    );
}
