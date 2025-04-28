import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <i className="fa-solid fa-utensils"></i>Proposer un restaurant
        </li>
        <li>
          <i className="fa-solid fa-handshake-angle"></i>Devenir partenaire
        </li>
      </ul>
      <ul>
        <li>Mentions légales</li>
        <li>
          <a href="mailto:example1@exemple.com">Contact</a>
        </li>
      </ul>
      <img
        src="/assets/images/logo/ohmyfood.webp"
        alt="Logo website"
        loading="lazy"
      />
    </footer>
  );
}
