import React from 'react';

function Row({firstmeals, id, name, calories, protein, carbohydrates, fat, sugar, newQuantity, setNewQuantity, quantity, data, setData}) {

  const handleSelect = (e, id) => {
    const newData = [...data]
    newData[id] = firstmeals.find(meal => meal.name === e.target.value)
    // console.log(newData[id])
    // console.log(e.target.value)
    setData(newData)
  }

  setNewQuantity = (e, id) => {
    const newData = [...data]
    newData[id].quantity = e.target.value
    setData(newData)
  }

  const calculateNutrients = (nutrient, quantity) => {
    return (Math.round(((nutrient / 100) * quantity) * 100) / 100) || 0;
  }

  let newCalories = calculateNutrients(calories, quantity);
  let newProtein = calculateNutrients(protein, quantity);
  let newCarbohydrates = calculateNutrients(carbohydrates, quantity);
  let newFat = calculateNutrients(fat, quantity);
  let newSugar = calculateNutrients(sugar, quantity);

  return (
    <div>
      <div className="input__container">
        <select className="input__select" onChange={(e) => handleSelect(e, id)}>
          <option className="input__option"></option>
          {firstmeals.map(firstmeal => (
            <option className="input__option" value={firstmeal.name} key={firstmeal.id}>{firstmeal.name}</option>
          ))}
        </select>
        <div className="input__input-container">
          <input className="input__input" name="quantity" type="number" min="0" value={newQuantity} onChange={(e) => setNewQuantity(e, id)}/>
          <div className="input__name">Name: {name}</div>
          <div className="input__calories">calories: {newCalories}kcal</div>
          <div className="input__protein">protein: {newProtein}g</div>
          <div className="input__carbs">carbs: {newCarbohydrates}g</div>
          <div className="input__fat">fat: {newFat}g</div>
          <div className="input__sugar">sugar: {newSugar}g</div>
        </div>
      </div>
    </div>
  )
}

export default Row;