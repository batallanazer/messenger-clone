import React, {useState, useEffect} from 'react';
import FlipMove from 'react-flip-move';
import './App.css';
import {  FormControl,Input  } from '@material-ui/core';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
function App() {
  //states
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  
  useEffect(()=>{
    db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    );
  },[]);


  useEffect(()=>{
    setUsername(prompt("Enter username"));
  },[]);

  //methods
  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      text:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
        <img alt="Messenger" src="https://scontent.fceb2-2.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=DdlM7eZ5XFoAX_NPSzF&_nc_ht=scontent.fceb2-2.fna&oh=ca5aa0eb511f8d4ffd30a7f5ba870338&oe=5F54BAB3"/>
        <h1>Hello Future React Developer</h1>
        <h2>Welcome {username}</h2>

        <form className="app__form">
          <FormControl className="app__formControl">
            <Input className="app__input" placeholder="Enter message..." value={input} onChange={e => setInput(e.target.value)}/>
            <IconButton className="app__iconButton" variant="contained" color="primary" type="submit" disabled={!input} onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>

        <FlipMove>
          {
            messages.map(message =>(
              <Message key={message.id} username={username} message={message.message}/>
            ))
          }
        </FlipMove>

    </div>
  );
}

export default App;
