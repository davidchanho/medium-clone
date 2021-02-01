import React from "react";
import { usePostForm } from "./usePostForm";

function PostForm() {
  const { postForm, onSubmit, onChange, onFileChange } = usePostForm();
 
  const {title, body} = postForm

  return (
    <form onSubmit={onSubmit} className="d-flex flex-column" noValidate>
      <label>Title</label>
      <input
        placeholder="title"
        type="text"
        value={title}
        name="title"
        onChange={onChange}
        minLength={6}
        autoFocus
      />
      <label>Body</label>
      <input
        placeholder="body"
        type="text"
        value={body}
        name="body"
        onChange={onChange}
        minLength={6}
      />
      <label>Image</label>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <button type="submit">submit</button>
    </form>
  );
}

export default PostForm;
