import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import firebase from "firebase";
import db from "../firebase";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
      message: input,
      user: user,
    });

    setInput("");
  };
  return (
    <TChat>
      <ChatHeader channelName={channelName} />
      <Chat_messages>
        {messages.map((message, index) => {
          <Message
            key={index}
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />;
        })}
      </Chat_messages>
      <Chat_input>
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              channelName
                ? `Message #${channelName}`
                : "Please select a channel to send a message"
            }
            type="text"
            value={input}
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>
        <InputIcons>
          <CardGiftcardIcon />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </InputIcons>
      </Chat_input>
    </TChat>
  );
}

const TChat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.75;
  background-color: #363a3f;
  height: 100vh;
`;

const Chat_messages = styled.div`
  flex: 1;
`;
const Chat_input = styled.div`
color:lightgray;
display:flex;
align-items:center;
justify-content:space-between;
padding:15px;
border-radius:5px;
margin-20px;
border-top:1px solid gray;
background-color:#474b53;

form{
  flex:1;
  input{
    padding:15px;
    background:transparent;
    border:none;
    width:100%;
    overline-width:0;
    color:white;
    font-size:large;
    }
  button{
    display:none;
  }
}`;
const InputIcons = styled.div`
  .MuiSvgIcon-root {
    padding: 5px;
  }
`;

export default Chat;
