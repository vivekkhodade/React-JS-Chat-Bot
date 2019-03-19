import React, { Component } from 'react';
import './App.css';
// import Calender from './Calender'
import Splash from './Splash'
// import Calender from './Calender.js';
// import Typing from './Typing';
import Chat from './Chat';
import { Cube } from 'react-preloaders';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      // preloader:true,
      loading:true
    }
  }
  componentDidMount(){

      this.timer= setTimeout(()=>{
        this.setState({
          loading:false
        });
      },5000)
  }
  // _onLoad = ()=>{
  //   this.timer= setTimeout(()=>{
  //     this.setState({
  //       loading:false
  //     });
  //   },10000)
  // }
  render() {
      console.log('state of App.js',this.state);
    return (
      <React.Fragment>
      <Cube
          color={'#FFD700'} //Default #2D2D2D
          bgColor={'#fff'} //Default #F7F7F7
          time={2400} //Default #1300
      />
          <div className="App">
          {
            this.state.loading ? 
          <div 
              style={{background:'white'}}
          >
            <Splash/>

          </div>
          :
          <div className="App">
            <Chat />
          </div>
          
          }
          </div>
      </React.Fragment>
    );
  }
}

export default App;
