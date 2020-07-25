import React from "react";
import "./Row.scss";

function Row({
  firstmeals,
  id,
  name,
  calories,
  protein,
  carbohydrates,
  fat,
  sugar,
  newQuantity,
  quantity,
  data,
  setData,
  calculateNutrients,
}) {
  const handleSelect = (e, id) => {
    const newData = [...data];
    newData[id] = firstmeals.find((meal) => meal.name === e.target.value);
    setData(newData);
  };

  const updateNewQuantity = (e, id) => {
    const newData = [...data];
    newData[id].quantity = e.target.value;
    setData(newData);
  };

  let newCalories = calculateNutrients(calories, quantity);
  let newProtein = calculateNutrients(protein, quantity);
  let newCarbohydrates = calculateNutrients(carbohydrates, quantity);
  let newFat = calculateNutrients(fat, quantity);
  let newSugar = calculateNutrients(sugar, quantity);

  return (
    <div>
      <div className="input__container">
        <div className="input__select-input">
          <select
            className="input__select"
            onChange={(e) => handleSelect(e, id)}
          >
            <option className="input__option">Select food</option>
            {firstmeals.map((firstmeal) => (
              <option
                className="input__option"
                value={firstmeal.name}
                key={firstmeal.id}
              >
                {firstmeal.name}
              </option>
            ))}
          </select>
          <input
            placeholder="Input value in grams..."
            className="input__input"
            name="quantity"
            type="number"
            min="0"
            value={newQuantity}
            onChange={(e) => updateNewQuantity(e, id)}
          />
        </div>
        <div className="input__nutrients-container">
          <div className="input__name">
            Food: <span>{name}</span>
          </div>
          <div className="input__calories">
            Calories: {newCalories.toFixed(1)}kcal
          </div>
          <div className="input__protein">
            Protein: {newProtein.toFixed(1)}g
          </div>
          <div className="input__carbs">
            Carbs: {newCarbohydrates.toFixed(1)}g
          </div>
          <div className="input__fat">Fat: {newFat.toFixed(1)}g</div>
          <div className="input__sugar">Sugar: {newSugar.toFixed(1)}g</div>
        </div>
      </div>
    </div>
  );
}

export default Row;
