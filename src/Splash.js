//import liraries
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class Splash extends Component {
    render() {
        return (
            <div>
            <div className='row'
                style={{marginTop:'16vh'}}
            >
            {/* <img className='row' src={require('./images/logo.jpg')}  */}
            <img className='row' src={require('./images/ganapati.jpeg')}
                    style={{width:'8%',height:'4%',borderRadius:'10px'}}
                />
            </div>
            <div style={{justifyContent:'center',alignItems:'center',marginTop:'4vh'}}>
            {/* ,display:'flex',height:'100vh',flexDirectionz:'column' */}
               <div>
               <ReactCSSTransitionGroup 
                                        transitionName="example1"
                                        transitionAppear={true}
                                        transitionEnter={3000}
                                        transitionEnterTimeout={5000}
                                        transitionLeave={3000}
                                        transitionLeaveTimeout={1000}
                >
                    <img className='row' src={require('./images/logo.jpg')} 
                        style={{width:'60%',height:'60%'}}
                    />
                </ReactCSSTransitionGroup>
               </div>
               <div>
               <ReactCSSTransitionGroup 
                                        transitionName="example1"
                                        transitionAppear={true}
                                        transitionEnter={3000}
                                        transitionEnterTimeout={5000}
                                        transitionLeave={3000}
                                        transitionLeaveTimeout={1000}
                >
                    <h2 style={{fontFamily:'Lora',fontWeight:'300', textShadow: '.5px .5px gray',color:'rgba(57, 74, 132,6 )'}}>Rohan Weds Prashansa</h2>
                    <h3 style={{fontFamily:'Cookie',fontWeight:'400',textShadow: '.5px .5px gray',color:'rgba(57, 74, 132,6 )'}}>#TerenaalPRhogaya</h3>
            </ReactCSSTransitionGroup>
               </div>
            </div>
            </div>
        );
    }
}

//make this component available to the app
export default Splash;
