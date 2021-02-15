// import logo from './logo.svg'
import './App.css'
import TeamForm from './Form'
import React, { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  role: ''
}

export default function App() {
  const [ team, setTeam ] = useState([])
  const [ form, setForm ] = useState(initialForm)

  const update = (name, value) => {
    setForm({...form, [name]: value})
  }

  const submit = () => {
    setTeam([...team, form])
    setForm(initialForm)
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Team Form</h1>
        <TeamForm form={form} update={update} submit={submit} />
      </div>

      {team.map(member => {
        return (
          <div className='member'>
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        )
      })}

    </div>
  );
}
