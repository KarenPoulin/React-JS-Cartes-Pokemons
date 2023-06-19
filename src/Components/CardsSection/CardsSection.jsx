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

  const classnames = ["cardsSection"];
    if (props.className) {classnames.push(props.className)};

    const handleOnMouseEnter = (index) => {
      setActive(index);
    };

    const handleOnMouseLeave = () => {
      setActive(No_Cards_Activated);
    };

  return (
    <div className={classnames.join(" ")}> {props.children}
        <Card value={1} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="electric">
          <Title className="uppercase" as="h3">Pikachu</Title>
          <Image src={Pikachu} width="50%" height="auto" alt="Pikachu"></Image>
          <Abilities value={1} active={active}>Gnaw</Abilities>
          <Abilities value={1} active={active}>Thunder Jolt</Abilities>
        </Card>
        <Card value={2} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}  className="flexCol" borders="roundBorders" pokemonType="fire">
          <Title className="uppercase" as="h3">Charmander</Title>
          <Image src={Charmander} width="50%" height="auto" alt="Charmander"></Image>
          <Abilities value={2} active={active}>Scratch</Abilities>
          <Abilities value={2} active={active}>Ember</Abilities>
        </Card>
        <Card value={3} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="water">
          <Title className="uppercase" as="h3">Squirtle</Title>
          <Image src={Squirtle} width="50%" height="auto" alt="Squirtle"></Image>
          <Abilities value={3} active={active}>Bubble</Abilities>
          <Abilities value={3} active={active}>Aqua Tail</Abilities>
        </Card>
        <Card value={4} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="grass">
          <Title className="uppercase" as="h3">Bulbasaur</Title>
          <Image src={Bulbasaur} width="50%" height="auto" alt="Bulbasaur"></Image>
          <Abilities value={4} active={active}>Growth</Abilities>
          <Abilities value={4} active={active}>Razor Leaf</Abilities>
        </Card>
        <Card value={5} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="electric">
          <Title className="uppercase" as="h3">Jolteon</Title>
          <Image src={Jolteon} width="50%" height="auto" alt="Jolteon"></Image>
          <Abilities value={5} active={active}>Speed Cheer</Abilities>
          <Abilities value={5} active={active}>Head Bolt</Abilities>
        </Card>
        <Card value={6} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="fire">
          <Title className="uppercase" as="h3">Growlithe</Title>
          <Image src={Growlithe} width="50%" height="auto" alt="Growlithe"></Image>
          <Abilities value={6} active={active}>Hind Kick</Abilities>
          <Abilities value={6} active={active}>Flare</Abilities>
        </Card>
        <Card value={7} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="water">
          <Title className="uppercase" as="h3">Psyduck</Title>
          <Image src={Psyduck} width="50%" height="auto" alt="Psyduck"></Image>
          <Abilities value={7} active={active}>Bubble</Abilities>
          <Abilities value={7} active={active}>Confuse Ray</Abilities>
        </Card>
        <Card value={8} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="grass">
          <Title className="uppercase" as="h3">Oddish</Title>
          <Image src={Oddish} width="50%" height="auto" alt="Oddish"></Image>
          <Abilities value={8} active={active}>Stun Spore</Abilities>
          <Abilities value={8} active={active}>Seed Bomb</Abilities>
        </Card>
        <Card value={9} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="electric">
          <Title className="uppercase" as="h3">Magnemite</Title>
          <Image src={Magnemite} width="50%" height="auto" alt="Magnemite"></Image>
          <Abilities value={9} active={active}>Thunder Wave</Abilities>
          <Abilities value={9} active={active}>Self-Destruct</Abilities>
        </Card>
        <Card value={10} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol" borders="roundBorders" pokemonType="fire">
          <Title className="uppercase" as="h3">Ninetales</Title>
          <Image src={Ninetales} width="50%" height="auto" alt="Ninetales"></Image>
          <Abilities value={10} active={active}>Lure</Abilities>
          <Abilities value={10} active={active}>Fire Blast</Abilities>
        </Card>
      </div>
  )
}

export default CardsSection