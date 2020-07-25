import React from 'react';
import firebase from '../../firebase';
import deleteIcon from '../../Assets/icons/trash.svg';
import uploadIcon from '../../Assets/icons/upload.svg';

export const NutritionTableInput = ({firstmeal}) => {
  const [name, setName] = React.useState(firstmeal.name)
  const [calories, setCalories] = React.useState(firstmeal.calories)
  const [protein, setProtein] = React.useState(firstmeal.protein)
  const [carbohydrates, setCarbohydrates] = React.useState(firstmeal.carbohydrates)
  const [fat, setFat] = React.useState(firstmeal.fat)
  const [sugar, setSugar] = React.useState(firstmeal.sugar)

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('firstmeals').doc(firstmeal.id).set({...firstmeal, name, calories, protein, carbohydrates, fat, sugar})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('firstmeals').doc(firstmeal.id).delete()
  }

  return (
    <>
      <div className="table__new-input-container">
        <p>Foodtype:</p>
        <input className="table__new-input table__foodtype" value={name} onChange={(e) => {
          setName(e.target.value);
        }} />
      </div>
      <div className="table__new-input-container">
        <p>Calories:</p>
        <input type="number" min="0" className="table__new-input" value={calories} onChange={(e) => {
          setCalories(e.target.value);
        }} />
      </div>
      <div className="table__new-input-container">
        <p>Protein:</p>
        <input type="number" min="0" className="table__new-input" value={protein} onChange={(e) => {
          setProtein(e.target.value);
        }} />
      </div>
      <div className="table__new-input-container">
        <p>Carbs:</p>
        <input type="number" min="0" className="table__new-input" value={carbohydrates} onChange={(e) => {
          setCarbohydrates(e.target.value);
        }} />
      </div>
      <div className="table__new-input-container">
        <p>Fat:</p>
        <input type="number" min="0" className="table__new-input" value={fat} onChange={(e) => {
          setFat(e.target.value);
        }} />
      </div>
      <div className="table__new-input-container">
        <p>Sugar:</p>
        <input type="number" min="0" className="table__new-input" value={sugar} onChange={(e) => {
          setSugar(e.target.value);
        }} />
      </div>
      <div className="table__buttons-container">
        <button 
          className="table__update-button"
          onClick={onUpdate}><img className="table__icon" src={uploadIcon} alt="Cloud icon"/>Update</button>
        <button 
          className="table__delete-button"
          onClick={onDelete}><img className="table__icon" src={deleteIcon} alt="Trash icon"/>Delete</button>
      </div>
    </>
  )
}

export default NutritionTableInput;