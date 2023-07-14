import React from 'react'

const Description = () => {
  return (
    <div>
      <h4 style={
        {
          color: '#FCF6E4',
          fontSize:'20px',
          fontWeight: '400',
          lineHeight: 'normal',
          paddingLeft:'10px',
          marginTop:'120px'
        }
          }>HELLO THERE</h4>
      <h2 style={
        {
          color: '#FCF6E4',
          fontFamily: 'Kurale',
          fontSize: '50px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          marginTop: '-20px',
          paddingLeft:'10px'
        }
        }>I'M SAIF ALI</h2>
      <h3 style={
        {
          color: '#FCF6E4',
          fontSize:'35px',
          fontFamily: 'Kurale',
          fontWeight: '400',
          paddingLeft:'10px',
          marginTop:'-15px'
        }
      }>WEB DEVELOPER</h3>
      <p style={
        {
          color: '#FCF6E4',
          fontFamily: 'Kurale',
          paddingLeft:'10px',
          width:'550px',
          fontWeight:"400px",
         marginBottom: '20px',
        }
      }>I am a passionate web developer from India. 
        I love making websites and if you 
        wanna see my projects then kindly Click the below button  
      </p>

      <button style={
        {
          marginLeft:'10px',
          marginRight:'20px',
          borderRadius: '10px',
          background: '#FCF5E3',
          width:'75px',
          height:'35px',
          cursor: 'pointer',
          textDecoration: 'none',
          border: 'none',
          color:'rgba(0, 91, 71, 1)'
        }
      }>Hire me</button>
      <button className="projects"   style={
        {
          marginLeft:'10px',
          borderRadius: '10px',
          background: '#FCF5E3',
          width:'75px',
          height:'35px',
          cursor: 'pointer',
          textDecoration: 'none',
          borderColor: 'white',
          color:'white',
          backgroundColor:'rgba(0, 91, 71, 1)',
        }
      }>Projects</button>
      
      <h4 style={{
        color:'#FCF6E4',
        marginTop:'180px',
        paddingLeft:'10px',
        fontFamily: 'Kurale',
        
      }}>c 2023-all rights reserved</h4>
    </div>
  )
}

export default Description
