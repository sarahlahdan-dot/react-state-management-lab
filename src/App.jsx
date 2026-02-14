import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]

  )

  function handleAddFighter (zombieFighter){
    const newFighter = team.filter((fighter)=> fighter.id === zombieFighter.id)
    if (newFighter.length === 0 && money >= zombieFighter.price){
      setZombieFighters(zombieFighters.filter((dude)=> dude.id !== zombieFighter.id))
      setTeam([...team,zombieFighter])
      setMoney(money-zombieFighter.price)
    } else {
      alert("Fighter cannot be added to team!")
    }
  }


   function handleRemoveFighter(zombieFighter) {
    const filteredTeam = team.filter((member) => member.id !== zombieFighter.id)
    setTeam(filteredTeam)
    setZombieFighters([...zombieFighters, zombieFighter])
    setMoney(money + zombieFighter.price)
} 

 const totalStrength = team.reduce((sum, m) => sum + m.strength, 0)
  const totalagility = team.reduce((sum, m) => sum + m.agility, 0)

  return (
    <>
    {zombieFighters.map((zombieFighter)=>
      <div key={zombieFighter.id}>
        <img src={zombieFighter.img} alt={zombieFighter.name} />
        <h1>Name: {zombieFighter.name}</h1>
        <p>Strength: {zombieFighter.strength}</p>
        <p>Price: {zombieFighter.price}</p>
        <p>Agility: {zombieFighter.agility}</p>
        
        <button onClick={()=> handleAddFighter (zombieFighter) }>Add Zombie fighter</button>

      </div>

    )}

    <h2>My Team</h2>
    {team.length === 0 ? <p>Pick some team members!</p> : team.map((dude)=>
          <div key={dude.id}>
          <h2>{dude.name}</h2>
          <img src={dude.img} alt={dude.name} />
          <p>Strength: {dude.strength}</p>
          <p>Agility: {dude.agility}</p>
          <button onClick={() => handleRemoveFighter(dude)}>Remove from your Team</button>  
          </div>
      )}
      
    </>
  )}


export default App
