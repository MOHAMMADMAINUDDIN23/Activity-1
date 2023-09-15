import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='card mt-2'>
            <div className='m-2 my-3 d-flex card-body'>
              <div>
              <img src="./assets/mypic.jpg" alt="" height={'250px'} width={'auto'} className='boreder rounded'/>
              </div>
              <div className='m-2'>
              <h1>Mohammad Mainuddin</h1>
              <p>Student at Sahyadri College of Engineering & Management</p>
              <p>Learning and Exploring!</p>
              <ul className='list-group-sm'>
                <li className='list-group-items'>Designing and Analysis of Algorithms with Python</li>
                <li className='list-group-items'>Operating System</li>
                <li className='list-group-items'>Embedded System concepts with ARM</li>
                <li className='list-group-items'>MERN stack</li>
              </ul>
              </div>
            </div>
        </div>
        <div className='card mt-2'>
          <div className='card-body'>
          <h3>About</h3>
          <p>Hello there, I'm a student who is pursuing a Bachelor Degree in the field of Information Science and Engineering, with a passion for continuous learning and development, My field of study has been wrapped together with the various technical knowledge and skills to design, develop, and implement innovative solutions for various applications. My curiosity and eagerness to learn new things has driven me to delve deeper into the world of developing that has been leaded me to build my career in developing.</p>
          </div>

        </div>
        
        
  
      </div>
    </div>
  )
}

export default Home