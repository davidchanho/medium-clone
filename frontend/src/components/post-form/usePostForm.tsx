import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { publicationSelectors } from "../../store";
import { initialPost } from "../../store/posts/reducers";
import { IPost } from "../../store/posts/types";

export const usePostForm = () => {
  const [postForm, setPostForm] = useState<IPost>(initialPost);
  const { addPost } = useActions();
  const { publications } = useSelector(publicationSelectors);
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

  const { register, handleSubmit } = useForm<IPost>();

  const onSubmit = (postForm: IPost) => {
    const newPost = {
      ...initialPost,
      body: postForm.body,
      title: postForm.title,
      publicationId: postForm.publicationId,
      date: new Date().toLocaleDateString()
    }
    if (
      newPost.body.length > 6
    ) {
      try {
        addPost(newPost);
        setPostForm(initialPost);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return {
    postForm,
    publications,
    onChange,
    onSubmit,
    onFileChange,
    handleSubmit,
    register,
  };
};
