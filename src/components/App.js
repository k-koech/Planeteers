import React, { useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planteers, setPlanteers] = useState([])
  const [search, setSearch] = useState('')

  function handleSearch(event){
    setSearch(search => event.target.value);
  }

  useEffect(() => {
    fetch('https://react-codechallenges.herokuapp.com/planeteers')
      .then(res => res.json())
      .then(data => setPlanteers(data))
  }, [])

  function addRandomPlanteer(planteer){
    const headerData = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(planteer)
    }

    fetch('https://react-codechallenges.herokuapp.com/planeteers', headerData)
      .then(res => res.json()).then(data => setPlanteers([...planteers, planteer]))
  }

  return (
    <div>
      <Header />
      <SearchBar search={search} handleSearch={handleSearch} />
      <RandomButton addRandomPlanteer={addRandomPlanteer} />
      <PlaneteersContainer search={search} planteers={planteers} />
    </div>
  );
}

export default App;
