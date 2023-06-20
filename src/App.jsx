import { useState } from 'react'
import Container from './Components/Container/Container'
import './App.css'
import CardsSection from './Components/CardsSection/CardsSection'


function App() {
  

  return (
        <Container className="primaryContainer">
          <CardsSection className="flexRowCenter"></CardsSection>
        </Container>
  )
}

export default App
