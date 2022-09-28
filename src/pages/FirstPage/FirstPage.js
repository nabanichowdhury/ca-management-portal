import React from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';

const FirstPage = () => {
    return (
        <div className='page mt-56'>
            <Link to="/adminLogin">
            <button className="btn btn-wide btn-primary mr-5" >For Admin Login</button>
            </Link>

            <Link to="/participantLogin">
            <button className="btn btn-wide btn-primary" >For Participant Login</button>
            </Link>
            
            
        </div>
    );
};

export default FirstPage;