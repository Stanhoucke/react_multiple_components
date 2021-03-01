import React from 'react';
import FilmReleaseList from '../components/FilmReleaseList'
import UpcomingReleasesLink from '../components/UpcomingReleasesLink'

const FilmReleaseBox = () => {

    return (
        <>
            <h1>Upcoming Film Releases for UK</h1>
            <FilmReleaseList/>
            <UpcomingReleasesLink/>
        </>
    )
}

export default FilmReleaseBox;