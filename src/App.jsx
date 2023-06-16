import { useState } from 'react'
import './App.css'
import Container from './Components/Container/Container'
import Card from './Components/Card/Card'
import Image from './Components/Image/Image'
import Pikachu from './assets/500px-0025Pikachu.png'
import Title from './Components/Title/Title'


function App() {
  

  return (
    
      <Container className="flexRow">
        <Card className="flexCol" borders="roundBorders" pokemonType="electric">
          <Title className="uppercase" as="h3">Pikachu</Title>
          <Image src={Pikachu} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
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
