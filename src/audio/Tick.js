//import liraries
import React, { Component } from 'react';

class Tick extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //   play: true
        // }
        this.playPromise=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
    }

  
    render() {
      return [this.playPromise.play()];
    }
  }
  export default Tick;