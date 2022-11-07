import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./Components/NavBar/NavBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddMusicTable from "./Components/AddMusicTable/AddMusicTabel";


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response)
    setSongs(response.data)
  }

  return (
    <body>
      <div className="App">
        <NavBar />
        <MusicTable songs={songs}/>
        <AddMusicTable GetAllSongs={getAllSongs}/>
        <SearchBar  songs={songs} updateSongs={setSongs}/>
      </div>
    </body>
    
  );
}

export default App;
