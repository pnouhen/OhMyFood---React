import "../../styles/footer.scss"
import logo from "/assets/images/logo/ohmyfood.png"

export default function Footer(){
    return(
        <footer>
        <ul>
          <li><i className="fa-solid fa-utensils"></i>Proposer un restaurant</li>
          <li><i className="fa-solid fa-handshake-angle"></i>Devenir partenaire</li>
        </ul>
        <ul>
          <li>Mentions légales</li>
          <li><a href="mailto:example1@exemple.com">Contact</a></li>
        </ul>
        <img src={logo} alt="Logo website" />
      </footer> 
    )
}