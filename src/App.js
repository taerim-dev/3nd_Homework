import logo from './logo.svg';
import './App.css';
import {getBalance, readCount, setCount} from './API/UseCaver' ;
import { useState } from 'react';
import QRCode from "qrcode.react";
import * as KlipAPI from "./API/UseKlip";

function onPressButton() {
  console.log('hi');
}

const DEFAULT_QR_CODE = "DEFAULT";
function App() {
  const [balance, setBalance] = useState("0");
  const [qrvalue, setQrvalue] = useState(DEFAULT_QR_CODE);
  // const onPressButton2 =()=>{
  //   setBalance('10');
  // }
    // getBalance('0x6ef7086c5bcefd76345ac78af26bcf34d7c6520f');
    // readCount();
    const onClickGetAddress = () => {
      KlipAPI.getAddress(setQrvalue);
    };

    const onClickSetCount = () => {
      KlipAPI.setCount(2000, setQrvalue);
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <button
          onClick={() => {
            onClickGetAddress();
          }}
        >
          주소 가져오기
        </button>
        <button
          onClick={() => {
            onClickSetCount();
          }}
        >
          카운트 값 변경
        </button>
        <br />
        <br />
        <br />
        <QRCode value={qrvalue} />
        <p>{balance}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;