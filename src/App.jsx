import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors=[
    'Sakib','Josim','Rubel','Niso'
   ]  
   const books=[
    {id:1, name:'Bangla', price:200},
    {id:4, name:'Math', price:250 },
    {id:3, name:'English', price:300 },
    {id:4, name:'Accounting', price:400},
    {id:5, name:'ICT', price:100 }
   ]
  const singers=[
    {id:1, name:'Pritom',age:30 },
    {id:2, name:'Asif',age:40 },
    {id:3, name:'Rony',age:20 },
    {id:4, name:'Rokib',age:80 },
    {id:4, name:'Rana',age:60 }
  ]
  return (
    <>
      
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>
      <Actor name={'Hasan Ali'}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {
        singers.map(singer =><Singer singer={singer}></Singer>)
      }
      
      {/* <Todo 
        task='Learn React' 
        isDone={true}>
      </Todo>
      <Todo
        task='Explore Concepts React'
        isDone={false}>
      </Todo>
      <Todo
       task='Try Concepts React'
       isDone={true}>
      </Todo> */}
      {/* <Device name='Laptop' Price='55000' Brand='Samsung'></Device>
      <Device name='Mobile' Price='20000' Brand='Nokia'></Device>
      <Device name='Watch' Price='2000' Brand='Apple'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade='12' score='85'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props){
  console.log(props);
  return(
    <div>
      <h3>This is Device: {props.name}, Price: {props.Price}, Brand: {props.Brand}.</h3>
    </div>
  )
}
function Person(){
  const money =25;
  const age=25;
  const person={name:'sakib',age:15}
  return <h3>I am {person.name} a Person with age:{age+money}</h3>
}
const {grade,Score}={grade:'7',Score:'99'};
function Student({grade=1,score=0}){
  return(
   <div className='student'>  
    <h3>This is a student</h3>
    <h2>grade: {grade}</h2>                      
    <p>Score: {score}</p>
  </div>
  )
}
function Developer(){
  const developerStyles={
    border:'2px solid red',
    margin:'20px',
    padding:'20px',
    borderRadius:'10px'
  }
      return(
        <div style={developerStyles}>
          <h4>This is Developer</h4>
          <h3>Codding:HTML, CSS</h3>
        </div>
      )
}
export default App
