import React, { Component } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from './components/Homepage';
import './App.css'
import Login from './components/Login';


export default class App extends Component {
	render() {
		
    const { store } = this.props;

		return (
      <Routes>

        <Route exact path="/" 
          element = {
            <RequireAuth store={store}>
              <Homepage />
            </RequireAuth>
          }
        />
          
        <Route path="/login" element={<Login />} />
      
        <Route
          path="/*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Routes>
		);
	}
}
function RequireAuth({ store, children }) {

	let auth = store.getState().login;

  if (!auth) {
    // Redirect them to the /login page
    return <Navigate to="/login" />;
  }

  return children;
}
// ***************************************************
// 
// https://github.com/remix-run/react-router/issues/8248
// 
// ---------------------------------------------------
// <Route
// path="/abc"
// render={ ({ location }) => auth ? <Homepage /> : (
// 	<Navigate
// 	to={{
// 		pathname: "/login",
// 		state: { from: location }
// 	}}/>
// )
// }/>
// ---------------------------------------------------
// <Route
// path={'/mno'}
// element={() => {
// 	window.location = '/login';
// 	return null;
// }}
// />
// ---------------------------------------------------
// let location = useLocation();
// let renderContent;
// if (auth) {
//     renderContent = <Route path={'*'} component={Homepage} />;
// } else {
//     renderContent = <Route path={'/login'} component={Login} />;
// }