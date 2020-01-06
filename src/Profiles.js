import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
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
                <li>
                    <NavLink
                        to="/profiles/ninjasul"
                        activeStyle={{
                            background: 'black',
                            color: 'white'
                        }}
                    >
                        ninjasul
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/ka2377"
                        activeStyle={{
                            background: 'black',
                            color: 'white'
                        }}
                    >
                        ka2377
                    </NavLink>
                </li>
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