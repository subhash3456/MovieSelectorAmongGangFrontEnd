import axios from "axios";
import React from "react";
import Form from "./Components/Form";
import GetCall from "./Components/GetCall";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const postList = post.map((p) => <li>{p.id}</li>);

  return (
    <div>
      <h1>the List </h1>
      {/* <ul>{postList}</ul> */}
      <Form />
      {/* <GetCall /> */}
    </div>
  );
}
