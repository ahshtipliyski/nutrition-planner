import React from 'react';
import firebase from '../../firebase';
import FirstMealInput from '../FirstMealInput/FirstMealInput';
import './FirstMeal.scss'
import { uuid } from 'uuidv4';


function FirstMeal() {

  const [firstmeals, setFirstmeals] = React.useState([])
  const [newMealName, setNewMealName] = React.useState()
  const [newCalories, setNewCalories] = React.useState()
  const [newProtein, setNewProtein] = React.useState()
  const [newCarbs, setNewCarbs] = React.useState()
  const [newFats, setNewFats] = React.useState()
  const [newSugar, setNewSugar] = React.useState()

  React.useEffect(() => {
      const db = firebase.firestore()
      return db.collection('firstmeals').onSnapshot((snapshot) => {
        const firstmealsData = []
        snapshot.forEach(doc => firstmealsData.push(({...doc.data(), id:doc.id})))
        setFirstmeals(firstmealsData);
      });
  }, []);

  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('firstmeals').add({
      name: newMealName, 
      calories: newCalories, 
      protein: newProtein, 
      carbohydrates: newCarbs,
      fat: newFats,
      sugar: newSugar,
      id: uuid()
    })
    setNewMealName('');
    setNewCalories('');
    setNewProtein('');
    setNewCarbs('');
    setNewFats('');
    setNewSugar('');
  }

  const proteinTotal = firstmeals.reduce((totalProtein, firstmeal) => +totalProtein + +firstmeal.protein, 0);

  return (
    <>
    <div>
      <label htmlFor="mealname">Foods</label>
      <input name="mealname" value={newMealName} onChange={(e) => setNewMealName(e.target.value)}/>
      <label htmlFor="calories">Calories</label>
      <input name="calories" value={newCalories} onChange={(e) => setNewCalories(e.target.value)}/>
      <label htmlFor="protein">Protein</label>
      <input name="protein" value={newProtein} onChange={(e) => setNewProtein(e.target.value)}/>
      <label htmlFor="carbohydrates">Carbs</label>
      <input name="carbohydrates" value={newCarbs} onChange={(e) => setNewCarbs(e.target.value)}/>
      <label htmlFor="fat">Fat</label>
      <input name="fat" value={newFats} onChange={(e) => setNewFats(e.target.value)}/>
      <label htmlFor="sugar">Sugar</label>
      <input name="sugar" value={newSugar} onChange={(e) => setNewSugar(e.target.value)}/>
      <button onClick={onCreate}>Create</button>
      {firstmeals.map(firstmeal => (
        <div key={firstmeal.id}>
          <FirstMealInput firstmeal={firstmeal}/>
        </div> 
      ))}
      <div>Totel protein: {proteinTotal}</div>
      {/* <select>
        {firstmeals.map(firstmeal => (
          <option>{firstmeal.name}</option>
        ))}
      </select> */}
      {/* {firstmeals.map(firstmeal => (
        <div>{firstmeal.protein}</div>
      ))} */}
    </div>
    </>
  );
}

export default FirstMeal;
 