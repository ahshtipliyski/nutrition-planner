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

  const calculateNutrients = (nutrient, quantity) => {
    return (Math.round(((nutrient / 100) * quantity) * 100) / 100) || 0;
  }

  //try to DRY
  const totalProtein = data.reduce(function (accumulator, nutrient) {
    return accumulator + calculateNutrients(nutrient.protein, nutrient.quantity)
  }, 0);

  const totalCalories = data.reduce(function (accumulator, nutrient) {
    return accumulator + calculateNutrients(nutrient.calories, nutrient.quantity)
  }, 0);

  const totalCarbohydrates = data.reduce(function (accumulator, nutrient) {
    return accumulator + calculateNutrients(nutrient.carbohydrates, nutrient.quantity)
  }, 0);

  const totalFat = data.reduce(function (accumulator, nutrient) {
    return accumulator + calculateNutrients(nutrient.fat, nutrient.quantity)
  }, 0);

  const totalSugar = data.reduce(function (accumulator, nutrient) {
    return accumulator + calculateNutrients(nutrient.sugar, nutrient.quantity)
  }, 0);

  return (
    <div className="calculator">
      <HBFormula />
      <MealOne
        data={data}
        updateData={updateData}
        firstmeals={firstmeals}
        setFirstmeals={setFirstmeals}
        newQuantity={newQuantity}
        setNewQuantity={setNewQuantity}
        calculateNutrients={calculateNutrients}
        totalProtein={totalProtein}
        totalCalories={totalCalories}
        totalCarbohydrates={totalCarbohydrates}
        totalFat={totalFat}
        totalSugar={totalSugar}
      />
    </div>
  );
}
