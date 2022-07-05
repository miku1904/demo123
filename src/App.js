import './App.css';
import Name from './comp/Name';
import Email from './comp/Email';
import Output from './comp/Output';
import PhoneNo from './comp/PhoneNo';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("shakti")
  const [phoneNo,setPhoneNo] = useState("")
  return (
    <div className="App container">
      <Name name={name} setName={setName}></Name>
      <Email email={email} setEmail={setEmail}></Email>
      <PhoneNo phoneNo={phoneNo} setPhoneNo={setPhoneNo}></PhoneNo>
      <Output name={name} email={email} phoneNo={phoneNo}></Output>
    </div>
  );
}

export default App;
