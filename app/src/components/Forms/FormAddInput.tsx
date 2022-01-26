import React, { useEffect, useState } from 'react';
import IInputProps from '../../ts/interfaces/IInputProps';
import AddRemoveButton from './AddRemoveButton';
import FormInput from './FormInput';

const FormAddInput = (props: { inputProps: IInputProps }): JSX.Element => {
  const [ingredients, setIngredients]: any = useState([{ ingredient1: '' }]);
  const { handleData } = props.inputProps;

  const handleChange = (arrayOfIngredients: string[]) => {
    const ingredientsJSON = JSON.stringify(arrayOfIngredients);
    handleData(ingredientsJSON);
  };

  const handleIngredient = (updatedIngredient: any) => {
    const ingredientsCopy = ingredients.slice();
    const ingredientKey = `ingredient${updatedIngredient.number}`;
    ingredientsCopy[Number(updatedIngredient.number) - 1] = {
      [ingredientKey]: updatedIngredient[ingredientKey],
    };
    setIngredients(ingredientsCopy);
  };

  useEffect(() => {
    handleChange(ingredients);
  }, [ingredients]);

  return (
    <div className="row">
      {ingredients.map((ingredient: any, index: number) => {
        const number = index + 1;
        return (
          <div className="valign-wrapper">
            <div className={`col s12`}>
              <FormInput
                inputProps={{
                  id: `ingredient${number}`,
                  type: 'text',
                  label: `Ingredient ${number}`,
                  handleData: handleIngredient,
                }}
                key={`ingredient-input-${number}`}
              />
            </div>
            <AddRemoveButton
              buttonProps={{ ingredients, number, setIngredients }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FormAddInput;
