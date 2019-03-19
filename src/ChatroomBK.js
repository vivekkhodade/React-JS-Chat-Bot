import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Delayed from './Message'
import Lightbox from 'react-images';
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
            index:0,
            bot:true,
            chats: [
            {
                username: "bot",
                content: <p>Hello World!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time:1000,
                type:'image',
                image:'http://www1.pictures.zimbio.com/gi/Portsmouth+v+Coventry+City+FA+Cup+3rd+Round+mBzseXH41lcl.jpg',
                display:false,
            }, 
            {
                username: "bot",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time:2000,
                type:'text',
                type:'image',
                image:'http://www1.pictures.zimbio.com/gi/Portsmouth+v+Coventry+City+FA+Cup+3rd+Round+mBzseXH41lcl.jpg',
                display:false,
            }, 
            {
                id:3,
                username: "bot",
                content: <p>Check out my Github at https://github.com/WigoHunter</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time:5000,
                display:false,
            }, 
            {
                id:4,
                username: "user",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "http://i.imgur.com/ARbQZix.jpg",
                time:7000,
                display:false,
            }, {
                id:5,
                username: "bot",
                content: <p>So</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time:9000,
                display:false,
            }, {
                id:6,
                username: "user",
                content: <p>Chilltime is going to be an app for you to view videos with friends</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time:11000,
                type:'text',
                image:'http://www1.pictures.zimbio.com/gi/Portsmouth+v+Coventry+City+FA+Cup+3rd+Round+mBzseXH41lcl.jpg',
                display:false,
            }, {
                id:7,
                username: "bot",
                content: <p>You can sign-up now to try out our private beta!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time:13000,
                display:false,
            }, {
                id:8,
                username: "user",
                content: <p>Definitely! Sounds great!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time:15000,
                type:'text',
                image:'http://www1.pictures.zimbio.com/gi/Portsmouth+v+Coventry+City+FA+Cup+3rd+Round+mBzseXH41lcl.jpg',
                display:false,
            }
            ],
            lightboxIsOpen:false,
            image:{}
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        var timer=setInterval(()=>{
            // this.scrollToBot();
        },1000)
    }

    componentDidUpdate() {
        this.scrollToBot();
        var timer=setInterval(()=>{
            // this.scrollToBot();
            },1000)
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
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
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }
    sendMessage() {
        console.log('userMessage[this.state.index]',message[this.state.index]);
        if( this.state.index < message.length){
            this.setState({
                chats: this.state.chats.concat([message[this.state.index]]),
                index:this.state.index+1
            });
            this.scrollToBot();
        }
        this.scrollToBot();
    }

    render() {
        const username = "user";
        const { chats } = this.state;
        console.log(chats[this.state.index])
        return (
            <div className='overlay'>
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
                
                            <div>
                            <Lightbox
                                images={[this.state.image]}
                                isOpen={this.state.lightboxIsOpen}
                                onClose={()=> this.setState({lightboxIsOpen:false})}
                            />
                            </div>
                           <div>
                           <div>

                            <div>
                           
                            <div>
                                <img src={'https://assets.marthastewartweddings.com/styles/wmax-520-highdpi/d43/monica-alex-wedding-couple-032-6373505-0817/monica-alex-wedding-couple-032-6373505-0817_vert.jpg?itok=5VldsIvf'}
                                    style={{width:100,height:100,borderRadius:50}}
                                />
                            </div>
                           </div>
                            <div style={{alignSelf:'center',textAlign:'center'}}>
                               <p style={{color: 'rgb(74, 74, 74)',fontWeight: 'bold',fontSize:'12px'}}>TODAY&nbsp;•&nbsp; {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                            </div>
                           </div>
                           {
                               
                           chats.map((chat) => 

                            

                            <Delayed waitBeforeShow={0}>

                                <ReactCSSTransitionGroup 
                                transitionName="example"
                                transitionAppear={true}
                                transitionEnter={3000}
                                transitionEnterTimeout={5000}
                                transitionLeave={3000}
                                transitionLeaveTimeout={1000}
                                >
                                   
                                
                            <li className={`chat ${username === chat.username ? "right" : "left"}`} 
                                style={{
                                    borderTopLeftRadius:username === chat.username ? 10: 0,
                                    borderBottomLeftRadius:10,
                                    borderBottomRightRadius:10,
                                    borderTopRightRadius:username !== chat.username ? 10: 0,
                                    background: username === chat.username ? 
                                                                            chat.type!='image' ? 
                                                                                                'linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))' 
                                                                                             : 'none'
                                                                           : 
                                                                            chat.type!='image' ? 
                                                                                                'rgba(255, 255, 255, 0.8)' 
                                                                                               : 'none'
                                    }}>
                            <div style={{color:username !== chat.username ? '#4a4a4a':'#ffffff',justifyContent:'flex-start'}}>
                                <p style={{color:username !== chat.username ? '#4a4a4a':'#ffffff',justifyContent:'flex-start'}}> { chat.type!=='image' &&  chat.content} </p>
                            </div>
                            <div>
                             {
                              chat.type==='image' && <div style={{padding:5,paddingLeft:0,background:'none'}}> 
                                                        <img src={chat.image} 
                                                        style={{
                                                            height:'auto',
                                                            width:200,
                                                            background:chat.type==='image'? 'none':'rgba(255, 255, 255, 0.8)',
                                                            borderTopLeftRadius:username === chat.username ? 10: 0,
                                                            borderBottomLeftRadius:10,
                                                            borderBottomRightRadius:10,
                                                            borderTopRightRadius:username !== chat.username ? 10: 0,
                                                            background:'linear-gradient( #6741a3 #a3337c ))'
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

                            </li>
                            </ReactCSSTransitionGroup>
                            </Delayed>
                            )
                        }
                         </div>
                 

                </ul>
               <div className='footer'>
                <div className='buttonDiv'>
                    <button className='customButton' 
                        onClick={()=>this.sendMessage()}
                    >
                    BUTTON TEXT
                    {/* {   
                        chats.map((chat) =>
                        username!=='user' && <h4> {chat.content}</h4>
                        )
                    } */}
                    </button>
                </div>
                <form className="input"   onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" className='you' placeholder="Choose from above..." ref="msg" />
                    
                    <button type="submit" value="Submit" className="fa fa-send-o snt-btn" style={{background:'linear-gradient(to right bottom, rgba(38, 48, 78, 2), rgba(57, 74, 132,6 ))'}}>

                    </button>

                </form>
               
               
                </div>
            </div>
                
                
                {/* <div>
                
                    <button className='customButton' 
                        onClick={()=>this.sendMessage()}
                    >
                    {   
                        chats.map((chat) =>
                        username!=='user' && <h4> {chat.content}</h4>
                        )
                    }
                    </button>
                   
             
                </div> */}

            </div>
        );
    }
}

export default Chatroom;