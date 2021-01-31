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

  return { postForm, onChange, onSubmit };
};
