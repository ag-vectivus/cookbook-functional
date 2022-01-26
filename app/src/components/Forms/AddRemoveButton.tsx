import React from 'react';

const AddRemoveButton = ({ ...props }) => {
  const { ingredients, number, setIngredients } = props.buttonProps;

  const handleButton = (action: string) => {
    const updatedIngredients = ingredients.slice();
    if (action === 'add') {
      const ingredientKey = `ingredient${updatedIngredients.length + 1}`;
      updatedIngredients.push({ [ingredientKey]: '' });
    } else {
      updatedIngredients.pop();
    }
    setIngredients(updatedIngredients);
  };

  return (
    <React.Fragment>
      {ingredients.length === number && ingredients.length < 20 ? (
        <a
          className="btn-small teal"
          onClick={() => handleButton('add')}
          data-testid="add-ingredient-button"
        >
          <i className="material-icons">add</i>
        </a>
      ) : null}
      {ingredients.length === number && ingredients.length !== 1 ? (
        <a
          className="btn-small orange"
          onClick={() => handleButton('remove')}
          data-testid="remove-ingredient-button"
        >
          <i className="material-icons">remove</i>
        </a>
      ) : null}
    </React.Fragment>
  );
};

export default AddRemoveButton;
