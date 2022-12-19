import React from 'react';
import { Link } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';
import Dropdown from 'react-bootstrap/Dropdown';
import ShelterForm from '../Pages/ShelterForm';
const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navBar">
      <h1 className='text-center text-2xl font-bold'>
       <marquee direction="Up">Pawster Capstone Firebase</marquee> 
      </h1>
      <div className="link">
      {user?.displayName ? ( 
        <img src={user.photoURL} alt="pfp" width="35px" height="35px" border-radius="50%" />
      ) : null} 
      </div>
      <Dropdown className='Nav-list'>
        <Dropdown.Toggle variant="success" id='dropdown-basic'>
         
            <img width ="40px" height="40px" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_568656.png&f=1&nofb=1&ipt=0b7501c5cee0570f798ceffd572515faa6728c4d3095a6a7566b5c8da43013b2&ipo=images"></img>{user?.displayName}
            
          
        </Dropdown.Toggle>
        <Dropdown.Menu className='ola'>
        <ul>
        <li><Dropdown.Item eventKey="1" href='/account' className='link'>Profile</Dropdown.Item></li>
        {/* <li><Dropdown.Item href='/shelterForm'>ShelterForm</Dropdown.Item></li>
        <li><Dropdown.Item href='/userForm'>User Sign Up</Dropdown.Item></li>
        <li><Dropdown.Item href='/moreInformation'>More Info</Dropdown.Item></li> */}
        <li><Dropdown.Item href='/' className='link'>⤴Exit</Dropdown.Item></li>
        </ul> 
        </Dropdown.Menu>
      </Dropdown>
      
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout🛎</button>
      ) : (
        <Link to='/signin'>Log In</Link>
      )}
    </div>
  );
};

export default Navbar;