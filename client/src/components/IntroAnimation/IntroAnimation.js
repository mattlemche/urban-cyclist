import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../assets/animations/type-on-uc-data.json';

export default function IntroAnimation({animClass, onDivClick}) {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <div className={animClass} onClick={onDivClick}>
      <Lottie options={defaultOptions}
            height={80}
            // width={600}
      />
    </div>
  )

};