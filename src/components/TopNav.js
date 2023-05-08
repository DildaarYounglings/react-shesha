import React,{useRef,useState} from 'react';
import {NavLink} from 'react-router-dom';

export const TopNav = () => {
  const navigation = [
    {name:'Home',href:'/'},
    {name:'Lessons',href:'/lessons'},
    {name:'Live Lessons',href:'/liveLessons'},
    {name:'Ingredients',href:'/ingredient'},
  ]

  return (
    <nav className="TopNav">
        <img className="TopNav_logo" src={"images/shesha_logo.png"} alt=""/>
        {navigation.map((item)=>(
          <NavLink key={item.name} to={item.href} className={ ({isActive}) => {return `TopNav_a ${isActive? 'TopNav_a active': ''}`}}>{item.name}</NavLink>
        ))}
        <button className="search_icon" type="button"><img src={"images/search_icon.png"} className="logo" alt=""/></button>
        <a className="">
          <button
          className="logIn"
          onClick={function(){const a = document.createElement("a");a.href = "/";a.click();a.remove();}}>Log In</button>
        </a>
    </nav>
  )
}
