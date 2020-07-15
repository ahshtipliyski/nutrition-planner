import React from 'react';
import firebase from './firebase';

export const FirstMealInput = ({firstmeal}) => {
  const [protein, setProtein] = React.useState(firstmeal.protein)
  const [name, setName] = React.useState(firstmeal.name)


  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('firstmeals').doc(firstmeal.id).set({...firstmeal, protein, name})
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
      <input value={protein} onChange={(e) => {
        setProtein(e.target.value);
      }} />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
      
    </>
  )
}

export default FirstMealInput;