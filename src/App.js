import React from 'react';
import FirstMeal from './Components/FirstMeal/FirstMeal';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


class App extends React.Component {

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
    })
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? 
        (<>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <img src={firebase.auth().currentUser.photoURL} alt="avatar"/>
          <FirstMeal />
          <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </>)
        :
        (<StyledFirebaseAuth 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />)
        }
        
      </div>
    )
  }
}

export default App;