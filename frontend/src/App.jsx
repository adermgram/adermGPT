  import axios from "axios";
  import { useState, useEffect } from "react";


  function App() {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);

    function createNewChat() {
      setMessage(null);
      setValue('');
      setCurrentTitle(null);
    }

    function handleClick(uniqueTitle){
      setCurrentTitle(uniqueTitle);
      setMessage('');
      setValue('');
    }

    async function getMessages() {
      try {
        const response = await axios.post('http://localhost:3000/chat', { prompt: value });
        const data = response.data.response;
        setMessage(data);
        console.log(data)
      } catch (err) {
        console.error(err);
      }
    }

    useEffect(() => {
      if(!currentTitle && value && message){
        setCurrentTitle(value);
      }
      if (currentTitle && value && message) {
        setPreviousChats(previousChats => [
            ...previousChats, 
          {
              title: currentTitle,
              role: "user",
              content : value
          },
          {
            title: currentTitle,
            role: "assistant",
            content: message,
          }
      ]);
      }
    }, [message, currentTitle]);

    const currentChat = previousChats.filter((previousChat => previousChat.title === currentTitle));

    const uniqueTitles = Array.from(new Set(previousChats.map(previousChatChat => previousChatChat.title)));    

    return (
      <div className="app">
        <section className="side-bar">
          <button onClick={createNewChat}>+ New chat</button>
          <ul className="history">
            {uniqueTitles?.map((uniqueTitle, index) => <li key={index} onClick={()=>handleClick(uniqueTitle)}>{uniqueTitle}</li>) }
          </ul>
          <nav>
            <p>Made by Adam</p>
          </nav>
        </section>

        <section className="main">
          {!currentTitle ? <h1>AdermGPT</h1>:
            <ul className="feed">
            {currentChat?.map((chatMessage, index) => <li key={index}>
                <p className="role">{chatMessage.role}</p>
                <p>{chatMessage.content}</p>
              </li>)}
          </ul> }
          <div className="bottom-section">
            <div className="input-container">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div id="submit" onClick={getMessages}>
                ➢
              </div>
            </div>
            <p className="info">
              AdermGPT can make mistakes. Check important info.
            </p>
          </div>
        </section>
      </div>
    );
  }

  export default App;
