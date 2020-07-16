import React from 'react';
import firebase from '../../firebase';
import { uuid } from 'uuidv4';

function CalorieCalclator() {
  const [firstmeals, setFirstmeals] = React.useState([])
  const [items, setItems] = React.useState('');

  React.useEffect(() => {
      const db = firebase.firestore()
      return db.collection('firstmeals').onSnapshot((snapshot) => {
        const firstmealsData = []
        snapshot.forEach(doc => firstmealsData.push(({...doc.data(), id:doc.id})))
        setFirstmeals(firstmealsData);
      });
  }, []);

  const handleSelect = (e) => {
    let findItem = firstmeals.find(item => item.id === e.target.value)
    setItems(findItem)
  }
  
  return (
    <div>
      <select onChange={handleSelect}>
        <option></option>
        {firstmeals.map(firstmeal => (
          <option value={firstmeal.id} key={uuid()}>{firstmeal.name}</option>
        ))}
      </select>
        <input type="text"/>
        <div>Here is the calories: {items.calories}</div>
        <div>Here is the protein: {items.protein}</div>
        <div>Here is the carbs: {items.carbohydrates}</div>
        <div>Here is the fat: {items.fat}</div>
        <div>Here is the sugar: {items.sugar}</div>
    </div>
  )
}

export default CalorieCalclator;
