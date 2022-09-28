import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const LoginForParticipants = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user)
    }
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
             <div className="card-body">
            <h2 className="card-title">Registration for Campus Ambassador Participants</h2>
            
             <p>Already Registred?</p>
             <Link>
             <button onClick={()=>signInWithGoogle()} className='btn btn-primary'>Login Here With google</button>
             </Link>

            <div className="card-actions justify-end">
            
             </div>
        </div>
</div>
        </div>
    );
};

export default LoginForParticipants;