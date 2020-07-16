import React from 'react';
import firebase from '../../firebase';

export const FirstMealInput = ({firstmeal}) => {
  const [name, setName] = React.useState(firstmeal.name)
  const [calories, setCalories] = React.useState(firstmeal.calories)
  const [protein, setProtein] = React.useState(firstmeal.protein)
  const [carbohydrates, setCarbohydrates] = React.useState(firstmeal.carbohydrates)
  const [fat, setFat] = React.useState(firstmeal.fat)

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('firstmeals').doc(firstmeal.id).set({...firstmeal, name, calories, protein, carbohydrates, fat})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('firstmeals').doc(firstmeal.id).delete()
  }

  return (
    <>
      <input value={name} onChange={(e) => {
        setName(e.target.value);
      }} />
      <input value={calories} onChange={(e) => {
        setCalories(e.target.value);
      }} />
      <input value={protein} onChange={(e) => {
        setProtein(e.target.value);
      }} />
      <input value={carbohydrates} onChange={(e) => {
        setCarbohydrates(e.target.value);
      }} />
      <input value={fat} onChange={(e) => {
        setFat(e.target.value);
      }} />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
      
    </>
  )
}

export default FirstMealInput;