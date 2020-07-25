import React from 'react';
import './Converter.scss';

function Converter() {
  const [grams, setGrams] = React.useState();
  const [calories, setCalories] = React.useState();
  const [protein, setProtein] = React.useState();
  const [carbs, setCarbs] = React.useState();
  const [fat, setFat] = React.useState();
  const [sugar, setSugar] = React.useState();

  const calcNutrient = (nutrient) => {
    return (+nutrient * 100) / +grams || 0;
  }

  let calcCalories = calcNutrient(calories)
  let calcProtein = calcNutrient(protein)
  let calcCarbs = calcNutrient(carbs)
  let calcFat = calcNutrient(fat)
  let calcSugar = calcNutrient(sugar)

  return (
    <div className="converter">
      <div className="converter__title-container">
        <h2>Converter:</h2>
        <p>Input nutrition facts below, to convert for 100g.</p>
      </div>
      <div className="converter__input-container"> 
        <input className="converter__input converter__grams" type="number" min="0" value={grams || ''} onChange={(e) => setGrams(e.target.value)} placeholder="Input grams from label." />
      </div>
      <div className="converter__input-container">
        <input className="converter__input" type="number" min="0" value={calories || ''} onChange={(e) => setCalories(e.target.value)} placeholder="Input calories..."/>
        <p className="converter__input-value">Calories: <br/> {calcCalories.toFixed(1)}kcal</p>
      </div>
      <div className="converter__input-container">
        <input className="converter__input" type="number" min="0" value={protein || ''} onChange={(e) => setProtein(e.target.value)} placeholder="Input protein..."/>
        <p className="converter__input-value">Protein: <br/> {calcProtein.toFixed(1)}g</p>
      </div>
      <div className="converter__input-container">
        <input className="converter__input" type="number" min="0" value={carbs || ''} onChange={(e) => setCarbs(e.target.value)} placeholder="Input carbs..."/>
        <p className="converter__input-value">Carbs: <br/> {calcCarbs.toFixed(1)}g</p>
      </div>
      <div className="converter__input-container">
        <input className="converter__input" type="number" min="0" value={fat || ''} onChange={(e) => setFat(e.target.value)} placeholder="Input fat..."/>
        <p className="converter__input-value">Fat: <br/> {calcFat.toFixed(1)}g</p>
      </div>
      <div className="converter__input-container">
        <input className="converter__input" type="number" min="0" value={sugar || ''} onChange={(e) => setSugar(e.target.value)} placeholder="Input sugar..."/>
        <p className="converter__input-value">Sugar: <br/> {calcSugar.toFixed(1)}g</p>
      </div>
      <div className="converter__guide">
        <p>Use these values to fill up the form below and add your food.</p>
      </div>
    </div>
  )
}

export default Converter;