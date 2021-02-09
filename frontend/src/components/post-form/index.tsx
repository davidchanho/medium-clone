import React from "react";
import { IPublication } from "../../types";
import { usePostForm } from "./usePostForm";

function PostForm() {
  const {
    postForm,
    publications,
    onSubmit,
    onChange,
    onFileChange,
  } = usePostForm();

  const { title, body, publicationId } = postForm;

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
      <label>Publication</label>
      <select onChange={onChange} value={publicationId} name="publicationId">
        {publications.map((publication: IPublication) => {
          return (
            <option key={publication._id} value={publication._id}>
              {publication.name}
            </option>
          );
        })}
      </select>
      <button type="submit">submit</button>
    </form>
  );
}

export default PostForm;
