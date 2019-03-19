import React from 'react';
import './App.css';
import Lightbox from 'react-images';
// import Maps from './Maps'
import Tick from './audio/Tick'
import './TypingBubble.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 19.1098, lng: 72.8583}}>
        {" "}
        <Marker position={{ lat: 19.1098, lng: 72.8583 }} />{" "}
      </GoogleMap>
    ))
);

class Message extends React.Component {

    constructor(props){
        super(props);
        this.state={
            hidden: true
        }
        
    }
    componentDidMount(){
        this.timer= setTimeout(() => {
            this.setState({hidden: false});
            // this.playPromise=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
            this.playPromise=new Audio(require('./audio/tick.mp3'))
            this.playPromise.play()
            this.props.scrollToBot();
        }, 2000);
        
        // console.log('audio');
        
       

}
    componentWillUnmount() {
        console.log('audio');
        clearTimeout(this.timer)
    }
    render(){
        console.log(this.state.hidden);

        const {chat,username}=this.props;
            return (
                <div>
                 <div>
                    <Lightbox
                        images={[this.state.image]}
                        isOpen={this.state.lightboxIsOpen}
                        onClose={()=> this.setState({lightboxIsOpen:false})}
                    />
                </div>

                
                <div>
              

               { chat.type==='text' ? 
                    <li className={`chat ${username === chat.username ? "right" : "left"}`}
                                            style={{
                                                marginTop: '10px',
                                                borderTopLeftRadius:username === chat.username ? 10: 0,
                                                borderBottomLeftRadius:10,
                                                borderBottomRightRadius:10,
                                                borderTopRightRadius:username !== chat.username ? 10: 0,
                                                background: !this.state.hidden ? (username === chat.username ? 
                                                                                                        chat.type!='image' ? 
                                                                                                                            ('linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))' )
                                                                                                                        : ('none')
                                                                                                    : 
                                                                                                        chat.type!='image' ? 
                                                                                                                            ('rgba(255, 255, 255, 0.8)' )
                                                                                                                            : ('none'))
                                                                                :('none'),
                                                                                
                                                                                



                                                boxShadow: !this.state.hidden ? (username === chat.username ? 
                                                                                    (chat.type!='image' ? 
                                                                                                        ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none'))
                                                                                : 
                                                                                    (chat.type!='image' ? 
                                                                                                    ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none')))
                                                                            :
                                                                            ('none')
                                            }}
                    >

                    {
                        !this.state.hidden ? 
                    <ReactCSSTransitionGroup 
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionEnter={100}
                                        transitionEnterTimeout={100}
                                        transitionLeave={100}
                                        transitionLeaveTimeout={500}
                                        >
                    <div>
                    
                        <div>
                            <p style={{color:username !== chat.username ? '#4a4a4a':'#ffffff',justifyContent:'flex-start',}}> { chat.type!=='image' &&  chat.content} </p>
                            {/* <p style={{color:username !== chat.username ? '#4a4a4a':'#ffffff',justifyContent:'flex-start',position: 'relative',padding: '5px 13px',fontSize: '14px',fontFamily: 'Nunito Sans',borderTopLeftRadius: '10px',borderBottomLeftRadius: '10px',borderBottomrightRadius: '10px',listStyle: 'none',clear: 'both',margin: '10px 0',maxWidth: '200px',textAlign:'left', boxShadow: '1px 3px 12px rgba(0,0,0,0.9)'}}> { chat.type!=='image' &&  chat.content} </p> */}
                        </div>
                    </div>

                    </ReactCSSTransitionGroup>

                    :
                    <div style={{paddingLeft:40}}> 
                        {/* <Typing/> */}
                        <div className="fb-chat" 
                            style={{
                                background:username !== chat.username ? 'rgba(255, 255, 255, 0.8)': 'linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))',
                                boxShadow:'1px 3px 12px rgba(0,0,0,0.1)'
                                }}
                        >
                            <div className="fb-chat--bubbles"
                                // style={{background:username !== chat.username ? '#4a4a4a':'#ffffff'}}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    }

                    </li>


                    :


                    <li className={`chat ${username === chat.username ? "right" : "left"}`}
                                            style={{
                                                
                                                marginRight:username === chat.username ? '-12px':'0px',
                                                marginLeft:username === chat.username ? '0px':'-12px',
                                                borderTopLeftRadius:username === chat.username ? 10: 0,
                                                borderBottomLeftRadius:10,
                                                borderBottomRightRadius:10,
                                                borderTopRightRadius:username !== chat.username ? 10: 0,
                                                background: !this.state.hidden ? (username === chat.username ? 
                                                                                                        chat.type!='image' ? 
                                                                                                                            ('linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))' )
                                                                                                                        : ('none')
                                                                                                    : 
                                                                                                        chat.type!='image' ? 
                                                                                                                            ('rgba(255, 255, 255, 0.8)' )
                                                                                                                            : ('none'))
                                                                                :('none'),
                                                                                
                                                                                



                                                boxShadow: !this.state.hidden ? (username === chat.username ? 
                                                                                    (chat.type!='image' ? 
                                                                                                        ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none'))
                                                                                : 
                                                                                    (chat.type!='image' ? 
                                                                                                    ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none')))
                                                                            :
                                                                            ('none')
                                            }}
                    >

                    {
                        !this.state.hidden ? 

                        <ReactCSSTransitionGroup 
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionEnter={100}
                                        transitionEnterTimeout={100}
                                        transitionLeave={100}
                                        transitionLeaveTimeout={500}
                                        >
                    <div>
                        <div>


                            {
                                
                                chat.type==='image' && 
                                    <div style={{padding:5,paddingLeft:0,background:'none'}}> 
                                        <img src={chat.image} 
                                        style={{
                                            marginTop: '-7px',
                                            height:'auto',
                                            width:200,
                                            background:chat.type==='image'? 'none':'rgba(255, 255, 255, 0.8)',
                                            borderTopLeftRadius:username === chat.username ? 10: 0,
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,
                                            borderTopRightRadius:username !== chat.username ? 10: 0,
                                            background:'linear-gradient( #6741a3 #a3337c ))',
                                            marginBottom: '-7px',
                                            }}

                                        onClick={()=>{
                                            this.setState({
                                                lightboxIsOpen:true,
                                                image:{src:chat.image}
                                            })
                                            }}
                                />
                                </div>
                            
                                
                            }
                            


                        </div>
                            
                    </div>
                    </ReactCSSTransitionGroup>


                    :
                    <div style={{paddingLeft:40}}>
                        {/* <Typing/> */}

                        <div className="fb-chat"
                            style={{
                                background:username !== chat.username ? 'rgba(255, 255, 255, 0.8)': 'linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))',
                                boxShadow:'1px 3px 12px rgba(0,0,0,0.1)',
                                }}
                        >
                            <div className="fb-chat--bubbles"
                            // style={{background:username !== chat.username ? '#4a4a4a':'#ffffff'}}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    }

                    </li>
                    
                           
                                
                            
               }
               <div style={{height:100,width:50}}>
                            {

                              chat.type==='map' && 
                                <MapWithAMarker
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A&callback=initMap"
                                    loadingElement={<div style={{ height: `100%`, width:'100%' }} />}
                                    containerElement={<div style={{ height: `400px`,width:'400px' }} />}
                                    mapElement={<div style={{ height: `100%`,width:'100%' }} />}
                                />
                             }                 
                            </div>
                </div>
               
                

                </div>
            )
        }
    }
export default Message;
