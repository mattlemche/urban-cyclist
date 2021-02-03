import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/type-on-uc-data.json';

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <h1>Lottie</h1>
        <p>Base animation free from external manipulation</p>
        <Lottie options={defaultOptions}
              height={500}
              width={600}
        />
      </div>
    )
  }
}

export default UncontrolledLottie