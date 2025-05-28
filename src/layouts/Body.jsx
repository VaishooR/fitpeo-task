import React from 'react'
import '../styles/Body.css'
import Sidebar from './sidebar/Sidebar'
import MainContent from './mainContent/MainContent'

const Body = () => {
  return (
    <div className='body-container'>
       <Sidebar/>
       <MainContent/>
    </div>
  )
}

export default Body