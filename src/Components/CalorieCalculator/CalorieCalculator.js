import React from "react";
import MealOne from "../MealOne/MealOne";
import "./CalorieCalculator.scss";
import HBFormula from "../HBFormula/HBFormula";

export default function CalorieCalculator() {

  return (
    <div className="calculator">
      <div className="calculator__container">
        <HBFormula />
        <MealOne />
        <MealOne />
      </div>
    </div>
  );
}
