import React from 'react';
import {Link, Route} from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const profileData = {
    ninjasul: {
        name: '박동엽',
        description:
            'Software Developer @ OneStore'
    },
    ka2377: {
        name: '김경아',
        description:
            'Online Game Marketer @ Nexon'
    }
};

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li><Link to="/profiles/ninjasul">ninjasul</Link></li>
                <li><Link to="/profiles/ka2377">ka2377</Link></li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>유저를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:id" component={Profile} />
            <WithRouterSample />
        </div>
    );
};

export default Profiles;