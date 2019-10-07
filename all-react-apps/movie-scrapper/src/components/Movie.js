import React from 'react';
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export default function Movie({title, poster, year}) {
    const finalPoster = poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : poster;    
    return (
        <div className="movie">
            <h2>Title: {title}</h2>
            <div>
                <img width="200" alt={title} src={finalPoster} />
                <p>{year}</p>
            </div>
        </div>
    )
}
