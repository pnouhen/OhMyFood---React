import "../../styles/loader.scss"

export default function Loader(){
    return(
        <div className="loader">
      <div className="loader___container">
        <div className="cercle"></div>
      <img className="logo" src="/assets/images/logo/ohmyfood.webp" alt="Logo website" />
        <i className="fa-solid fa-location-dot"></i>
        <i className="fa-solid fa-mobile-screen-button"></i>
        <i className="fa-solid fa-list"></i>
        <i className="fa-solid fa-store"></i>
      </div>
    </div>
    )
}