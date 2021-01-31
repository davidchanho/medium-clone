import React from "react";
import { usePostForm } from "./usePostForm";

function PostForm() {
  const { postForm, onSubmit, onChange } = usePostForm();

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="title"
        type="text"
        value={postForm.title}
        name="title"
        onChange={onChange}
        minLength={6}
        autoFocus
      />
      <input
        placeholder="body"
        type="text"
        value={postForm.body}
        name="body"
        onChange={onChange}
        minLength={6}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default PostForm;
