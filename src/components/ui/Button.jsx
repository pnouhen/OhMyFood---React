import "../../styles/button.scss"

export default function Button({localisation, content}){
    return(
        <a href={localisation} className="button">{content}</a> 
    )
}