import React, { ChangeEvent, FormEvent, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { initialPost, IPost } from "../../store/reducers/posts";

function PostForm() {
  const [postForm, setPostForm] = useState<IPost>(initialPost);
  const { addPost } = useActions();
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postForm.body.length > 6 && postForm.title.length > 6) {
      try {
        addPost(postForm);
        setPostForm(initialPost);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
