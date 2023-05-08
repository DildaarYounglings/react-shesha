import './App.css';
import React,{ useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import {Home} from "./pages/Home.js";
import { Recipes } from './pages/Recipes';
import {Pancake} from './pages/Pancake';
import { SendMessage } from './components/SendMessage';
import { Lessons } from './pages/Lessons';
import { LiveLessons } from './pages/LiveLessons';

function App() {
  //states
  const [messages, setMessages] = useState([])
  const [message,setMessage] = useState("");
  const [showNotification,setShowNotification] = useState(true);
  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [isDoneLoading,setIsDoneLoading] = useState("loading");
  const API_KEY = "0d226b2d19b6426dad13000aac1c2c16";
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/liveLessons" element={ <LiveLessons /> }/>
        <Route path="/lessons" element={ <Lessons /> } />
        <Route path="/sendmessage" element={ <SendMessage showNotification={showNotification} setShowNotification={setShowNotification} messages={messages} setMessages={setMessages} message={message} setMessage={setMessage}/> } />
        <Route path="/recipes" element={ <Recipes setIsDoneLoading={setIsDoneLoading} isDoneLoading={isDoneLoading} API_KEY={API_KEY} query={query} setQuery={setQuery} recipes={recipes} setRecipes={setRecipes} /> } />
        <Route path="/recipesMethods/Pancakes" element={ <Pancake /> } />
      </Routes>
    </div>
  );
}
export default App;
