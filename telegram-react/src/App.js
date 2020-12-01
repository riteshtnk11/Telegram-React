import React from "react";
import { useEffect } from "react";
import "./App.css";
import Telegram from "./components/Telegram";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./components/login/Login";

function App() {
  //Redux method useSelector() To get the details of user which is currently logged in.
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //Component loads once and loads again whenever the dependency changes.
  useEffect(() => {
    auth.onAuthStateChange((authUser) => {
      if (authUser) {
        //login
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //logout
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="app">{user ? <Telegram /> : <Login />}</div>;
}

export default App;
