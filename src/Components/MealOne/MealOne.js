import React from 'react';
import firebase from '../../firebase';
import './MealOne.scss'
import Row from '../Row/Row';

function MealOne() {
  const [firstmeals, setFirstmeals] = React.useState([]);
  const [newQuantity, setNewQuantity] = React.useState();
  //const [totals, setTotals] = React.useState();
  const [data, setData] = React.useState([
    {
      id: 0,
      name: '',
      calories: 0, 
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0
    },
    {
      id: 1,
      name: '',
      calories: 0, 
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0
    },
    {
      id: 2,
      name: '',
      calories: 0, 
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0
    },
    {
      id: 3,
      name: '',
      calories: 0, 
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0
    },
    {
      id: 4,
      name: '',
      calories: 0, 
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0
    },
    {
      id: 5,
      name: '',
      calories: 0, 
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0
    }
  ])

  React.useEffect(() => {
      const db = firebase.firestore()
      return db.collection('firstmeals').onSnapshot((snapshot) => {
        const firstmealsData = []
        snapshot.forEach(doc => firstmealsData.push(({...doc.data(), id:doc.id})))
        setFirstmeals(firstmealsData);
      });
  }, []);


  React.useEffect(() => {
    setData(data);
  }, [data])


  const updateData = (newData) => {
    console.log(newData)
    setData(newData)
  }

  // const calculateNutrients = (nutrient, quantity) => {
  //   return (Math.round(((nutrient / 100) * quantity) * 100) / 100) || 0;
  // }

  // let newCalories = calculateNutrients(calories, quantity);
  // let newProtein = calculateNutrients(protein, quantity);
  // let newCarbohydrates = calculateNutrients(carbohydrates, quantity);
  // let newFat = calculateNutrients(fat, quantity);
  // let newSugar = calculateNutrients(sugar, quantity);


  return (
    <div className="input">
      {(data.map(function(nutrient, index) {
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
        />
        ]
        }))   
      }
    </div>
  )
}

export default MealOne;
