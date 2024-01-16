

import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './navbar.css';
import Avatar from 'react-avatar';

const Navbarheader = () => {

    const [open,setOpen]=useState(false);
    const [showProfile,setShowProfile]=useState(false);

    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    
    console.log("current user",currentUser.user.firstname)
    const userName=currentUser.user.firstname;



    const avatarSrc = 'src="https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg"'; // Replace with the actual URL

    const logout = () => {
        localStorage.removeItem('currentUser');
        window.location.href = "/";
    }

    const closeSidebar=()=>{
setOpen(true)
    }

    return (
        <>

            <Navbar className='navbar-section' variant="dark">
               
                    <Navbar.Brand href="#home" className='tasktracking-heading'>Task Tracking</Navbar.Brand>
                    {/* <div onClick={closeSidebar}>Menu</div> */}
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Avatar className='avatar-icon' size="50" round={true} src={avatarSrc} onClick={()=>setShowProfile(!showProfile)}/>
                    <div className='current-username'><span>{userName}</span></div>
                   <div  className={showProfile ? 'logout-dropdown' : 'hide-profile'}>
                   <div  onClick={() => { logout() }} className={showProfile ? 'show-profile logout-nav' : 'hide-profile'}>Logout</div>
                   </div>
                   
               
            </Navbar>

        </>
    )
}

export default Navbarheader