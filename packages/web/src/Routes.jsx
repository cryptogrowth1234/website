import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/forgotPassword' component={ForgotPassword} />
        <Route exact path='/otp' component={Otp} />
        <Route exact path='/verifyEmail' component={VerifyEmail} />
      </Switch>
    </BrowserRouter>
  );
};
