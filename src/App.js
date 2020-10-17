import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ShowReview from './Components/ShowReview/ShowReview';
import Header from './Components/Header/Header';
import AddReview from './Components/AddReview/AddReview';
import AddCourse from './Components/AddCourse/AddCourse';
import ShowCourse from './Components/ShowCourse/ShowCourse';
import SampleWorks from './Components/SampleWorks/SampleWorks';
import Order from './Components/OrderPage/Order';
import Servicelist from './Components/ServiceList/Servicelist';
import CustomerOrder from './Components/CustomarOrder/CustomerOrder';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    <Router>
      
    <Switch>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/addreview">
      <AddReview />
    </Route>
    <Route path="/showreview">
      <ShowReview />
    </Route>
    <Route path="/addcourse">
      <AddCourse />
    </Route>
    <Route path="/showcourse">
      <ShowCourse />
    </Route>
    <Route path="/sampleworks">
      <SampleWorks />
    </Route>
    <Route path="/login" >
       <Login></Login>
     </Route>

    <PrivateRoute path="/order/:id">
      <Order />
    </PrivateRoute>
    <Route path="/servicelist">
      <Servicelist />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="/customerorder">
      <CustomerOrder />
    </Route>
    <Route path="/makeadmin">
      <MakeAdmin />
    </Route>
    
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>
</UserContext.Provider>
  );
}

export default App;
