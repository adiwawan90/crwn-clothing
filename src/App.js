import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component'
import SigninSignup from './pages/signin-signup/signin-signup.component'

import { auth, createUserProfileDocument } from './firebase/firebase.util'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: userRef.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state);
          }) 
        })
      }else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}  />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path='/' component={HomePage}  />
//         <Route path='/shop' component={ShopPage} />
//         <Route path='/signin' component={SigninSignup} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
