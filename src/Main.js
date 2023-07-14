import React from 'react'
import Description from './Description'
import SideImages from './SideImages'

const Main = () => {
  return (
    <div className="main-body">
        <Description/>
        <SideImages/>
        {console.log(2+3)}
    </div>
  )
}

export default Main;