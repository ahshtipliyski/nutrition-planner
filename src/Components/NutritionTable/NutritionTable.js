import React from 'react';
import firebase from '../../firebase';
import NutritionTableInput from '../NutritionTableInput/NutritionTableInput';
import Converter from '../Converter/Converter';
import './NutritionTable.scss';
import '../NutritionTableInput/NutritionTableInput.scss';
import { uuid } from 'uuidv4';


function NutritionTable() {

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

  // const proteinTotal = firstmeals.reduce((totalProtein, firstmeal) => +totalProtein + +firstmeal.protein, 0);

  return (
    <>
      <div className="table">
        <Converter />
        <div className="table__container">  
          <div className="table__row">
            <p className="table__label" htmlFor="mealname">Food:</p>
            <input className="table__food table__add" name="mealname" value={newMealName} onChange={(e) => setNewMealName(e.target.value)}/>
          </div>
          <div className="table__row">
            <p className="table__label" htmlFor="calories">Calories:</p>
            <input type="number" min="0" className="table__calories table__add" name="calories" value={newCalories} onChange={(e) => setNewCalories(e.target.value)}/>
          </div>
          <div className="table__row">
            <p className="table__label" htmlFor="protein">Protein:</p>
            <input type="number" min="0" className="table__protein table__add" name="protein" value={newProtein} onChange={(e) => setNewProtein(e.target.value)}/>
          </div>
          <div className="table__row">
            <p className="table__label" htmlFor="carbohydrates">Carbs:</p>
            <input type="number" min="0" className="table__carbs table__add" name="carbohydrates" value={newCarbs} onChange={(e) => setNewCarbs(e.target.value)}/>
          </div>
          <div className="table__row">
            <p className="table__label" htmlFor="fat">Fat:</p>
            <input type="number" min="0" className="table__fat table__add" name="fat" value={newFats} onChange={(e) => setNewFats(e.target.value)}/>
          </div>
          <div className="table__row">
            <p className="table__label" htmlFor="sugar">Sugar:</p>
            <input type="number" min="0" className="table__sugar table__add" name="sugar" value={newSugar} onChange={(e) => setNewSugar(e.target.value)}/>
          </div>
          <div className="table__button-container">
            <button 
              className="table__create-button" 
              disabled={!newMealName || !newCalories || !newProtein || !newCarbs || !newFats || !newSugar} 
              onClick={onCreate}>Create</button>
          </div>
        </div>
        <div className="table__new-food-container">
          {firstmeals.map(firstmeal => (
            <div className="table__new-food" key={firstmeal.id}>
              <NutritionTableInput firstmeal={firstmeal}/>
            </div> 
          ))}
        </div>
        {/* <div>Totel protein: {proteinTotal}</div> */}
      </div>
    </>
  );
}

export default NutritionTable;
 