import React from "react";
import gif from './app.gif'
function About(){
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '90vh' }}>
                  <h1 style={{ color: '#A13119' }}>THIS IS ABOUT PAGE OF APPLICATION</h1>
                  <img style={{ height: '400px', width: '400px' }} src={gif} alt="Under Construction" />
        </div>
    )
}

export default About;
