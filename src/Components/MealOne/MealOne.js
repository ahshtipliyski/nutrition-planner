import React from "react";
import "./MealOne.scss";
import Row from "../Row/Row";

function MealOne({
  data,
  firstmeals,
  updateData,
  newQuantity,
  setNewQuantity,
  calculateNutrients,
  totalProtein,
  totalCalories,
  totalCarbohydrates,
  totalFat,
  totalSugar,
}) {
  return (
    <div className="input">
      {data.map(function (nutrient, index) {
        return [
          <Row
            key={nutrient.id}
            id={index}
            firstmeals={firstmeals}
            name={nutrient.name}
            quantity={nutrient.quantity}
            calories={nutrient.calories}
            protein={nutrient.protein}
            carbohydrates={nutrient.carbohydrates}
            fat={nutrient.fat}
            sugar={nutrient.sugar}
            newQuantity={newQuantity}
            setNewQuantity={setNewQuantity}
            setData={updateData}
            data={data}
            calculateNutrients={calculateNutrients}
          />,
        ];
      })}
      <div className="input__totals-container">
        <h2 className="input__totals-title">Meal totals:</h2>
        <div className="input__totals-values">
          <div className="input__totals-nutrient">
            Calories: {totalCalories.toFixed(1)}kcal
          </div>
          <div className="input__totals-nutrient">
            Protein: {totalProtein.toFixed(1)}g
          </div>
          <div className="input__totals-nutrient">
            Carbs: {totalCarbohydrates.toFixed(1)}g
          </div>
          <div className="input__totals-nutrient">
            Fat: {totalFat.toFixed(1)}g
          </div>
          <div className="input__totals-nutrient">
            Sugar: {totalSugar.toFixed(1)}g
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealOne;
