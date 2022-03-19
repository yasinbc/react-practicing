import './App.css';
import React,{useState, useEffect} from 'react';

import RouterLink from './components/Router';
import RepasandoUseEffect from './components/RepasandoUseEffect';
import UseEffect2 from './components/UseEffect2'
import ContactCard from './components/ContactCard';


function App() {
  // const contacts = [
  //   {name:"Mamue", email:"mamue@mamuelillo.com", age:"4"},
  //   {name:"Sandro", email:"San@mamuelillo.com", age:"14"},
  //   {name:"Ruperto", email:"Rup@mamuelillo.com", age:"24"},
  //   {name:"Nando", email:"Nan@mamuelillo.com", age:"44"}
  // ]
  const arr = () => {
    return []
  }
  const [results, setResults] = useState(() => arr())
  
  useEffect(() =>{
    fetch("https://randomuser.me/api/?results=5").then(response => response.json())
    .then(data => {
      console.log(data)
      setResults(data.results)
    }, [results])
  })
  
  return (
    <div className="container mt-3">
      {results.map((result, index)=>{
        return(
          <ContactCard key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        )
      })}
      {/* <hr/>
      <RouterLink />
      <hr/>
      <UseEffect2 />
      <hr/>
      <RepasandoUseEffect />
      <hr/> */}
    </div>
  );
}

export default App;