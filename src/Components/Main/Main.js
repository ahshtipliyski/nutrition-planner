import React from 'react';
import firebase from 'firebase';
import './Main.scss'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CalorieCalculator from '../CalorieCalculator/CalorieCalculator';
import NutritionTable from '../NutritionTable/NutritionTable';


class Main extends React.Component {

  state = {
    isSignedIn: false
  }
  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      //console.log(user)

      const data = {
        uid: user?.uid,
        userName: user?.displayName
      };
      const db = firebase.firestore()
      db.collection("users")
      .doc(data.uid?.toString())
      .set(data)
    })
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? 
        (<>
          <Router>
            <Header 
              photoURL={firebase.auth().currentUser.photoURL}
              signOut={() => firebase.auth().signOut()}/> 
            <Switch>
              <Redirect exact from='/' to='/nutritiontable' />
              <Route exact path='/nutritiontable'>
                <NutritionTable uid={firebase.auth().currentUser.uid}/>
              </Route>
              <Route exact path='/caloriecalculator'>
                <CalorieCalculator uid={firebase.auth().currentUser.uid}/>
              </Route>
            </Switch>
          </Router>
        </>)
        :
        (<StyledFirebaseAuth
          className="login" 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />)
        }
        
      </div>
    )
  }
}

export default Main;