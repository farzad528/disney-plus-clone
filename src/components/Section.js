import { useEffect, useState } from "react";
import Card from "./Card";

function Section({ genre }) {
  const [movies, setMovies] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getMovies", {
      method: "POST",
      body: JSON.stringify({ genre: genre }),
    });
    const responseBody = await response.json();
    console.log(responseBody.data.movies_by_genre.values);
    setMovies(responseBody.data.movies_by_genre.values);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2 id={genre}>{genre}</h2>
      {movies && (
        <div className="movie-section">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default Section;
