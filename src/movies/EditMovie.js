import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditMovie() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [movie, setMovie] = useState({
    name: "",
    imdbRating: "",
    genre: "",
  });

  const { name, imdbRating, genre } = movie;

  const onInputChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadMovie();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/movie/${id}`, movie);
    navigate("/");
  };

  const loadMovie = async () => {
    const result = await axios.get(`http://localhost:8080/api/movie/${id}`);
    setMovie(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Your Movie</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Movie Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Movie"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ImdbRating" className="form-label">
                Imdb Rating
              </label>
              <input
                type={"text"}
                className="form-control"
                name="imdbRating"
                value={imdbRating}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Genre" className="form-label">
                Genre
              </label>
              <input
                type={"text"}
                className="form-control"
                name="genre"
                value={genre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
