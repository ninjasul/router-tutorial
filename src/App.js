import React from 'react';
import {Link, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
    return (
        <div>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">소개</Link></li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/profiles/:id" component={Profile} />
        </div>
    );
}

export default App;
