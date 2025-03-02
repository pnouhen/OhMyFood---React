import Header from "../structures/Header";
import Loader from "../ui/Loader";
import Button from "../ui/Button";
import Cards from "../ui/Cards";
import Footer from "../structures/Footer";
import "../../styles/home.scss";

export default function Home() {
    return (
      <>
        <Header />
        <Loader />
        <section className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Paris, Belleville</p>
        </section>
        <section className="reservation">
          <h1>Réservez le menu qui vous convient</h1>
          <p>
            Découvrez des restaurants d’exception, sélectionnés par nos soins.
          </p>
          <Button content="Explorer nos restaurants" />
        </section>
        <section className="fonctionnement">
        <h2>Fonctionnement</h2>
        <ul>
          <li>
            <div>
              <i className="fa-solid fa-mobile-screen-button"></i>
              <p>Choisissez un restaurant</p>
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-list"></i>
              <p>Composez votre menu</p>
            </div>
          </li>
          <li>
            <div>
              <i className="fa-solid fa-store"></i>
              <p>Dégustez au restaurant</p>
            </div>
          </li>
        </ul>
      </section>
        <Cards />
        <Footer />
      </>
    );
}
