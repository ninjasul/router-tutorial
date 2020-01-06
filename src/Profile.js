import React from 'react';

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

const Profile = ({ match }) => {
    const { id } = match.params;
    const profile = profileData[id];
    const { name, description } = profile;

    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
            <h3>
                {id}({name})
            </h3>
            <p>{description}</p>
        </div>
    );
};

export default Profile;