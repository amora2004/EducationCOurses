import DataCourse from '../Data/DataCourse'
import './Courses.css'
import Course from '../Components/Course/Course';
export const Courses = () => {
  const courses = DataCourse;
  const allCorses = courses.map((c) => {
    return (
        <Course name={c.name} image={c.img} parg={c.glanse} />
    )
  })
  return (
    <div className='container courses'>
      <h1>المسارات الحالية</h1>
      <div className='row'>
        {allCorses}
      </div>
    </div>
  )
}
