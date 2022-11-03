import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./Components/NavBar/NavBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }

  function searchForSong(){

    let search = songs.filter(song => {
        if(SearchBar === song.title){
            return true
        }
        else if(SearchBar === song.artist){
            return true
        }
        else if(SearchBar === song.album){
            return true
        }
        else if(SearchBar === song.release_date){
            return true
        }
        else if(SearchBar === song.genre){
            return true
        }
    })

  }

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <MusicTable songs={songs}/>
    </div>
  );
}

export default App;
