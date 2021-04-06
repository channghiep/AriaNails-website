import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
  Link
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import About from './components/about/about';
import Services from './components/services/services';
import Booking from './components/booking/booking';
import GalleryDiv from './components/gallery/gallery';
import Loading from './components/lottie/loading'

function App () {

  // fake authentication Promise
  // authenticate() {
  //   return new Promise(resolve => setTimeout(resolve, 1000)) // 1 second
  // }

  // componentDidMount() {
  //   this.authenticate().then(() => {
  //     const ele = document.getElementById('ipl-progress-indicator')
  //     if(ele) {
  //       // fade out
  //       ele.classList.add('finish')
  //       setTimeout(() => {
  //         // remove from DOM
  //         ele.outerHTML = ''
  //       }, 500)
  //     }
  //   })
  // }

  // render() {
    const [loading, setLoading] = useState(true)
    // function Loading(){
     
    //   return(
    //     <div id="ipl-progress-indicator" class="preload-wrapper">
    //     <div class="preload-item">
    //       <script src="./lottie-player.js"></script>
    //       <lottie-player src="./arianails-preload.json" background="#FFF" loop autoplay></lottie-player>
    //     </div>
    //   </div>
    //   )
    // }
    setTimeout(()=>{
      setLoading(false)
    },1000)

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {loading ? <Loading/> :   
          <Router>
            <div className="mainBody">
              <Navbar/>
              <Carousel/>
              <About/>
              <Services/>
              <Booking/>
              <GalleryDiv/>
            </div>
        
          </Router>
        }
      
      </div>
    );
  }

// }

export default App;
