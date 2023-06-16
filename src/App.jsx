import { useState } from 'react'
import './App.css'
import Container from './Components/Container/Container'
import Card from './Components/Card/Card'


function App() {
  

  return (
    
      <Container className="flexRow">
        <Card className="flexCol" borders="roundBorders" pokemonType="electric"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="fire"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="water"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="grass"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="electric"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="fire"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="water"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="grass"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="electric"></Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="fire"></Card>
      </Container>
  )
}

export default App
