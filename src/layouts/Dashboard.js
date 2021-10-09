import React from "react";
import { Route } from "react-router";
import RegisterCandidate from "../pages/Auth/RegisterCandidate";
import { ToastContainer } from "react-toastify";
import RegisterEmployer from "../pages/Auth/RegisterEmployer";
import LoginEmployer from "../pages/Auth/LoginEmployer";
import JobAdvertisements from "../pages/JobAdvertisements";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import JobAdd from "../pages/JobAdd";
import LoginCandidate from "../pages/Auth/LoginCandidate";

export default function Dashboard() {
  return (
    <div className="px-8 max-w-7xl min-h-screen mx-auto ">
      <ToastContainer position="bottom-right" />
      <Route exact path="/" component={JobAdvertisements} />
      <Route exact path="/registerCandidate" component={RegisterCandidate} />
      <Route exact path="/registerEmployer" component={RegisterEmployer} />
      <Route exact path="/loginEmployer" component={LoginEmployer} />
      <Route exact path="/loginCandidate" component={LoginCandidate} />
      <Route exact path="/jobAdvertisements" component={JobAdvertisements}/>
      <Route exact path="/jobAdvertisements/:id" component={JobAdvertisementDetail}/>
      <Route path="/jobAdd" component={JobAdd}/>
    </div>
  );
}
