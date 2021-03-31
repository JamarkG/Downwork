import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Body from "./components/Body";
import Images from "./components/Images";
import ClassList from "./components/ClassList";
import Footer from "./components/Footer";
import HomeDiv2 from "./components/HomeDiv2";
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);

if (sessionUser){
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/classes'>
            <ClassList />
          </Route>
        </Switch>
      )}
      <div>
        <div className='TopHomeDiv'>
          <Body />
          <Images />
        </div>
        <HomeDiv2 />
      </div>
      <Footer />
    </>
  );
} else {
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <div>
        <Introduction />
        <Services />
      </div>
    </>
  )
}
}

export default App;
