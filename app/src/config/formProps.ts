const formProps = {
  email: {
    id: 'email',
    icon: 'email',
    type: 'email',
    label: 'Email',
  },
  login: {
    id: 'login',
    icon: 'portrait',
    type: 'text',
    label: 'Login',
  },
  password: {
    id: 'password',
    icon: 'password',
    type: 'password',
    label: 'Password',
  },
  name: {
    id: 'name',
    icon: 'portrait',
    type: 'text',
    label: 'Name',
  },
  subject: {
    id: 'subject',
    icon: 'title',
    type: 'text',
    label: 'Subject',
  },
  userMessage: {
    id: 'textarea',
    icon: 'subject',
    type: 'text',
    label: 'Your message...',
  },
  recipeName: {
    id: 'name',
    type: 'text',
    label: 'Recipe name',
  },
  recipeCategory: {
    id: 'category',
    label: 'Category',
  },
  recipeIngredients: {
    id: 'ingredients',
    type: 'text',
    label: 'Ingredients',
  },
  recipeInstructions: {
    id: 'textarea',
    type: 'text',
    label: 'Instructions',
  },
  recipeThumbnail: {
    id: 'thumbnail',
    type: 'text',
    label: 'Thumbnail',
    required: false,
  },
  recipeVideo: {
    id: 'video',
    type: 'text',
    label: 'Video (youtube only!)',
    required: false,
  },
};

export default formProps;
