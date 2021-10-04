import React from "react";
import { Route } from "react-router";
import RegisterCandidate from "../pages/Auth/RegisterCandidate";
import { ToastContainer } from "react-toastify";
import RegisterEmployer from "../pages/Auth/RegisterEmployer";
import LoginPage from "../pages/Auth/LoginPage";

export default function Dashboard() {
  return (
    <div className="px-8 max-w-7xl min-h-screen mx-auto ">
      <ToastContainer position="bottom-right" />
      <Route path="/" />
      <Route exact path="/registerCandidate" component={RegisterCandidate} />
      <Route exact path="/registerEmployer" component={RegisterEmployer} />
      <Route exact path="/login" component={LoginPage} />
    </div>
  );
}
