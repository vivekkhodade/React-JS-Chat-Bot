//import liraries 
import React, { Component } from 'react';
import { messageList } from './Constant/Constant'
import ReactDOM from 'react-dom';
import Lightbox from 'react-images';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import './App.css';
import Message from './Message';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
class Chats extends Component {
    constructor(props){
        super(props);
        this.state={
            renderedThings: [],
            itemsRendered: 0,
            things:[],
            showButton:false,
            
        }
        // this.audio = new Audio(('./tick.mp3'))
    }
    componentWillMount(){
        this.setState({things:messageList})
    }
    scrollToBot =() =>{
        console.log("inside handleScroll");
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
        // ReactDOM.findDOMNode(this.refs.chats).scrollIntoView();
        //.scrollIntoView({ behavior: "smooth" })
        // this.scrollToBot.scrollIntoView({ behavior: 'smooth' })
        // this.el.focus();
        // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    componentDidMount(){
        this.scheduleNextUpdate()
        // const script = document.createElement("script");

        // script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A&callback=myMap";
        // script.async = true;

        // document.body.appendChild(script);
        this.scrollToBot();
    }

    scheduleNextUpdate =() => {
        // this.timer = setTimeout(this.updateRenderedThings, 2000)
        // this.scrollToBot();
        this.timer = setTimeout(()=>{
            if(this.state.itemsRendered==3 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else if(this.state.itemsRendered==7 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else if(this.state.itemsRendered==9 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else if(this.state.itemsRendered==12 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else if(this.state.itemsRendered==15 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else if(this.state.itemsRendered==21 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else if(this.state.itemsRendered==28 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else if(this.state.itemsRendered==32 && !this.state.showButton){
                this.setState({
                    showButton:true
                })
                this.scrollToBot();
                clearTimeout(this.timer)
            }
            else{
                this.updateRenderedThings()
                this.scrollToBot();
            }
            this.scrollToBot();
        },1500)
        
    }
    clearTimer = ()=>{
        clearTimeout(this.timer)
    } 
    updateRenderedThings = ()=> {

        
        const {itemsRendered} = this.state
        const updatedState = {
          renderedThings: this.state.renderedThings.concat(this.state.things[this.state.itemsRendered]),
          itemsRendered: itemsRendered+1
        }
        this.setState(updatedState)
          if (updatedState.itemsRendered < this.state.things.length) {
            this.scrollToBot();
                // if(this.state.itemsRendered==3){
                //     this.setState({
                //         showButton:true
                //     })
                //     clearTimeout(this.timer)
                // }
                // else if(this.state.itemsRendered==5){
                //     this.setState({
                //         showButton:true
                //     })
                //     clearTimeout(this.timer)
                // }
                // else if(this.state.itemsRendered==7){
                //     this.setState({
                //         showButton:true
                //     })
                //     clearTimeout(this.timer)
                // }
                // else{
                    this.scheduleNextUpdate();
                // }
             }
         }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    sendMessage1 = () =>{
        
        // alert('button Pressed!');
        // this.refs.btn1.setAttribute("disabled", "disabled");
        // this.scheduleNextUpdate();
        this.updateRenderedThings();
        this.scrollToBot();
    }
    sendMessage2 = () =>{
        // alert('button Pressed!');
        
        // this.refs.btn2.setAttribute("disabled", "disabled");
        // this.scheduleNextUpdate();
        this.updateRenderedThings();
        this.scrollToBot();
    }
    sendMessage3 = () =>{
        // alert('button Pressed!');
        
        // this.refs.btn3.setAttribute("disabled", "disabled");
        this.updateRenderedThings();
        this.scrollToBot();
        // this.scheduleNextUpdate();
    }
    button1 = () =>{
        return(
        <div className='buttonDiv'>
            <button variant="contained" color="secondary" className= 'customButton'
            style={{borderRadius:50}}
            // ref="btn1" 
            onClick={()=>{
                                this.setState({
                                showButton:false
                                })
                                this.scrollToBot();
                           this.sendMessage1()
            }}
            >
            <b>{this.state.things[this.state.itemsRendered].buttonText}
            </b>
            </button>
        </div>
        )
    }
    button2 = () =>{
        return(
            <div className='buttonDiv'>
            <button variant="contained" color="secondary" className= 'customButton'
            style={{borderRadius:50}}
            // ref="btn1" 
            onClick={()=>{
                                this.setState({
                                showButton:false
                                })
                                this.scrollToBot();
                           this.sendMessage2()
            }}
            >
             Awesome & Soo whats the itinerary/program?
            
            </button>
            </div>
        )
    }
    button4 = () =>{
        return(
            <div className='buttonDiv'>
                    <button variant="contained" color="secondary" className= 'customButton'
                        style={{borderRadius:50,marginBottom:-40}}
                        // ref="btn1" 
                        onClick={()=>{
                                            this.setState({
                                            showButton:false
                                            })
                                            this.scrollToBot();
                                    this.sendMessage3();
                        }}
                        >
                        {this.state.things[this.state.itemsRendered].content}
                        
                    </button>
                </div>
        )
    }
    button3 = () =>{
        return(
            <div className='buttonDiv'>
                    <button variant="contained" color="secondary" className= 'customButton'
                    style={{borderRadius:50,}}
                    // ref="btn1" 
                    onClick={()=>{
                                        this.setState({
                                        showButton:false
                                        })
                                        this.scrollToBot();
                                        this.sendMessage3();
                    }}
                    >
                    {this.state.things[this.state.itemsRendered].content}
            
                    </button>
                </div>
        )
    }

  
    render() {
        console.log("this.state.things[this.state.itemsRendered]",this.state.things[this.state.itemsRendered]);
        const username = "user";
        return (
            <div>   
            <div className="chatroom">
                    {/* <div className='header'>
                            <div style={{textAlign: 'left',margin: 'auto'}}>&nbsp;
                                <img className='pull-left' src={'https://lh3.googleusercontent.com/-yZKDpFA9a7g/XHUMTb0pKHI/AAAAAAAABds/UnPCiaos09AywtqvLe-BDSTN8GLk0JVXACL0BGAYYCw/h508/2019-02-26.jpg'}
                                    style={{marginLeft:10,marginTop:5,width:45,height:45,borderRadius:50}}/>
                                        <p  style={{alignSelf:'left',left:0,fontSize:33,marginBottom: -5,fontWeight:'500',fontFamily:'Cookie'}}>&nbsp;&nbsp;&nbsp;#AdiSnehdavyaah</p><br/>
                                        <p  style={{fontSize:14,fontFamily:'nunito',fontWeight:'600'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21th April 2019</p>
                            </div>
                    </div> */}
                    
                    {/* <ul className="chats" ref={el => { this.el = el; }} style={{height:this.state.showButton ?'calc(100vh - 200px)' : 'calc(100vh - 10px)'}}> */}
                    <ul className="chats" ref="chats" style={{height:this.state.showButton ?'calc(100vh - 80px)' : 'calc(100vh - 10px)'}}>
                       
            
                        <div>
                            <Lightbox
                                images={[this.state.image]}
                                isOpen={this.state.lightboxIsOpen}
                                onClose={()=> this.setState({lightboxIsOpen:false})}
                                imageCountSeparator='none'
                                showImageCount={false}
                            />
                        </div>
                        <div>
                        <ReactCSSTransitionGroup 
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionEnter={3000}
                                        transitionEnterTimeout={5000}
                                        transitionLeave={3000}
                                        transitionLeaveTimeout={1000}
                    >
                            <div>
                            <div>
                                    <img src={require('./images/dp.jpg')}
                                    style={{width:100,height:100,borderRadius:50,border: '1.5px solid rgba(57, 74, 132,6 )',marginTop:' 10px'}}
                                    onClick={()=>{
                                                                this.setState({
                                                                    lightboxIsOpen:true,
                                                                    image:{src:require('./images/dp.jpg')}
                                                    })
                                                    }}
                                />
                            </div>
            {/* <div className='overlay'>  </div> */}
                           </div>
                            <div style={{alignSelf:'center',textAlign:'center',marginBottom: '20px',marginTop: '8px'}}>
                               <p style={{color: 'rgb(74, 74, 74)',fontWeight: 'bold',fontSize:'12px'}}>TODAY&nbsp;•&nbsp; {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                            </div>
                        </ReactCSSTransitionGroup>
                        </div>
                        {
                            this.state.renderedThings.map((chat, index) => (
                                <div key={index}>
                                       
                                        
                                                <Message chat={chat} username={username} scrollToBot={this.scrollToBot}/>
                                        
                                    
                                </div>
                            ))
                        }
                    </ul>
                    

                        <ReactCSSTransitionGroup 
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionEnter={3000}
                                        transitionEnterTimeout={5000}
                                        transitionLeave={3000}
                                        transitionLeaveTimeout={1000}
                                        >
                        <div className='footer' 
                        // style={{background:'white'}}
                        >
                            {   
                            this.state.itemsRendered==3 && this.state.showButton && this.button1()
                            }
                            {   
                            this.state.itemsRendered==7 && this.state.showButton && this.button1()
                            }
                            {   
                            this.state.itemsRendered==9 && this.state.showButton && this.button1()
                            }
                            {   
                            this.state.itemsRendered==12&& this.state.showButton && this.button1()
                            }
                            {   
                            this.state.itemsRendered==15 && this.state.showButton && this.button1()
                            }
                            {   
                            this.state.itemsRendered==21 && this.state.showButton && this.button1()
                            }
                            {   
                            this.state.itemsRendered==28 && this.state.showButton && this.button1()
                            }
                            {   
                            this.state.itemsRendered==32 && this.state.showButton && this.button1()
                            }
                            {/* {
                            this.state.itemsRendered==5 &&  this.state.showButton && this.button2()
                            }
                            
                            {
                            this.state.itemsRendered==9 &&  this.state.showButton && this.button3()
                            } */}
                         </div>
                         </ReactCSSTransitionGroup>
                         </div>    
            </div>
        );
    }
}


//make this component available to the app
export default Chats;
