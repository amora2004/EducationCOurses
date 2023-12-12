import React from 'react'
import members from '../Data/Data'
import Card from '../Components/Card/Card';
import './Team.css'
const Team = () => {
  let team = members;
  let allTeam = team.map((person) => {
    return<div className='col-lg-6'> <Card img={person.img} name={person.name} job={person.job} email={person.email}
      facebook={person.facebook} github={person.github} />
       </div>

  })
  return (
    <div className=' container team'>
      <div className=' allTeam row'>
        {allTeam}
      </div>
    </div>
  )
}

export default Team
