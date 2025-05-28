import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import '../../styles/MainContent.css' 

const MainContent = () => {
  return (
    <div className="main-content">
        <LeftPanel/>
        <RightPanel/>
    </div>
  )
}

export default MainContent