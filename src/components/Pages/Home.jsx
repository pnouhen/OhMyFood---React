import Header from "../structures/Header";
import Button from "../ui/Button";
import Heart from "../ui/Heart";
import Cards from "../ui/Cards";
import Footer from "../structures/Footer";
import "../../styles/home.scss";

export default function Home() {
    return (
      <>
        <Header />
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
        <Cards />
        <Footer />
      </>
    );
}
