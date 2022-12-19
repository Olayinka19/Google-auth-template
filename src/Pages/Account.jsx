
import React from 'react';
import { Link } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';

// import React from 'react';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='accnt' >
      <h1 className='text-center text-2xl font-bold pt-12'>Users Profile</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
        <h3>{user?.email}</h3>
        <div>
          <img src={user?.photoURL} />
        </div>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
      {user?.displayName ? (
       <button><Link to='/shelterForm'>👉🏼Shelter Form</Link></button> 
      ) : (
        <button className='link'><Link to='/'>Home</Link></button>
      )}
      

      
    </div>
  );
};

export default Account;