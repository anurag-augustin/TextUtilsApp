import React from 'react'
// style={{maxWidth: "540px"}}



export const About = (props) => {
    let myStyle={
        color : props.mode ==='light'?'black':'white',
        backgroundColor: props.mode ==='light'?'white':'#292924',
        border : props.mode ==='dark'?'1px solid white':''
    } 

    return (
        <>
            <div className="container card mb-3" style={myStyle}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./logo512.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">About Page</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
      </div>
    </div>
    
  </div>
</div>
        </>
    )
}

