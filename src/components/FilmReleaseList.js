import React from 'react';
import Film from './Film';

const FilmReleaseList = ({films}) => {
    const filmNodes = films.map(({id, name, url}) => {
        return <Film key = {id} url = {url}>{name}</Film>
    })

    return (
        <>
            <h2>FilmReleaseList goes here</h2>
            {filmNodes}
        </>
    )
}

export default FilmReleaseList;