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
      <GoogleMap defaultZoom={17} defaultCenter={{ lat: 17.9175, lng: 73.6602}}>
        {" "}
        <Marker position={{ lat: 17.9175, lng: 73.6602 }} />{" "}
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
        // console.log('this.props.scrollToBot',this.props.scrollToBot);
        this.timer= setTimeout(() => {
            this.setState({hidden: false});
            // this.playPromise=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
            this.playPromise=new Audio(require('./audio/tick.mp3'))
            this.playPromise.play()
            // this.props.scrollToBot();
            this.scrollToBot();
        }, 1500);
    }
    componentWillUnmount() {
        console.log('audio');
        clearTimeout(this.timer)
        
    }
    scrollToBot = () =>{
        this.props.scrollToBot();
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
                        showImageCount={false}
                    />
                </div>
                <div>
                {(() => {
                        switch(chat.type) {
                            case 'image':
                                return <li className={`chat ${username === chat.username ? "right" : "left"}`}
                                            style={{
                                                
                                                marginRight:username === chat.username ? '-12px':'0px',
                                                marginLeft:username === chat.username ? 'none':'-12px',
                                                marginRight:username === chat.username ? '12px':'none',
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
                                                                width:'225px',
                                                                background:chat.type==='image'? 'none':'rgba(255, 255, 255, 0.8)',
                                                                borderTopLeftRadius:username === chat.username ? '1.3em': 0,
                                                                borderBottomLeftRadius:'1.3em',
                                                                borderBottomRightRadius:'1.3em',
                                                                borderTopRightRadius:username !== chat.username ? '1.3em': 0,
                                                                background:'linear-gradient( #6741a3 #a3337c ))',
                                                                marginBottom: '-7px',
                                                                }}
                                                            onLoad={()=>this.scrollToBot()}
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
                    <div style={{marginTop:10,marginLeft:username !== chat.username ? 35:'none',marginRight:username !== chat.username ? 'none':-50}}>
                        {/* <Typing/> */}

                        <div className="fb-chat"
                            style={{
                                background:username !== chat.username ? 'rgba(255, 255, 255, 0.8)': 'linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))',
                                boxShadow:'1px 3px 12px rgba(0,0,0,0.1)',
                                }}
                        >
                            <div className="fb-chat--bubbles"
                            // style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}
                            >
                                <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                            </div>
                        </div>
                    </div>
                    }

                    </li>
                                
                            case 'map':
                                return  <li className={`maps ${username === chat.username ? "right" : "left"}`}>
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
                                
                                 <div 
                                        style={{
                                            height:'150px',width:'225px',
                                            marginTop: '15px',
                                                borderTopLeftRadius:username === chat.username ? '1.3em': 0,
                                                borderBottomLeftRadius:'1.3em',
                                                borderBottomRightRadius:'1.3em',
                                                borderTopRightRadius:username !== chat.username ? '1.3em': 0,
                                                background: !this.state.hidden ? (username === chat.username ? 
                                                                                                        chat.type!='map' ? 
                                                                                                                            ('linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))' )
                                                                                                                        : ('none')
                                                                                                    : 
                                                                                                        chat.type!='map' ? 
                                                                                                                            ('rgba(255, 255, 255, 0.8)' )
                                                                                                                            : ('none'))
                                                                                :('none'),
                                                                                
                                                                                



                                                boxShadow: !this.state.hidden ? (username === chat.username ? 
                                                                                    (chat.type!='map' ? 
                                                                                                        ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none'))
                                                                                : 
                                                                                    (chat.type!='map' ? 
                                                                                                    ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none')))
                                                                            :
                                                                            ('none')
                                     }}>
                                    {

                                    chat.type==='map' && 
                                        <MapWithAMarker
                                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A&callback=initMap"
                                            loadingElement={<div style={{ height: '150px',width:'225px',
                                                marginTop: '10px',
                                                borderTopLeftRadius:username === chat.username ? 10: 0,
                                                borderBottomLeftRadius:10,
                                                borderBottomRightRadius:10,
                                                borderTopRightRadius:username !== chat.username ? 10: 0,
                                                background: !this.state.hidden ? (username === chat.username ? 
                                                                                                        chat.type!='map' ? 
                                                                                                                            ('linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))' )
                                                                                                                        : ('none')
                                                                                                    : 
                                                                                                        chat.type!='map' ? 
                                                                                                                            ('rgba(255, 255, 255, 0.8)' )
                                                                                                                            : ('none'))
                                                                                :('none'),
                                                                                
                                                                                



                                                boxShadow: !this.state.hidden ? (username === chat.username ? 
                                                                                    (chat.type!='map' ? 
                                                                                                        ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none'))
                                                                                : 
                                                                                    (chat.type!='map' ? 
                                                                                                    ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none')))
                                                                            :
                                                                            ('none')
                                            }} />}
                                            containerElement={<div style={{ height: '150px',width:'225px',
                                                marginTop: '10px',
                                                borderTopLeftRadius:username === chat.username ? 10: 0,
                                                borderBottomLeftRadius:10,
                                                borderBottomRightRadius:10,
                                                borderTopRightRadius:username !== chat.username ? 10: 0,
                                                background: !this.state.hidden ? (username === chat.username ? 
                                                                                                        chat.type!='map' ? 
                                                                                                                            ('linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))' )
                                                                                                                        : ('none')
                                                                                                    : 
                                                                                                        chat.type!='map' ? 
                                                                                                                            ('rgba(255, 255, 255, 0.8)' )
                                                                                                                            : ('none'))
                                                                                :('none'),
                                                                                
                                                                                



                                                boxShadow: !this.state.hidden ? (username === chat.username ? 
                                                                                    (chat.type!='map' ? 
                                                                                                        ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none'))
                                                                                : 
                                                                                    (chat.type!='map' ? 
                                                                                                    ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none')))
                                                                            :
                                                                            ('none')
                                            }} />}
                                            mapElement={<div style={{ height: '150px',width:'225px',
                                                marginTop: '10px',
                                                borderTopLeftRadius:username === chat.username ? 10: 0,
                                                borderBottomLeftRadius:10,
                                                borderBottomRightRadius:10,
                                                borderTopRightRadius:username !== chat.username ? 10: 0,
                                                background: !this.state.hidden ? (username === chat.username ? 
                                                                                                        chat.type=='map' ? 
                                                                                                                            ('linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))' )
                                                                                                                        : ('none')
                                                                                                    : 
                                                                                                        chat.type=='map' ? 
                                                                                                                            ('rgba(255, 255, 255, 0.8)' )
                                                                                                                            : ('none'))
                                                                                :('none'),
                                                                                
                                                                                



                                                boxShadow: !this.state.hidden ? (username === chat.username ? 
                                                                                    (chat.type=='map' ? 
                                                                                                        ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none'))
                                                                                : 
                                                                                    (chat.type=='map' ? 
                                                                                                    ('1px 3px 12px rgba(0,0,0,0.4)')
                                                                                                    : ('none')))
                                                                            :
                                                                            ('none')
                                            }} />}
                                        />
                                    }                 
                                     </div>
                                </ReactCSSTransitionGroup>
                                    :
                                    <div style={{marginTop:30,marginLeft:username !== chat.username ? 30:'none',marginRight:username !== chat.username ? 'none':-50}}>
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
                                            <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                            <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                            <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                        </div>
                                    </div>
                                </div>
                                }
                                
                                     </li>
                                
                            default:
                                return <li className={`chat ${username === chat.username ? "right" : "left"}`}
                                            style={{
                                                marginTop: '10px',
                                                borderTopLeftRadius:username === chat.username ? '1.3em': 0,
                                                borderBottomLeftRadius:'1.3em',
                                                borderBottomRightRadius:'1.3em',
                                                borderTopRightRadius:username !== chat.username ? '1.3em': 0,
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
                                                                                                        ('1px 3px 12px rgba(0,0,0,0.2)')
                                                                                                    : ('none'))
                                                                                : 
                                                                                    (chat.type!='image' ? 
                                                                                                    ('1px 3px 12px rgba(0,0,0,0.2)')
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
                                                <p style={{color:username !== chat.username ? '#4a4a4a':'#ffffff',justifyContent:'flex-start',marginTop:'3px',marginBottom:'3px'}}> { chat.type!=='image' &&  chat.content} </p>
                                                {/* <p style={{color:username !== chat.username ? '#4a4a4a':'#ffffff',justifyContent:'flex-start',position: 'relative',padding: '5px 13px',fontSize: '14px',fontFamily: 'Nunito Sans',borderTopLeftRadius: '10px',borderBottomLeftRadius: '10px',borderBottomrightRadius: '10px',listStyle: 'none',clear: 'both',margin: '10px 0',maxWidth: '200px',textAlign:'left', boxShadow: '1px 3px 12px rgba(0,0,0,0.9)'}}> { chat.type!=='image' &&  chat.content} </p> */}
                                            </div>
                                        </div>

                                        </ReactCSSTransitionGroup>

                                        :
                                        
                                        <div style={{marginTop:10,marginLeft:username !== chat.username ? 20:'none',marginRight:username !== chat.username ? 'none':-50}}> 
                                            {/* <Typing/> */}
                                            <div className="fb-chat" 
                                                style={{
                                                    marginTop:'10',
                                                    background:username !== chat.username ? 'rgba(255, 255, 255, 0.8)': 'linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))',
                                                    boxShadow:'1px 3px 12px rgba(0,0,0,0.1)'
                                                    }}
                                            >
                                                <div className="fb-chat--bubbles"
                                                    // style={{background:username !== chat.username ? '#4a4a4a':'#ffffff'}}
                                                >
                                                     <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                                     <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                                     <span style={{background:username !== chat.username ? '#B6B5BA':'#ffffff'}}></span>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                        </li>
                        }
                        })()}
               
                </div>

                </div>
            )
        }
    }
export default Message;
