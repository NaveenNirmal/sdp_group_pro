import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Masterpage from "./AdminSide/Masterpage/Masterpage";
import useLocalStorage from "use-local-storage";
import Login from './Login/Login'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {

//   const [theme,setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

//  const switchTheme = () => {
//     const newTheme = (theme) === 'light' ? 'dark' : 'light';
//     setTheme(newTheme)
//   }

// const [{}, dispatch] = useStateValue();

// useEffect(() => {
//   auth.onAuthStateChanged(authUser => {
//     console.log('user is:', authUser);

//     if(authUser){
//       //user logged in
//       dispatch({
//         type:'SET_USER',
//         user:authUser
//       })
//     }else{
//       //user logged out
//       dispatch({
//         type:'SET_USER',
//         user:null
//       })
//     }
//   });

// },[])

  return (
    <div className="App">
      {/* <i onClick={switchTheme} class="bi bi-toggle-on"></i> */}
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Login}></Route>

          <Route
            path="/adminmasterpage"
            name="Admin"
            render={(props) => <Masterpage {...props} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
