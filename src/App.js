import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [hero,setHero] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setHero(data))


  },[])
 // const hero = [{name: 'Anik',age:4},{name:'Shakawat', age:3},{name: 'Nayem',age:2},{name:'limon',age:2},{name:'Hridoy',age:1}]
  //const age = ['4','3','2','5']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        hero.map(heros => <Hero name={heros.name} key={heros.id} age={heros.age}></Hero>)
      }
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Anik</h1>
        
      </header>
    </div>
  );
}
function MovieCounter(){
 const [count , setCount]= useState(0)
 //console.log(count, setCount)
 const handleClick =()=>setCount(count+1);
 
  
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      
      <h4>Number of Movies:{count} </h4>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return(
    <div>
      <h4>Movies I have acted:{props.movies} </h4>
    </div>
  )
}


function Hero(props){
  //console.log(props.name)
 // console.log(props.age)
  return(
    <div style={{border:'2px solid red', margin:'20px'}}>
      <h1>Programing Hero-{props.name}</h1>
      <h3>I am learning Python from {props.age || 1} yaers</h3>
    </div>
  )

}
export default App;
