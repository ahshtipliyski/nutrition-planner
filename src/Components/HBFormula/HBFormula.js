import React from 'react'
import './HBFormula.scss'

function HBFormula() {
  const [weight, setWeight] = React.useState();
  const [height, setHeight] = React.useState();
  const [age, setAge] = React.useState();
  const [activity, setActivity] = React.useState();
  
  let bmrMen = 66.47 + (13.75 * +weight) + (5 * +height) - (6.75 * +age)
  let bmrWomen = 655.1 + (9.563 * +weight) + (1.85 * +height) - (4.676 * +age)
  let maintenanceMen = (+bmrMen * +activity)
  let maintenanceWomen = (+bmrWomen * +activity)

  return (
    <div className="formula">
      <div className="formula__top-container">
        <div className="formula__inputs-container">
          <h2>Fill up the form to know your target.</h2>
          <input className="formula__input" type="number" min="0" value={weight || ''} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" />
          <input className="formula__input" type="number" min="0" value={height || ''} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" />
          <input className="formula__input" type="number" min="0" value={age || ''} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
          <input className="formula__input" type="number" min="0" value={activity || ''} onChange={(e) => setActivity(e.target.value)} placeholder="Activity level" />
        </div>
        <div className="formula__guide">
          <h2 className="formula__guide-title">Activity Level guide:</h2>
          <p><span>1.2</span> - Sedentary (Little activity, desk job.)</p>
          <p><span>1.3-1.4</span> - Light exercise (3-4 days per week.)</p>
          <p><span>1.55-1.6</span> - Moderate exercise (3-5 days per week, 60 minutes session)</p>
          <p><span>1.725</span> - Active (6-7 days per week 60-90 minutes session)</p>
          <p><span>1.9</span> - Extremely active individuals such as, heavy manual labor workers or athletes.</p>
        </div>
      </div>
      <div className="formula__bmr">
        <div>
          <h2>BMR Men: <br/> {Number(bmrMen.toFixed(2)) || '0000,00'} calories</h2>
          <h2>Maintenance Men: <br/> {Number(maintenanceMen.toFixed(2)) || '0000,00'} calories</h2>
        </div>
        <div>
          <h2>BMR Women: <br/> {Number(bmrWomen.toFixed(2)) || '0000,00'} calories</h2>
          <h2>Maintenance Women: <br/> {Number(maintenanceWomen.toFixed(2)) || '0000,00'} calories</h2>
        </div>
      </div>
    </div>
  )
}

export default HBFormula;