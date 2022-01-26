import formProps from '../config/formProps';
import IIndexable from '../ts/interfaces/IIndexable';
import IInputProps from '../ts/interfaces/IInputProps';

type ReactFn = React.Dispatch<React.SetStateAction<string>>;

const strategies: IIndexable = {
  name: { ...formProps.recipeName },
  category: { ...formProps.recipeCategory },
  ingredients: { ...formProps.recipeIngredients },
  instructions: { ...formProps.recipeInstructions },
  thumbnail: { ...formProps.recipeThumbnail },
  video: { ...formProps.recipeVideo },
};

const addRecipeProps = (setFunction: ReactFn, type: string): IInputProps => {
  return { handleData: setFunction, ...strategies[type] };
};

export default addRecipeProps;
