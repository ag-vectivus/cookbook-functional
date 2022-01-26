import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import postCredentials from '../api/postCredentials';
import getData from '../api/getData';
import endpoints from '../config/endpoints';
import MainSection from '../components/Sections/MainSection';
import FormFooter from '../components/Forms/FormFooter';
import FormInput from '../components/Forms/FormInput';
import FormSelect from '../components/Forms/FormSelect';
import FormAddInput from '../components/Forms/FormAddInput';
import scrollToSelector from '../helpers/scrollToSelector';
import addRecipeProps from '../service/addRecipeProps';
import IFormFooterProps from '../ts/interfaces/IFormFooterProps';

const AddRecipe = (): JSX.Element => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [video, setVideo] = useState('');
  const [message, setMessage] = useState('');
  const { auth } = useContext(AuthContext);
  const redirect = useNavigate();

  useEffect(() => {
    scrollToSelector('h4');
  }, []);

  useEffect(() => {
    if (auth.uid === 'init') {
      redirect('/');
    }
  }, [auth]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactFormMessage = postCredentials({
      authorUID: auth.uid,
      name,
      category,
      ingredients,
      instructions,
      thumbnail,
      video,
    });

    getData(`${endpoints.server}/add`, contactFormMessage)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  const nameProps = addRecipeProps(setName, 'name');
  const categoryProps = addRecipeProps(setCategory, 'category');
  const ingredientsProps = addRecipeProps(setIngredients, 'ingredients');
  const instructionsProps = addRecipeProps(setInstructions, 'instructions');
  const thumbnailProps = addRecipeProps(setThumbnail, 'thumbnail');
  const videoProps = addRecipeProps(setVideo, 'video');
  const footerProps: IFormFooterProps = { title: 'add', message };

  return (
    <div className="container">
      <MainSection title="add recipe">
        <div className="row">
          <form
            className="col s12 push-m2 m8 push-xl3 xl6"
            onSubmit={handleSubmit}
          >
            <FormInput inputProps={nameProps} />
            <FormSelect inputProps={categoryProps} />
            <FormAddInput inputProps={ingredientsProps} />
            <FormInput inputProps={instructionsProps} />
            <FormInput inputProps={thumbnailProps} />
            <FormInput inputProps={videoProps} />
            <FormFooter formFooterProps={footerProps} />
          </form>
        </div>
        <div className="row">
          <p className="center-align">*Required</p>
        </div>
      </MainSection>
    </div>
  );
};

export default AddRecipe;
