import React from 'react';
import firebase from '../../firebase';
import { uuid } from 'uuidv4';
import './MealOne.scss'


function MealOne() {
  const [firstmeals, setFirstmeals] = React.useState([]);
  const [items, setItems] = React.useState('');
  const [newQuantity, setNewQuantity] = React.useState();
  const [secondItems, setSecondItems] = React.useState('');
  const [newSecondQuantity, setNewSecondQuantity] = React.useState();
  const [thirdItems, setThirdItems] = React.useState('');
  const [newThirdQuantity, setNewThirdQuantity] = React.useState();
  const [forthItems, setForthItems] = React.useState('');
  const [newForthQuantity, setNewForthQuantity] = React.useState();
  const [fifthItems, setFifthItems] = React.useState('');
  const [newFifthQuantity, setNewFifthQuantity] = React.useState();
  const [sixthItems, setSixthItems] = React.useState('');
  const [newSixthQuantity, setNewSixthQuantity] = React.useState();



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

  const handleSelectTwo = (e) => {
    let findItem = firstmeals.find(item => item.id === e.target.value)
    setSecondItems(findItem)
  }

  const handleSelectThree = (e) => {
    let findItem = firstmeals.find(item => item.id === e.target.value)
    setThirdItems(findItem)
  }

  const handleSelectFour = (e) => {
    let findItem = firstmeals.find(item => item.id === e.target.value)
    setForthItems(findItem)
  }

  const handleSelectFive = (e) => {
    let findItem = firstmeals.find(item => item.id === e.target.value)
    setFifthItems(findItem)
  }
  
  const handleSelectSix = (e) => {
    let findItem = firstmeals.find(item => item.id === e.target.value)
    setSixthItems(findItem)
  }

  let newcalories = (Math.round(((items.calories / 100) * newQuantity) * 100) / 100) || 0;
  let newprotein = (Math.round(((items.protein / 100) * newQuantity) * 100) / 100) || 0;
  let newcarbohydrates = (Math.round(((items.carbohydrates / 100) * newQuantity) * 100) / 100) || 0;
  let newfat = (Math.round(((items.fat / 100) * newQuantity) * 100) / 100) || 0;
  let newsugar = (Math.round(((items.sugar / 100) * newQuantity) * 100) / 100) || 0;

  let newSecondCalories = (Math.round(((secondItems.calories / 100) * newSecondQuantity) * 100) / 100) || 0;
  let newSecondProtein = (Math.round(((secondItems.protein / 100) * newSecondQuantity) * 100) / 100) || 0;
  let newSecondCarbohydrates = (Math.round(((secondItems.carbohydrates / 100) * newSecondQuantity) * 100) / 100) || 0;
  let newSecondFat = (Math.round(((secondItems.fat / 100) * newSecondQuantity) * 100) / 100) || 0;
  let newSecondSugar = (Math.round(((secondItems.sugar / 100) * newSecondQuantity) * 100) / 100) || 0;

  let newThirdCalories = (Math.round(((thirdItems.calories / 100) * newThirdQuantity) * 100) / 100) || 0;
  let newThirdProtein = (Math.round(((thirdItems.protein / 100) * newThirdQuantity) * 100) / 100) || 0;
  let newThirdCarbohydrates = (Math.round(((thirdItems.carbohydrates / 100) * newThirdQuantity) * 100) / 100) || 0;
  let newThirdFat = (Math.round(((thirdItems.fat / 100) * newThirdQuantity) * 100) / 100) || 0;
  let newThirdSugar = (Math.round(((thirdItems.sugar / 100) * newThirdQuantity) * 100) / 100) || 0;

  let newForthCalories = (Math.round(((forthItems.calories / 100) * newForthQuantity) * 100) / 100) || 0;
  let newForthProtein = (Math.round(((forthItems.protein / 100) * newForthQuantity) * 100) / 100) || 0;
  let newForthCarbohydrates = (Math.round(((forthItems.carbohydrates / 100) * newForthQuantity) * 100) / 100) || 0;
  let newForthFat = (Math.round(((forthItems.fat / 100) * newForthQuantity) * 100) / 100) || 0;
  let newForthSugar = (Math.round(((forthItems.sugar / 100) * newForthQuantity) * 100) / 100) || 0;

  let newFifthCalories = (Math.round(((fifthItems.calories / 100) * newFifthQuantity) * 100) / 100) || 0;
  let newFifthProtein = (Math.round(((fifthItems.protein / 100) * newFifthQuantity) * 100) / 100) || 0;
  let newFifthCarbohydrates = (Math.round(((fifthItems.carbohydrates / 100) * newFifthQuantity) * 100) / 100) || 0;
  let newFifthFat = (Math.round(((fifthItems.fat / 100) * newFifthQuantity) * 100) / 100) || 0;
  let newFifthSugar = (Math.round(((fifthItems.sugar / 100) * newFifthQuantity) * 100) / 100) || 0;

  let newSixthCalories = (Math.round(((sixthItems.calories / 100) * newSixthQuantity) * 100) / 100) || 0;
  let newSixthProtein = (Math.round(((sixthItems.protein / 100) * newSixthQuantity) * 100) / 100) || 0;
  let newSixthCarbohydrates = (Math.round(((sixthItems.carbohydrates / 100) * newSixthQuantity) * 100) / 100) || 0;
  let newSixthFat = (Math.round(((sixthItems.fat / 100) * newSixthQuantity) * 100) / 100) || 0;
  let newSixthSugar = (Math.round(((sixthItems.sugar / 100) * newSixthQuantity) * 100) / 100) || 0;

  let totalCalories = (newcalories + newSecondCalories + newThirdCalories + newForthCalories + newFifthCalories + newSixthCalories).toFixed(1)
  let totalProtein = (newprotein + newSecondProtein + newThirdProtein + newForthProtein + newFifthProtein + newSixthProtein).toFixed(1)
  let totalCarbohydrates = (newcarbohydrates + newSecondCarbohydrates + newThirdCarbohydrates + newForthCarbohydrates + newFifthCarbohydrates + newSixthCarbohydrates).toFixed(1)
  let totalFat = (newfat + newSecondFat + newThirdFat + newForthFat + newFifthFat + newSixthFat).toFixed(1)
  let totalSugar = (newsugar + newSecondSugar + newThirdSugar + newForthSugar + newFifthSugar + newSixthSugar).toFixed(1)
  
  return (
    <div className="input">
      <div className="input__container">
        <select className="input__select" onChange={handleSelect}>
          <option className="input__option"></option>
          {firstmeals.map(firstmeal => (
            <option className="input__option" value={firstmeal.id} key={uuid()}>{firstmeal.name}</option>
          ))}
        </select>
        <div className="input__input-container">
          <input className="input__input" name="quantity" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)}/>
          <div className="input__name">{(items.name)}:</div>
          <div className="input__calories">calories: {newcalories.toFixed(1)}</div>
          <div className="input__protein">protein: {newprotein.toFixed(1)}</div>
          <div className="input__carbs">carbs: {newcarbohydrates.toFixed(1)}</div>
          <div className="input__fat">fat: {newfat.toFixed(1)}</div>
          <div className="input__sugar">sugar: {newsugar.toFixed(1)}</div>
        </div>
      </div>
      
      <div className="input__container">
        <select className="input__select" onChange={handleSelectTwo}>
          <option className="input__option"></option>
          {firstmeals.map(firstmeal => (
            <option className="input__option" value={firstmeal.id} key={uuid()}>{firstmeal.name}</option>
          ))}
        </select>
        <div className="input__input-container">
          <input className="input__input" name="quantity" value={newSecondQuantity} onChange={(e) => setNewSecondQuantity(e.target.value)}/>
          <div className="input__name">{(secondItems.name)}:</div>
          <div className="input__calories">calories: {newSecondCalories.toFixed(1)}</div>
          <div className="input__protein">protein: {newSecondProtein.toFixed(1)}</div>
          <div className="input__carbs">carbs: {newSecondCarbohydrates.toFixed(1)}</div>
          <div className="input__fat">fat: {newSecondFat.toFixed(1)}</div>
          <div className="input__sugar">sugar: {newSecondSugar.toFixed(1)}</div>
        </div>
      </div>

      <div className="input__container">
        <select className="input__select" onChange={handleSelectThree}>
          <option className="input__option"></option>
          {firstmeals.map(firstmeal => (
            <option className="input__option" value={firstmeal.id} key={uuid()}>{firstmeal.name}</option>
          ))}
        </select>
        <div className="input__input-container">
          <input className="input__input" name="quantity" value={newThirdQuantity} onChange={(e) => setNewThirdQuantity(e.target.value)}/>
          <div className="input__name">{(thirdItems.name)}:</div>
          <div className="input__calories">calories: {newThirdCalories.toFixed(1)}</div>
          <div className="input__protein">protein: {newThirdProtein.toFixed(1)}</div>
          <div className="input__carbs">carbs: {newThirdCarbohydrates.toFixed(1)}</div>
          <div className="input__fat">fat: {newThirdFat.toFixed(1)}</div>
          <div className="input__sugar">sugar: {newThirdSugar.toFixed(1)}</div>
        </div>
      </div>

      <div className="input__container">
        <select className="input__select" onChange={handleSelectFour}>
          <option className="input__option"></option>
          {firstmeals.map(firstmeal => (
            <option className="input__option" value={firstmeal.id} key={uuid()}>{firstmeal.name}</option>
          ))}
        </select>
        <div className="input__input-container">
          <input className="input__input" name="quantity" value={newForthQuantity} onChange={(e) => setNewForthQuantity(e.target.value)}/>
          <div className="input__name">{(forthItems.name)}:</div>
          <div className="input__calories">calories: {newForthCalories.toFixed(1)}</div>
          <div className="input__protein">protein: {newForthProtein.toFixed(1)}</div>
          <div className="input__carbs">carbs: {newForthCarbohydrates.toFixed(1)}</div>
          <div className="input__fat">fat: {newForthFat.toFixed(1)}</div>
          <div className="input__sugar">sugar: {newForthSugar.toFixed(1)}</div>
        </div>
      </div>
      
      <div className="input__container">
        <select className="input__select" onChange={handleSelectFive}>
          <option className="input__option"></option>
          {firstmeals.map(firstmeal => (
            <option className="input__option" value={firstmeal.id} key={uuid()}>{firstmeal.name}</option>
          ))}
        </select>
        <div className="input__input-container">
          <input className="input__input" name="quantity" value={newFifthQuantity} onChange={(e) => setNewFifthQuantity(e.target.value)}/>
          <div className="input__name">{(fifthItems.name)}:</div>
          <div className="input__calories">calories: {newFifthCalories.toFixed(1)}</div>
          <div className="input__protein">protein: {newFifthProtein.toFixed(1)}</div>
          <div className="input__carbs">carbs: {newFifthCarbohydrates.toFixed(1)}</div>
          <div className="input__fat">fat: {newFifthFat.toFixed(1)}</div>
          <div className="input__sugar">sugar: {newFifthSugar.toFixed(1)}</div>
        </div>
      </div>

      <div className="input__container">
        <select className="input__select" onChange={handleSelectSix}>
          <option className="input__option"></option>
          {firstmeals.map(firstmeal => (
            <option className="input__option" value={firstmeal.id} key={uuid()}>{firstmeal.name}</option>
          ))}
        </select>
        <div className="input__input-container">
          <input className="input__input" name="quantity" value={newSixthQuantity} onChange={(e) => setNewSixthQuantity(e.target.value)}/>
          <div className="input__name">{(sixthItems.name)}:</div>
          <div className="input__calories">calories: {newSixthCalories.toFixed(1)}</div>
          <div className="input__protein">protein: {newSixthProtein.toFixed(1)}</div>
          <div className="input__carbs">carbs: {newSixthCarbohydrates.toFixed(1)}</div>
          <div className="input__fat">fat: {newSixthFat.toFixed(1)}</div>
          <div className="input__sugar">sugar: {newSixthSugar.toFixed(1)}</div>
        </div>
      </div>
      <div>
        <p>Total calories: {totalCalories}kcal</p>
        <p>Total protein: {totalProtein}g</p>
        <p>Total carbs: {totalCarbohydrates}g</p>
        <p>Total fat: {totalFat}g</p>
        <p>Total sugar: {totalSugar}g</p>
      </div>
    </div>
  )
}

export default MealOne;
