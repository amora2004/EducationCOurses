import React from 'react'
import './MoreInfo.css'
import info from "../../Data/DataCourse"
import { Link, useLocation, useParams } from 'react-router-dom'

const MoreInfo = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseId = searchParams.get('id');
  const data = info;
  const necessaryData = data.find((item) => item.name === courseId);
  return (
    <div className='container info'>
      <h2 className='infoTitle '>مسار : {necessaryData.name}</h2>
      <div className='infoPart1'>
        <div className='col-md-6 infoP'>
          <p > {necessaryData.info}</p>
          <h3>بإشراف المدرب : <span>{necessaryData.coach}</span></h3>
        </div>
        <img className='col-md-6 infoImage' src={necessaryData.more_img} alt="Course Image" />
      </div>
      <div className='infoPart2'>
        <div className='col-lg-6 text2'>
          <p><span>{necessaryData.duration} </span>ساعة تدريبية</p>
          <div>المهارات المكتسبة
            <p>{necessaryData.skills.map(item => <span className='skill'>  {item}   </span>)}</p>
          </div>
        </div>
        <div className='col-lg-6 text'>
          <p >يحصل الطالب في نهاية المسار على شهادة دورة و شهادة تدريب <span>معتمدة</span> من الشركة </p>
          <h4>تكلفة المسار :  <span>{necessaryData.cost}</span></h4>
        </div>
      </div>
      <Link className='bn' to='/FormRegister'><button className='btn bn botn'>تسجيل الآن</button></Link>
    </div>
  )
}

export default MoreInfo