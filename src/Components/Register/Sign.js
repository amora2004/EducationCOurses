import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import React from 'react'
import './Register.css'
import logo from '../../assist/logo.PNG'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Sign = () => {
    function handleInput(e) { e.target.className = "clicked inp" }
    function blurInput(e) { e.target.className = "inp" }


    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [rpass, setRPass] = useState('');
    const [name, setName] = useState('');
    const [Errors, setErrors] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setErrors(errors);
        if (errors.mail === "" && errors.pass === "" && errors.rpass === "") {
            localStorage.setItem('email', mail);
            localStorage.setItem("passWord", pass);
            localStorage.setItem('name', name);
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
            error.pass = "كلمة السر مطلوبة";
        } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass)) {
            error.pass = "يجب أن تكون كلمة المرور مكون من 6 إلى 16 من الحروف و الأرقام";
        } else {
            error.pass = "";
        }

        if (!rpass) { error.rpass = "يجب اعادة كتابة كلمة المرور" }
        else if (pass !== rpass) { error.rpass = "كلمتي المرور غير متطابقتين" }
        else { error.rpass = "" }

        if (!name) { error.name = "الاسم مطلوب" }
        else if(!/^[a-zA-Z\s]+$/.test(name)) (error.name="يوجد خطأ")
        return error;
    }
    const [heddin , setHeddin] = useState(true)
    const [Rheddin , setRHeddin] = useState(true)
    const handlePassword = () => {
        setHeddin(!heddin);
    }
    const handleRPassword = () => {
        setRHeddin(!Rheddin);
    }
    return (
        <div className='back'>
            <form className='form container' onSubmit={(e) => handleSubmit(e)}>
                <div className='heade'>
                    <img className='formlogo' src={logo} />
                    <p className='m-auto parg'>إنشاء حساب</p>
                </div>
                             <div className='d-block'>
                    <input type='text' className='inp' placeholder='Name ...'
                        onClick={(e) => handleInput(e)}
                        onBlur={(e) => blurInput(e)}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {Errors.name && <div className='error'>{Errors.name}</div>}
                </div>
                <div className='d-block'>
                    <input type="email" className='inp' onClick={(e) => handleInput(e)}
                        onBlur={(e) => blurInput(e)} onChange={(e) => setMail(e.target.value)}
                        placeholder='Email ...' />
                    {Errors.mail && <div className='error'>{Errors.mail}</div>}
                </div>
                <div className='d-block'>
                    <input type={heddin ?"password" :"text"} className='inp' onClick={(e) => handleInput(e)}
                        onBlur={(e) => blurInput(e)} onChange={(e) => setPass(e.target.value)}
                        placeholder='PassWord ...' />
                        <span className='eye' onClick={handlePassword}>{heddin ?<FaEyeSlash/> :<FaEye/>}</span>
                    {Errors.pass && <div className='error'>{Errors.pass}</div>}
                </div>
                <div className='d-block'>
                    <input type={Rheddin ?"password" :"text"} className='inp' onClick={(e) => handleInput(e)}
                        onBlur={(e) => blurInput(e)} onChange={(e) => setRPass(e.target.value)}
                        placeholder='ReEnter PassWord ...' />
                        <span className='eye' onClick={handleRPassword}>{Rheddin ?<FaEyeSlash/> :<FaEye/>}</span>
                    {Errors.rpass && <div className='error'>{Errors.rpass}</div>}
                </div>
                <button className='botn botn1'>إنشاء</button>
            </form>
        </div>
    )
}

export default Sign
