import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { IPost } from "../../types";

const initialPost: IPost = {
  title: "",
  body: "",
};

function PostForm() {
  const [postForm, setPostForm] = useState<IPost>(initialPost);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("/api/posts", postForm)
      .then(() => setPostForm(initialPost))
      .catch((err) => console.log(err));
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="title" type="text" name="title" onChange={onChange} />
      <input placeholder="body" type="text" name="body" onChange={onChange} />
      <button type="submit">submit</button>
    </form>
  );
}

export default PostForm;
