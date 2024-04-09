    import React from "react";
    import gif from './app.gif';


    function Home(){
        return(
           
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '90vh' }}>
                  <h1 style={{ color: '#154360' }}>THIS IS HOME PAGE OF APPLICATION</h1>
                  <img style={{ height: '400px', width: '400px' }} src={gif} alt="Under Construction" />
                </div>
              );
            }
            
        
      

    export default Home;
