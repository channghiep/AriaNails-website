import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './arianails-preload.json'

class Loading extends Component {
    
    render(){

        const defaultOptions = {
            speed:"3.5",
            loop: true,
            autoplay: true,
            animationData: animationData,
            redererSetting: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return(
            <div className="preload-wrapper">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        )
    }
}

export default Loading