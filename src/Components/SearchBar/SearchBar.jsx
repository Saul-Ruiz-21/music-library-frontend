import React, {useState} from "react";
import './SearchBar.css'

const SearchBar = ({songs, updateSongs}) => {
    const [SearchTerm, setSearchTerm] = useState('');

    function searchForSong(){
        let result = songs.filter(function(song){
            if(song.title.includes(SearchTerm)){
                return true
            }
            if(song.artist.includes(SearchTerm)){
                return true
            }
            if(song.album.includes(SearchTerm)){
                return true
            }
            if(song.release_date.includes(SearchTerm)){
                return true
            }
            if(song.genre.includes(SearchTerm)){
                return true
            }
        })
        updateSongs(result)
    }



    return(
        
        <div className="Bar">
            <input type="text" placeholder="Search..." value={SearchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button type="submit" onClick={searchForSong}>search</button>
        </div>
    );
}

export default SearchBar