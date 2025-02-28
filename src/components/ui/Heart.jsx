import { useState } from "react"
import "../../styles/heart.scss"

export default function Heart(){
    const [click, setclick] =useState(false)
    return(
        <i className={ click ? "fa-solid fa-heart active" : "fa-regular fa-heart"}
        onClick={() => {
            setclick(!click);
          }} ></i>
    )
}