import React from 'react'
import { Route } from 'react-router'
import Register from '../pages/Register'
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
    return (
        <div className="px-8 max-w-7xl min-h-screen mx-auto ">
            <ToastContainer position="bottom-right"/> 
            {/* <Route exact path="/" component="Liste" /> */}
            <Route exact path="/register" component={Register}  />
        </div>
    )
}
