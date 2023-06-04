import React from 'react';
import style from './Registration.module.css';

const Registration = () => {
    let firstName = React.createRef();
    return (
        <div className={style.regForm}>
            <div className={style.fieldItem}>
                <input type='text' placeholder='First Name'/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Last Name'/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Country'/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='City'/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Born (format dd-mm-yyyy)'/>
            </div>
            <div className={style.fieldItem}>
                <input type='text' placeholder='Image url'/>
            </div>
            <div>
                <button onClick={()=>{
                    alert("clicked");
                }}>

                Register me</button>
            </div>
        </div>
    )
}

export default Registration;