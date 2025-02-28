import { useParams } from "react-router";
import { useEffect } from "react";
export default function GenerateData({setData}){
    const {id} = useParams()
    useEffect(() => {
        fetch("./../../../public/data/data.json")
          .then((response) => response.json())
          .then((data) => {
            // To browse the database to recover the accommodation with his id 
            if (id) {
              const selectedMenu = data.find(item => item.id === id);
              // Function for generate data => id in Cards, Accommodation and Slideshow
              setData(selectedMenu);  
            } else {
              setData(data);
            }
          })
          .catch((error) =>
            console.error("Erreur lors de la récupération des données :", error)
          );
          // Table according to the elements to be modified
      }, [id, setData]); 
      return null;     
}