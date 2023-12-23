import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewMovie() {
  const [movie, setMovie] = useState({
    name: "",
    imdbRating: "",
    genre: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    const result = await axios.get(`http://localhost:8080/api/movie/${id}`);
    setMovie(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Movie Info</h2>
          <div className="card">
            <div className="card-header">
              Details of the Movie id:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {movie.name}
                </li>
                <li className="list-group-item">
                  <b>ImdbRating:</b>
                  {movie.imdbRating}
                </li>
                <li className="list-group-item">
                  <b>Genre:</b>
                  {movie.genre}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
