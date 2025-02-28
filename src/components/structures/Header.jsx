import "../../styles/header.scss"
import logo from "../../assets/images/logo/ohmyfood.png"

export default function Header(){
    return(
        <header>
      <i className="fa-solid fa-arrow-left"></i>
      <img className="logo" src={logo} alt="Logo website" />
    </header>
    )
}