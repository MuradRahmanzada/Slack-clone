import React, { useState } from "react";
import "./ChatInput.css";
import db from "../Firebase/Firebase";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(typeof channelName);
    console.log(typeof channelId);
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
