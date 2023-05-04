import React,{useRef} from 'react';
//import { ArrayComponent } from './ArrayComponent';
//import { UpdateEffectComponent } from './UpdateEffectComponent';
export const TopNav = () => {
  const displayRef = useRef()
  return (
    <nav className="TopNav">
        <img className="TopNav_logo" src={"images/shesha_logo.png"} alt=""/>
        <a className='TopNav_a' href="/">Home</a>
        <a className='TopNav_a' href="/Lessons">Lessons</a>
        <a className='TopNav_a' href="/LiveLessons">Live lessons</a>
        <a className='TopNav_a' href="/SearchIngredients">Ingredients</a>
        <div ref={displayRef}>
        </div> 
        <button className="search_icon" type="button" onClick={function(){
          const inputTypeText = document.createElement("input");
          inputTypeText.type = "text";
          displayRef.current.appendChild(inputTypeText);

          inputTypeText.click();}}><img src={"images/search_icon.png"} className="logo" alt=""/></button>
        <a className="">
          <button
          className="logIn"
          onClick={function(){const a = document.createElement("a");a.href = "/";a.click();a.remove();}}>Log In</button>
        </a>
    </nav>
  )
}
