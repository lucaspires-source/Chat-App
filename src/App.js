import React from "react";
import { ChatEngine} from "react-chat-engine";
import secret from './secret'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import "./App.css";

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />;
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
