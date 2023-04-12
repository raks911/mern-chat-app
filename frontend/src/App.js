
import './App.css';
import io from 'socket.io-client'
import {useState,useEffect} from 'react';
const socket=io.connect("http://localhost:3005");
function App() {
  const sendMessage = () => {
    socket.emit("send_message",{message :me});
  }
  const [me,setMe]=useState('...')
  const [mess,setMess]=useState('')

  useEffect(() =>{
    socket.on('recieve_message',(da) => {
      setMess(da.message);
    })
  },[socket])
  return ( 
    <div className="App">
      <div>
      <input onChange={ (e) => {
        setMe(e.target.value)
      }} placeholder="Message..."> 
      </input>
      <button onClick={sendMessage}>Send Message</button>
      </div>
      <div>
        <h3>Messages</h3>
        <div>{mess}</div>
      </div>
    </div>
  );
}

export default App;
