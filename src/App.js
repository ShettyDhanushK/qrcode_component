import React from 'react';
import qr from './assets/qr.png';
import './styles.css';
const App = () => {
  return (
    <div className='app'>
      <div className='app__card'>
        <img src={qr} alt="qrcode" />
        <h3>Improve your front-end <br/>skills by building projects</h3>
        <p>Scan the QR code to visit Frontend <br/>Mentor and take your coding skills to<br /> the next level</p>
      </div>
    </div>
  )
}

export default App