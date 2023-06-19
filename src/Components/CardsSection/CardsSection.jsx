import React from 'react'
import { useState } from 'react'
import './CardsSection.css'
import Card from '../Card/Card'
import Title from '../Title/Title'
import Abilities from '../Abilities/Abilities'
import Image from '../Image/Image'
import Pikachu from '../../assets/500px-0025Pikachu.png'
import Charmander from '../../assets/500px-0004Charmander.png'
import Squirtle from '../../assets/500px-0007Squirtle.png'
import Bulbasaur from '../../assets/500px-0001Bulbasaur.png'
import Ninetales from '../../assets/500px-0038Ninetales.png'
import Oddish from '../../assets/500px-0043Oddish.png'
import Psyduck from '../../assets/500px-0054Psyduck.png'
import Growlithe from '../../assets/500px-0058Growlithe.png'
import Magnemite from '../../assets/500px-0081Magnemite.png'
import Jolteon from '../../assets/500px-0135Jolteon.png'

const No_Cards_Activated = 0;

const CardsSection = (props) => {
  const [active, setActive] = useState(No_Cards_Activated);
  console.log(active);

  const classnames = ["cardsSection"];
    if (props.className) {classnames.push(props.className)};

    const handleOnMouseEnter = (index) => {
      setActive(index);
      console.log(active);
    };

    const handleOnMouseLeave = () => {
      setActive(No_Cards_Activated);
    };

  return (
    <div className={classnames.join(" ")}> {props.children}
        <Card value={1}  onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="electric">
          <Title className="uppercase" as="h3">Pikachu</Title>
          <Image src={Pikachu} width="50%" height="auto" alt="Pikachu"></Image>
          <Abilities value={1} active={active}>Quick Attack</Abilities>
          <Abilities value={1} active={active}>Electro</Abilities>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="fire">
          <Title className="uppercase" as="h3">Charmander</Title>
          <Image src={Charmander} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="water">
          <Title className="uppercase" as="h3">Squirtle</Title>
          <Image src={Squirtle} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="grass">
          <Title className="uppercase" as="h3">Bulbasaur</Title>
          <Image src={Bulbasaur} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="electric">
          <Title className="uppercase" as="h3">Jolteon</Title>
          <Image src={Jolteon} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="fire">
          <Title className="uppercase" as="h3">Growlithe</Title>
          <Image src={Growlithe} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="water">
          <Title className="uppercase" as="h3">Psyduck</Title>
          <Image src={Psyduck} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="grass">
          <Title className="uppercase" as="h3">Oddish</Title>
          <Image src={Oddish} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="electric">
          <Title className="uppercase" as="h3">Magnemite</Title>
          <Image src={Magnemite} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
        <Card className="flexCol" borders="roundBorders" pokemonType="fire">
          <Title className="uppercase" as="h3">Ninetales</Title>
          <Image src={Ninetales} width="50%" height="auto" alt="Pikachu"></Image>
        </Card>
      </div>
  )
}

export default CardsSection