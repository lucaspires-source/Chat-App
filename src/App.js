import React from "react";
import { ChatEngine} from "react-chat-engine";
import secret from './secret'
import ChatFeed from './components/ChatFeed'
import "./App.css";
const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID={secret.projectID}
      userName={secret.user}
      userSecret={secret.senha}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
};

export default App;
