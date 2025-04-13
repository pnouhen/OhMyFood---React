import "../../styles/header.scss"
import logo from "/assets/images/logo/ohmyfood.webp"

export default function Header(){
    return(
        <header>
      <img className="logo" src={logo} alt="Logo website" />
    </header>
    )
}