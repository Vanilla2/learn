import React, {useEffect, useState} from 'react';
import Login from "./login";
import Home from "./Home";
import CourseView from "./CourseView"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

const Index = () =>{
    const [logged, setLogged] = useState(false);
    const LogIn = () =>{
        setLogged(true);
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/learn">
                    {logged ? <Redirect to = "/learn/home"/> : <Redirect to = "/learn/login"/>}
                </Route>
                <Route exact path="/learn/login">
                    <Login logged = {logged} LogIn = {LogIn}/>
                </Route>
                <Route exact path="/learn/home">
                    <Home logged = {logged} />
                </Route>
                <Route path = "/learn/course/:id">
                    <CourseView logged = {logged}/>
                </Route>
            </Switch>
        </Router>
    );
}
export default Index;