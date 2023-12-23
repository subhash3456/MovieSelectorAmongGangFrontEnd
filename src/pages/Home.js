import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/movie/fetchMovie"
    );
    setMovies(result.data);
  };

  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:8080/api/movie/${id}`);
    loadMovies();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">MovieName</th>
              <th scope="col">Rating</th>
              <th scope="col">Genre</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{movie.name}</td>
                <td>{movie.imdbRating}</td>
                <td>{movie.genre}</td>
                <tb>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewMovie/${movie.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editMovie/${movie.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                </tb>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
