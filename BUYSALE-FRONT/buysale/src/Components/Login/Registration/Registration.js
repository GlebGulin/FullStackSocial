import React from 'react';
import style from './Registration.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegistrationUser } from '../../../DAL/API/api';

const Registration = () => {
    const navigate  = useNavigate();
    let firstName   = React.createRef();
    let lastName    = React.createRef();
    let email       = React.createRef();
    let password    = React.createRef();
    let repPassword = React.createRef();
    let country     = React.createRef();
    let city        = React.createRef();
    let born        = React.createRef();
    let img         = React.createRef();
    return (
        <div className={style.regForm}>
            <div className={style.fieldItem}>
                <input type='text' placeholder='First Name' ref={firstName}/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Last Name' ref={lastName}/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Email' ref={email}/>
            </div>
            <div className={style.fieldItem}>
                <input type='password' placeholder='Password' ref={password}/>
            </div>
            <div className={style.fieldItem}>
                <input type='password' placeholder='Repeat Password' ref={repPassword}/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Country' ref={country}/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='City' ref={city}/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Born (format dd-mm-yyyy)' ref={born}/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Image url' ref={img}/>
            </div>
            <div>
                <button onClick={()=>{
                    debugger;
                    if(repPassword.current.value !== password.current.value){
                        alert("Passwords do not match");
                    }
                    else{
                        // alert("clicked");
                        // axios.post("https://localhost:44367/auth/registration", {
                        //     firstName: firstName.current.value,
                        //     lastName : lastName.current.value,
                        //     email    : email.current.value,
                        //     password : password.current.value,
                        //     country  : country.current.value,
                        //     city     : city.current.value,
                        //     born     : born.current.value,
                        //     avatar   : img.current.value

                        // })
                        RegistrationUser(
                                firstName.current.value, 
                                lastName.current.value, 
                                email.current.value,
                                password.current.value,
                                country.current.value,
                                city.current.value,
                                born.current.value,
                                img.current.value
                            )
                        .then(function(response){
                            if(response.status === 200){
                                if(response.data.resultStatus === 0){
                                    navigate('/login');
                                }

                                else{
                                    debugger;
                                    for (var i = 0; i < response.data.additionalErrors.length; i++){
                                        alert(response.data.additionalErrors[i]);
                                    }
                                    if(response.data.errorMessage != null){
                                        alert(response.data.err5orMessage);
                                    }
                                }
                            }
                        });
                    }
                }}>

                Register me</button>
            </div>
        </div>
    )
}

export default Registration;