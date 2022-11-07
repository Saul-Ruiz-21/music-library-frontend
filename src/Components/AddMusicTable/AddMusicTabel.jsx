import React, { useState } from "react"
import axios from 'axios'
import './AddMusicTable.css'


const AddMusicTable = (GetAllSongs) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    async function createSong(){
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        }
        let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        if(response.status === 201){
            await GetAllSongs
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createSong('');
        setTitle('')
        setArtist('')
        setAlbum('')
        setReleaseDate('')
        setGenre('')
    };

    
    return(
        <form onSubmit={handleSubmit}>
            <div className="AddMusicTable">
                <div><h3>Add Song</h3></div>

                <div className="title">
                    <label >Title <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/></label> 
                </div>
            
                <div className="artist">
                    <label>Artist<input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/></label>
                </div>

                <div className="album">
                    <label>Album <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/></label>
                </div>

                <div className="release">
                    <label>Release Date <input type="text" value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/></label>
                </div>

                <div className="genre">
                    <label>Genre <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/></label>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
        )
    
}

export default AddMusicTable