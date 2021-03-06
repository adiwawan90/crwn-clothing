import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component'
import SigninSignup from './pages/signin-signup/signin-signup.component'

import { auth, createUserProfileDocument } from './firebase/firebase.util'

// adding connect from redux
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {
  // sudah tdk menggunkan state lag krn sdh di handle oleh redux !
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          // this.setState({
          //   currentUser: {
          //     id: userRef.id,
          //     ...snapshot.data()
          //   }
          // }, () => {
          //   console.log(this.state);
          // }) 
          this.props.setCurrentUser({
            currentUser: {
              id: userRef.id,
              ...snapshot.data()
            }
          })
        })
      }else {
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}  />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact
            path='/signin'
            render={() => this.props.currentUser ? (
              <Redirect to='/' />
            ): (
              <SigninSignup />
            )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
