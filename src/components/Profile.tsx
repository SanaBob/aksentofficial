import React, {useEffect} from "react";
import  Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import './styles/MainDiv.scss';

const Profile = () => {

    const userState = useSelector((state: any) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if(userState.email == "" || userState.password == ""){
            navigate('/login');
        }
    });

    return (
        <div className='main-div'>
            <h2>Hi {userState.name}!</h2>
            <h2>{userState.email}</h2>
            <h2>{userState.address}</h2>
            <div>
                {userState.role == "admin" ? <Link to="/admin">Admin</Link> : <h2>User</h2>}
            </div>
        </div>
    );
};

export default Profile;