import React from "react";
import { Route } from "react-router";
import RegisterCandidate from "../pages/Auth/RegisterCandidate";
import { ToastContainer } from "react-toastify";
import RegisterEmployer from "../pages/Auth/RegisterEmployer";
import Login from "../pages/Auth/Login";
import JobAdvertisements from "../pages/JobAdvertisements";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";

export default function Dashboard() {
  return (
    <div className="px-8 max-w-7xl min-h-screen mx-auto ">
      <ToastContainer position="bottom-right" />
      <Route path="/" />
      <Route exact path="/registerCandidate" component={RegisterCandidate} />
      <Route exact path="/registerEmployer" component={RegisterEmployer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/jobAdvertisements" component={JobAdvertisements}/>
      <Route path="/jobAdvertisements/:id" component={JobAdvertisementDetail}/>

    </div>
  );
}
