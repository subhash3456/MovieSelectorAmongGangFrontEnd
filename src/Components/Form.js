import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import axios from "axios";

export default function Form() {
  const [inputs, setInputs] = useState("");

  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState([]);
  const [postNm, setPostNm] = useState(" ");

  //   const [postList1, setPostList1] = useState("initial");

  const handleChange = (event) => {
    setInputs(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
        alert("the alert is  ${postNm}");
      })
      .catch((err) => {
        console.log(err);
      });

    // const postList1 = post.map((movie) => <li>{movie.id}</li>);
    // alert(`The name you entered was: ${inputs}`);
  };

  const postList1 = post.map((movie) => <li>{movie.id}</li>);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Movie Details:
          <select value={inputs} onChange={handleChange}>
            <option value="avalaibleOn">AvalaibleOn</option>
            <option value="prime">Prime</option>
            <option value="Netflix">Thriller</option>
          </select>
        </label>
        <label>
          Enter your name:
          <input
            type="text"
            value={postNm}
            onChange={(e) => setPostNm(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <div>
        <ul>{postList1}</ul>
      </div>
    </div>
  );
}
