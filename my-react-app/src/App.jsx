import React from "react";
import Todo from "./Todo";
import UseStateCounter from "./UseStateCounter";
import Friends from "./Friends";
import UseRefHookPractice from "./useRefHookPractice";
import TeamUseState from "./TeamUseState";

export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Developer 
        name={`Deba Dip Bhowmik`} // passing props 
        age={26} // passing props
      ></Developer>
      <Todo
        task='Learn React' isDone={false}
      ></Todo>
      <Todo
        task='Ekhon ghumabo' isDone={true}
      ></Todo>
      <Todo
        task='React Docs Porbo' isDone={false}
      ></Todo>
      <UseStateCounter></UseStateCounter>
      
      <TeamUseState></TeamUseState>

      <Friends></Friends>

      <UseRefHookPractice></UseRefHookPractice>
    </>
  )
}

function Developer(props) { // props
  console.log(props);
  console.log(typeof props);
  return (
    <>
      <h2>I am developer</h2>
      <p>My Name is : {props.name}</p>
      <p>I am {props.age} years old</p>
    </>
  )
}