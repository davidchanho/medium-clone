import React from "react";
import { usePostForm } from "./usePostForm";

function PostForm() {
  const { postForm, onSubmit, onChange } = usePostForm();

  return (
    <form onSubmit={onSubmit} className='d-flex flex-column'>
      <label htmlFor="">Title</label>
      <input
        placeholder="title"
        type="text"
        value={postForm.title}
        name="title"
        onChange={onChange}
        minLength={6}
        autoFocus
      />
      <label htmlFor="">Body</label>
      <input
        placeholder="body"
        type="text"
        value={postForm.body}
        name="body"
        onChange={onChange}
        minLength={6}
      />
      <label htmlFor="">Image</label>
      <input type='file' accept="image/*" />
      <button type="submit">submit</button>
    </form>
  );
}

export default PostForm;
