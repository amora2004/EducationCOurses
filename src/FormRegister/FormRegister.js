import React, { useState } from 'react'
import './FormRegister.css'
import dataCourse from '../Data/DataCourse'
const FormRegister = () => {
    const fields = [
        { label: 'الاسم الكامل', type: 'text', required: "true", name: 'name', value: '' },
        { label: 'المؤهل الدراسي', type: 'text', required: "true", name: 'qaulification', value: '' },
        { label: 'خبرات الحاسب الآلي', type: 'text', required: "false", name: 'computerExper', value: '' },
        { label: 'رقم الموبايل', type: 'number', required: "true", name: 'number', value: '' },
        { label: 'البريد الالكتروني', type: 'email', required: "true", name: 'mainEmail', value: '' }
    ];
    const [Error, setError] = useState('');
    const [Err, setErr] = useState('');
    const [oky, setOky] = useState(0)
    let o = 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        let error = valdetCourse(e);
        setError(error);
        let err = valdetClient();
        setErr(err)
        if (error.time === '' && error.course === '' && err[0] === '' && err[1] === '' && err[3] === '' && err[4] === '')
            setOky(1)
    }
    function valdetCourse(e) {
        let error = [];

        if (e.target.elements.course.value === 'اختيار') { error.course = "هذا الحقل مطلوب"; e.target.elements.course.focus() }
        else { error.course = ""; localStorage.setItem('course', e.target.elements.course.value) }
        if (e.target.elements.time.value === 'اختيار') { error.time = "هذا الحقل مطلوب"; e.target.elements.time.focus() }
        else { error.time = ""; localStorage.setItem('time', e.target.elements.time.value) }
        if (e.target.elements.place.value === 'اختيار') { error.place = "هذا الحقل مطلوب"; e.target.elements.place.focus() }
        else { error.place = ""; localStorage.setItem('place', e.target.elements.place.value) }
        return error;
    }

    function valdetClient(e) {
        const error = [];

        listFields.map((e, i) => {
            let na = document.getElementsByClassName('ansr')[i].getAttribute('name');
            let req = fields[i].required;
            if (req === 'true') {
                if (document.getElementsByClassName('ansr')[i].value === '') {
                    error[i] = "هذا الحقل مطلوب";
                    document.getElementsByClassName('ansr')[i].focus();
                }
                else { error[i] = ''; localStorage.setItem(document.getElementsByClassName('ansr')[i].name, document.getElementsByClassName('ansr')[i].value) }
            }
            else {
                localStorage.setItem(document.getElementsByClassName('ansr')[i].name, document.getElementsByClassName('ansr')[i].value)
            }
            if (na === 'number') {
                const val = (document.getElementsByClassName('ansr')[i].value);
                if (val !== '')
                    if (!/^09\d{8}$/.test(val)) {
                        error[i] = "يجب أن يتكون رقم الموبايل من 10 أرقام و يبدأ ب 09";
                        o = 1;
                    }
            }
        }
        )
        return error
    }

    const listFields = fields.map((field, index) => (
        <div className='formItem' key={index}>
            {(field.required === "true") && <span className='required'>*</span>}
            <label>{field.label}</label>
            <input type={field.type} name={field.name} placeholder='إجابتك' className='ansr' />
            {Err[index] && <div className='error' id={index}>{Err[index]}</div>}
        </div>
    ))

    const courses = dataCourse.map((item) => item.name);
    return (
        <div className='container formRegister'>
            <h1>استمارة حجز كورسات</h1>
            <p>* تشير إلى أن الحقل مطلوب</p>
            <form onSubmit={handleSubmit} >
                <div className='row'>
                    <div className='dataCourse col-lg-6'>
                        <div className='formHead'>
                            <h3>بيانات الكورس المطلوب </h3>
                            <p>من فضلك قم بملء ما يناسبك من اختيارات</p>
                        </div>
                        <div className='formItem'>
                            <span className='required'>*</span>
                            <label >ما نوع التدريب الذي ترغب التسجيل فيه ؟</label>
                            <select name='course'>
                                <option>اختيار</option>
                                {courses.map((na, index) => <option key={index}>{na}</option>)}
                            </select>
                            {Error.course && <div className='error'>{Error.course}</div>}
                        </div>
                        <div className='formItem'>
                            <span className='required'>*</span>
                            <label >ما التوقيت المناسب لك لحضور الكورس ؟</label>
                            <select name='time'>
                                <option>اختيار</option>
                                <option>التوقيت الصباحي</option>
                                <option>التوقيت المسائي</option>
                            </select>
                            {Error.time && <div className='error'>{Error.time}</div>}
                        </div>
                        <div className='formItem'>
                            <label>ما هو أقرب مركز بالنسبة إليك ؟</label>
                            <div className='formRadio'>
                                <label><input type='radio' name='place' value="المحطة" />المحطة</label>
                                <label><input type='radio' name='place' value="الوعر" />الوعر</label>
                                <label><input type='radio' name='place' value="القصور" />القصور</label>
                            </div>
                            {Error.place && <div className='error'>{Error.place}</div>}
                        </div>
                    </div>
                    <div className='dataClint col-lg-6'>
                        <div className='formHead'>
                            <h3>بيانات المشترك</h3>
                            <p>من فضلك قم بملء هذه البيانات حتى يمكن الاتصال بك في أقرب وقت </p>
                        </div>
                        {listFields}
                    </div>
                </div>
                <div>
                    <input type='submit' className='btn bn botn mb-5' value='إرسال' />
                </div>
                <div className='result'>{(oky === 1 && o === 0) && "تم التسجيل بنجاح"}</div>
            </form>
        </div>
    )
}
export default FormRegister
