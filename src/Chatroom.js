import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Chat from './Chat';

import Typing from './Typing';
// import { CSSTransition } from 'react-transition-group';

// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
// import Message from './Message.js';

const message=[
    {
    id:1,
    username: "bot",
    content: 'Hello World!',
    img: "http://i.imgur.com/Tj5DGiO.jpg",
    time:1000
    }, 
    {
    id:2,
    username: "bot",
    content: 'Love it! :heart:',
    img: "http://i.imgur.com/Tj5DGiO.jpg",
    time:1000
    }, 
    {
    id:3,
    username:'user',
    img:'http://i.imgur.com/Tj5DGiO.jpg',
    content:'userMessge',
    time:1000
    },
    {
    id:4,
    username:'user',
    img:'http://i.imgur.com/Tj5DGiO.jpg',
    content:'userMessge2',
    time:1000
    },
    {
        id:5,
        username: "bot",
        content: 'Love it! :heart:',
        img: "http://i.imgur.com/Tj5DGiO.jpg",
        time:1000
     },
    
]
// const botMessage=[
//     {
//     id:1,
//     username: "bot",
//     content: <p>Hello World!</p>,
//     img: "http://i.imgur.com/Tj5DGiO.jpg",
//     time:1000
//     }, 
//     {
//     id:2,
//     username: "bot",
//     content: <p>Love it! :heart:</p>,
//     img: "http://i.imgur.com/Tj5DGiO.jpg",
//     time:1000
//     }, 
//     {
//     id:5,
//     username: "bot",
//     content: <p>Love it! :heart:</p>,
//     img: "http://i.imgur.com/Tj5DGiO.jpg",
//     time:1000
//     }, 
// ]
class Chatroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: messageList,
        };
        this.submitMessage = this.submitMessage.bind(this);
    }

    componentWilMount() {
       
    }

    scrollToBot(){
        console.log("inside handleScroll");
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }
    button1 = () =>{
        return(
            <div className='buttonDiv'>
                    <button className='customButton' 
                        onClick={()=>this.sendMessage()}
                    >
                    BUTTON TEXT1
                    </button>
                </div>
        )
    }
    button2 = () =>{
        return(
            <div className='buttonDiv'>
                    <button className='customButton' 
                        onClick={()=>this.sendMessage()}
                    >
                    BUTTON TEXT2
                    </button>
                </div>
        )
    }
    button3 = () =>{
        return(
            <div className='buttonDiv'>
                    <button className='customButton' 
                        onClick={()=>this.sendMessage()}
                    >
                    BUTTON TEXT3
                    </button>
                </div>
        )
    }
    submitMessage(e) {
        e.preventDefault();
        console.log('ReactDOM.findDOMNode(this.refs.msg).value',ReactDOM.findDOMNode(this.refs.msg).value);
        this.setState({
            chats: this.state.chats.concat([{
                username: "user",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            this.sendProps();
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }
    sendMessage() {
        // console.log('userMessage[this.state.index]',message[this.state.index]);
        // if( this.state.index < message.length){
        //     this.setState({
        //         chats: this.state.chats.concat([message[this.state.index]]),
        //         index:this.state.index+1
        //     });
        //     this.sendProps();
        //     this.scrollToBot();
        // }
        // this.scrollToBot();
    }
    sendProps =  () =>{
        return(
            <Chat things={ this.state.chats } handleScroll={this.scrollToBot.bind(this)}/>  
        )
    }
    render() {
        console.log('state data',this.state.chats);
        const username = "user";
        const { chats } = this.state;
        console.log(chats[this.state.index])
        return (

            <div className="chatroom">
            <div className='header'>
                            <div style={{textAlign: 'left',margin: 'auto'}}>&nbsp;
                                <img className='pull-left' src={'https://assets.marthastewartweddings.com/styles/wmax-520-highdpi/d43/monica-alex-wedding-couple-032-6373505-0817/monica-alex-wedding-couple-032-6373505-0817_vert.jpg?itok=5VldsIvf'}
                                    style={{marginLeft:25,marginTop:5,width:45,height:45,borderRadius:50}}/>
                                        <p  style={{alignSelf:'left',left:0,fontSize:33,marginBottom: -5,fontWeight:'500'}}>&nbsp;&nbsp;&nbsp;#Adisnehdavyaah</p><br/>
                                        <p  style={{fontSize:14,fontFamily:'nunito',fontWeight:'600'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Invite</p>
                            </div>
            </div>  
                <ul className="chats" ref="chats" style={ { backgroundImage: `url(require("./images/background2.jpg"))` } }>
                       
                </ul>
                <div className='footer'>
                        {
                            this.button2()
                        }
                </div>     
            </div>


        );
    }
}

export default Chatroom;