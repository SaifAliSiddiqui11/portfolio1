import React from 'react'
import myImage from './sideImagePort.jpg'
import rectangle from './rectangle2.jpg'
const SideImages = () => {
  return (
    <div>
      <img src={rectangle} style={
        {
        position:'relative',
        top:'35%',
        left:'115%',
        width: '400px',
        height: '300px',
        borderRadius:'0% 40%',
        }
      }/>
      <img src={rectangle} style={
      {
      position:'absolute',
      top:'25%',
      left:'55%',  
      width: '300px',
      borderRadius:'85%',
      height: '335px',
      }
      }/>
      <img src={myImage} style={
        {
        position:'absolute',
        top:'25%',
        left:'64%',
        width: '500px',
        height: '335px',
        objectFit: 'cover',
        borderRadius:'35px',
        }
      }/>
    </div>
  )
}

export default SideImages