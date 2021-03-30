import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);

if (!sessionUser){
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
  );
} else {
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
      {/* Create New Class button
      View Class Feed button
      Upcoming Classes Div (each clickable?)
      Completed Classes Div (each clickable?)
      --- All are components, also create master component where div is on 55 to hold/render them all and move them to that file*/}
    </div>
  </>
}
}

export default App;
