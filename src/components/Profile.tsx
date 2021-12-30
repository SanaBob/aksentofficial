import React, {useEffect} from "react";
import  Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../reducers/user';
import './styles/MainDiv.scss';

const Profile = () => {

    const userState = useSelector((state: any) => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(userState.email == "" || userState.password == ""){
            navigate('/aksentofficial/login');
        }
    });

    const updateProfile = () => {
        navigate('/aksentofficial/updateprofile');
    }

    const handleLogout = async () => {
        dispatch(logout({cart: userState.cart}))
        navigate('/aksentofficial/');
    }

    return (
        <div className='main-div'>
            <h2>Hi {userState.name}!</h2>
            <h2>{userState.email}</h2>
            <h2>{userState.address}</h2>
            <div>
                {userState.role == "admin" ? <Link to="/aksentofficial/admin">Admin</Link> : <h2>User</h2>}
            </div>
            <button onClick={() => {updateProfile()}}>Update Profile</button>
            <button onClick={() => {handleLogout()}}>Logout</button>            
        </div>
    );
};

export default Profile;