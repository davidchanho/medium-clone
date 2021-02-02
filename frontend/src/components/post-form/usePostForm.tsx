import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";
import { initialPost, IPost } from "../../store/reducers/posts";

export const usePostForm = () => {
  const [postForm, setPostForm] = useState<IPost>(initialPost);
  const { addPost } = useActions();
  const { publications } = useSelector(postSelectors);
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      publicationId: publications[0]._id,
      [name]: value,
    });
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log(files[0]);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      postForm.body.length > 6 &&
      postForm.title.length > 6 &&
      postForm.publicationId
    ) {
      try {
        addPost(postForm);
        setPostForm(initialPost);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { postForm, publications, onChange, onSubmit, onFileChange };
};
