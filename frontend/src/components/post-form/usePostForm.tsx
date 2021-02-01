import { ChangeEvent, FormEvent, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { initialPost, IPost } from "../../store/reducers/posts";

export const usePostForm = () => {
  const [postForm, setPostForm] = useState<IPost>(initialPost);
  const { addPost } = useActions();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log(files[0]);
    }
  };

  const {title, body} = postForm

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (body.length > 6 && title.length > 6) {
      try {
        addPost(postForm);
        setPostForm(initialPost);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { postForm, onChange, onSubmit, onFileChange };
};
