import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import Services from "./components/Services";
import Body from "./components/Body";
import FindButton from "./components/FindButton";
import UserProfile from "./components/UserProfile";
// import SpacerDiv from "./components/SpacerDiv";
// import Images from "./components/Images";
import ClassList from "./components/ClassList";
import Footer from "./components/Footer";
// import HomeDiv2 from "./components/HomeDiv2";
import CreateClassForm from './components/CreateClassForm'
import { useSelector } from 'react-redux';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, []);

  const sessionUser = useSelector(state => state?.session?.user);

if (sessionUser){
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/classes/createclass'>
            <CreateClassForm />
          </Route>
          <Route exact path='/classes/:searchQ'>
            <ClassList />
          </Route>
          <Route exact path='/'>
            <div id="homePage">
              <UserProfile />
              <FindButton />
            </div>
          </Route>
          <Route exact path='/classes'>
            <ClassList />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
} else {
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <div className={'PleaseLoginDiv'}>
        <h1 className={'PleaseLogin'}>Please Sign-up or Login</h1>
      </div> */}
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Body />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <div className={'BottomIntro'}>
        {/* <Services /> */}
        <Footer />
      </div>
    </>
  )
}
}

export default App;
