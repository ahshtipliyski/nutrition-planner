import React from "react";
import MealOne from "../MealOne/MealOne";
import "./CalorieCalculator.scss";
import HBFormula from "../HBFormula/HBFormula";
import firebase from "../../firebase";

export default function CalorieCalculator() {
  const [firstmeals, setFirstmeals] = React.useState([]);
  const [newQuantity, setNewQuantity] = React.useState();
  const [data, setData] = React.useState([
    {
      id: 0,
      name: "",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0,
    },
    {
      id: 1,
      name: "",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0,
    },
    {
      id: 2,
      name: "",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0,
    },
    {
      id: 3,
      name: "",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0,
    },
    {
      id: 4,
      name: "",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0,
    },
    {
      id: 5,
      name: "",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugar: 0,
      quantity: 0,
    },
  ]);
  const [daily, setDaily] = React.useState([
    {
      id: 0,
      totalCalories: 0,
      totalProtein: 0,
      totalCarbohydrates: 0,
      totalFat: 0,
      totalSugar: 0
    },
    {
      id: 1,
      totalCalories: 0,
      totalProtein: 0,
      totalCarbohydrates: 0,
      totalFat: 0,
      totalSugar: 0
    },
    {
      id: 2,
      totalCalories: 0,
      totalProtein: 0,
      totalCarbohydrates: 0,
      totalFat: 0,
      totalSugar: 0
    },
    {
      id: 3,
      totalCalories: 0,
      totalProtein: 0,
      totalCarbohydrates: 0,
      totalFat: 0,
      totalSugar: 0
    }
  ]);


  React.useEffect(() => {
    const db = firebase.firestore();
    return db.collection("firstmeals").onSnapshot((snapshot) => {
      const firstmealsData = [];
      snapshot.forEach((doc) =>
        firstmealsData.push({ ...doc.data(), id: doc.id })
      );
      setFirstmeals(firstmealsData);
    });
  }, []);

  React.useEffect(() => {
    setData(data);
  }, [data]);

  React.useEffect(() => {
    const data = localStorage.getItem("saved-data");
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("saved-data", JSON.stringify(data));
  });

  const updateData = (newData) => {
    setData(newData);
  };



  return (
    <div className="calculator">
      <HBFormula />
      {daily.map(function (meal, index) {
        return [
          <MealOne
            key={meal.id}
            id={index}
            data={data}
            updateData={updateData}
            firstmeals={firstmeals}
            setFirstmeals={setFirstmeals}
            newQuantity={newQuantity}
            setNewQuantity={setNewQuantity}
            // setDaily={setDaily}
            // daily={daily}
          />
        ]
      })}
    </div>
  );
}
