
import { useState } from 'react';
import './App.css'
import EmployeeCard from './components/EmployeeCard'

const sampleEmployee = {
  name: {
    first: "Jean",
    last: "VALJEAN",
  },
  email: "pikapika@joumail.pt",
  picture:{
    large: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
}

function App() {

  const [employee, setEmployee] =useState(sampleEmployee);

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
    .then((response)=> response.json())
    .then((data)=> {
      console.log(data)
      setEmployee(data.results[0]);
    });
  };

  return (
    <>
    <EmployeeCard employee = {employee} />
      <button type='button' onClick={getEmployee}>Get employee</button>
    </>
  )
}

export default App
