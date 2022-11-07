import React, { useState, useEffect } from 'react';
import './MusicTable.css'

const MusicTable = (props) => {
    


    return (
        <div className='surronding_box'>
            <table>
                <thead>
                    <tr>
                        <th className='Title'>Title</th>
                        <th className='Artist'>Artist</th> 
                        <th className='Album'>Album</th> 
                        <th className='ReleaseDate'>Release Date</th> 
                        <th className='Genre'>Genre</th> 
                    </tr> 
                </thead>
                <tbody className='Body'>
                    {props.songs.map(song => 
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default MusicTable