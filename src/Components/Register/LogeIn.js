import React, { useState } from 'react'
import './Register.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import logo from '../../assist/logo.PNG'
import { Link } from 'react-router-dom'
const LogeIn = () => {

    function handleInput(e) { e.target.className = "clicked inp" }
    function blurInput(e) { e.target.className = "inp" }


    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [Errors, setErrors] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setErrors(errors);
        if (errors.mail === "" && errors.pass === "") {
            localStorage.setItem('email', document.forms[0].mail.value);
            localStorage.setItem("passWord", pass);
            localStorage.setItem('m' , 4 );
            window.location.href = '/Courses';
        }
    }
    const validate = () => {
        const error = {};

        if (!mail) {
            error.mail = "الايميل مطلوب";
        } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(mail)) {
            error.mail = "الايميل غير صحيح";
        } else {
            error.mail = "";
        }

        if (!pass) {
            error.pass = "كلمة المرور مطلوبة";
        } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass)) {
            error.pass = "كلمة المرور غير صحيحة";
        } else {
            error.pass = "";
        }
        return error;
    }
    const [heddin , setHeddin] = useState(true)
    const handlePassword = () => {
        setHeddin(!heddin);
    }
    return (
        <div className='back'>
            <div className='form container'>
                <form className='' onSubmit={handleSubmit}>
                    <div className='header'>
                        <img className='formlogo' src={logo} />
                        <p className='m-auto parg'>تسجيل الدخول</p>
                    </div>
                    <div className='d-block input'>
                        <input type="email" name='mail' className='inp'
                            onChange={(e) => setMail(e.target.value)}
                            onClick={(e) => handleInput(e)}
                            onBlur={(e) => blurInput(e)}
                            placeholder='Email ...' />
                        {Errors.mail && <div className='error'>{Errors.mail}</div>}
                    </div>
                    <div className='d-block input ' id='pass'>
                        <input type={heddin  ?"password" :"text"} name='pass' className='inp typ'
                            onChange={(e) => setPass(e.target.value)}
                            onClick={(e) => handleInput(e)}
                            onBlur={(e) => blurInput(e)}
                            placeholder='PassWord ...' />
                            <span className='eye' onClick={handlePassword}>{heddin ?<FaEyeSlash/> :<FaEye/>}</span>
                        {Errors.pass && <div className='error'>{Errors.pass}</div>}
                    </div>
                    <button className='botn botn1'>تسجيل الدخول</button>
                </form>
                <div className='or'> <p className='oro' >أو</p> </div>
                <Link to='/Sign'><button className=' botn botn2'> انشاء حساب</button></Link>
            </div>
        </div>
    )
}

export default LogeIn