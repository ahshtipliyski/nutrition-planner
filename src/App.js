import React from 'react';
import './App.css';
import firebase from './firebase';
import FirstMealInput from './FirstMealInput';


function App() {

  const [firstmeals, setFirstmeals] = React.useState([])
  const [newMealName, setNewMealName] = React.useState()
  const [newProtein, setNewProtein] = React.useState()
  

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
    db.collection('firstmeals').add({name: newMealName, protein: newProtein})
  }

  return (
    <>
    <div>
      <input value={newMealName} onChange={(e) => setNewMealName(e.target.value)}/>
      <input value={newProtein} onChange={(e) => setNewProtein(e.target.value)}/>
      <button onClick={onCreate}>Create</button>
      {firstmeals.map(firstmeal => (
        <div key={firstmeal.name}>
          <FirstMealInput firstmeal={firstmeal}/>
        </div> 
      ))}
      {/* {firstmeals.map(firstmeal => (
        <div>{firstmeal.ritual}</div>
      ))} */}
    </div>
    </>
  );
}

export default App;
 