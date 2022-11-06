import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./Components/NavBar/NavBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";


function App() {

  const [songs, setSongs] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response)
    setSongs(response.data)
  }

  return (
    <div className="App">
      <NavBar />
      <SearchBar  songs={songs} updateSongs={setSongs}/>
      <MusicTable songs={songs}/>
    </div>
  );
}

export default App;
