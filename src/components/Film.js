import React from 'react';

const Film = ({url, children}) => {
    return (
        <>
            <a href={url} target="_blank">{children}</a> <br></br>
        </>
    )
}

export default Film;