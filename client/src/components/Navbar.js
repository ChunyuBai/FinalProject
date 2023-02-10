import React, { useState, useContext } from "react";
import 'bulma/css/bulma.css'
import { Link } from "react-router-dom";
import AuthContext from "../providers/AuthProvider";
import OrderContext from "../providers/ContextProvider";
// import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap'
import './Navbar.css'
// import Login from "./Login";
// import Signup from "./Signup";
import UserAvatar from "./UserAvatar";

const Navbar = (props) => {
    const { auth } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false)

    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(!popup);
    };
    //const userAuth = window.localStorage.getItem("user_id");
    console.log("auth:", auth);
    // const u_id = user.user_id;
    // if (JSON.parse(userAuth) === user.user_id) {
    if (auth.user_email === null) {
        return (
        <div className="navbar">
            <div className="navbar-start">
            <div className="navbar-item">
            <Link to="/login">Home</Link>
            </div>
            </div>
            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                <button className="button is-rounded is-primary button-yellow">
                <Link to="/login">Login</Link>
                </button>
                <button className="button is-rounded is-light button-white">
                <Link to="/Signup">Signup</Link>
                </button>
                </div>
            </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="navbar">
                <div className="navbar-start">
                    <div className="navbar-item">
                    <Link to="/login">Home</Link>
                    </div>
                </div>
                <div className="navbar-end">
                <div className="navbar-item">
                        <div className="">
                        <button className="button" onClick={() => setOpenModal(true)}>Avatar</button>
                        <UserAvatar open={openModal} onClose={() => setOpenModal(false)} />
                        {/* <UserAvatar src="https://via.placeholder.com/150"  /> */}
                        {/* <UserAvatar onClick={togglePopup} /> */}
                        {/* <img
                        className="nav_avatar"
                        src="https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg"
                        alt="Avatar"
                        /> */}
                        </div>
                        {/* <UserAvatar open={openModal} onClose={() => setOpenModal(false)}
                        title={title} /> */}
                    </div>
                    <div className="navbar-item">
                        <div className="buttons">
                        <button className="button is-rounded is-primary button-yellow">
                        <Link to="/logout">logout</Link>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
export default Navbar;
