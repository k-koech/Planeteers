import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planteers, search }) {

  const filteredPlanteers = planteers
  .filter(planteer => {
    if (search === '') return true
    return planteer.bio.toLowerCase().includes(search.toLowerCase())
  })
  
  .filter(planteer => {
    if (search === planteer.name) return planteer.name.includes(search)
    return true
    
  })

  return (
    <ul className="cards">
      {filteredPlanteers.map(planteer => {
        return <Planeteer key={planteer.id} name={planteer.name} 
        picture={planteer.pictureUrl} bio={planteer.bio} quote={planteer.quote}
        born={planteer.born} twitter={planteer.twitter} fromUSA={planteer.fromUSA}
        id={planteer.id} />
      })}
    </ul>
  );
}

export default PlaneteersContainer;
