import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div className='mt-10 ml-20 text-green-500 text-2xl'>


            <p>Name: {user.displayName}</p>
            <hr />
            <p>Email: {user.email}</p>

        </div>
    );
};

export default MyProfile;