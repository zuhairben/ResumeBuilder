import React from 'react'

function Sidebar({setSection}) {
  return (
    <div className='sidebar'>
      <button onClick={()=> setSection('basicDetails')}>Basic Details</button>
      <button onClick={()=> setSection('skills')}>Skills and Expertise</button>
      <button onClick={()=> setSection('education')}>Education</button>
      <button onClick={()=> setSection('experience')}>Experience</button>
      <button onClick={()=> setSection('projects')}>Projects</button>
      <button onClick={()=> setSection('achievements')}>Achievements</button>
    </div>
  )
}

export default Sidebar
