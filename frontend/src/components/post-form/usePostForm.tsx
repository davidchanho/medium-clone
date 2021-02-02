import { ChangeEvent, FormEvent, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { initialPost, IPost } from "../../store/reducers/posts";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";

export const usePostForm = () => {
  const [postForm, setPostForm] = useState<IPost>(initialPost);
  const { addPost } = useActions();
  const {publications} = useSelector(postSelectors)
  const navigate = useNavigate();

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

  const onSelectPublication = () => {

  }

  const {title, body} = postForm

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (body.length > 6 && title.length > 6) {
      try {
        addPost(postForm);
        setPostForm(initialPost);
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { postForm, publications, onChange, onSubmit, onFileChange };
};
