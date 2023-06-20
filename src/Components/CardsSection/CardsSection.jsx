import React, { Component } from 'react'
import { useState } from 'react'
import './CardsSection.css'
import Card from '../Card/Card'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Container from '../Container/Container'
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
import Gyarados from '../../assets/500px-0130Gyarados.png'
import Exeggutor from '../../assets/500px-0103Exeggutor.png'

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
        <Card value={1} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="electric">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Pikachu</Title>
                <Text className="hp" as="h3">40HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Pikachu} width="66%" height="auto" alt="Pikachu"/>
                <Text as="figcaption">Mouse Pokemon. Length: 1' 4'', Weight: 13 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={1} active={active}>Gnaw</Abilities>
                <Abilities value={1} active={active}>10</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={1} active={active}>Thunder Jolt  
                    <Text className="abilityDesc" as="span"> Flip a coin. If tails, Pikachu does 10 damage to itself.</Text>
                </Abilities>
                <Abilities value={1} active={active}>30</Abilities>
            </Container>
        </Card>


        <Card value={2} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}  className="flexCol roundBorders" pokemonType="fire">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Charmander</Title>
                <Text className="hp" as="h3">50HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Charmander} width="66%" height="auto" alt="Charmander"/>
                <Text as="figcaption">Lizard Pokemon. Length: 2' 0'', Weight: 19 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={2} active={active}>Scratch</Abilities>
                <Abilities value={2} active={active}>10</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={2} active={active}>Ember 
                    <Text className="abilityDesc" as="span"> Discard 1 Fire Energy card attached to Charmander in order to use this attack.</Text>
                </Abilities>
                <Abilities value={2} active={active}>30</Abilities>
            </Container>
        </Card>


        <Card value={3} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="water">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Squirtle</Title>
                <Text className="hp" as="h3">40HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Squirtle} width="66%" height="auto" alt="Squirtle"/>
                <Text as="figcaption">Tiny Turtle Pokemon. Length: 1' 8'', Weight: 20 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={3} active={active}>Bubble
                    <Text className="abilityDesc" as="span"> Flip a coin. If heads, the Defending Pokemon is noe Paralyzed.</Text>
                </Abilities>
                <Abilities value={3} active={active}>10</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={3} active={active}>Withdraw
                    <Text className="abilityDesc" as="span"> Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen).</Text>
                </Abilities>
            </Container>
        </Card>


        <Card value={4} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="grass">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Bulbasaur</Title>
                <Text className="hp" as="h3">40HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Bulbasaur} width="66%" height="auto" alt="Bulbasaur"/>
                <Text as="figcaption">Seed Pokemon. Length: 2' 4'', Weight: 15 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={4} active={active}>Leech Seed
                    <Text className="abilityDesc" as="span"> Unless all damage from this attacks is prevented, you may remove 1 damage counter from Bulbasaur.</Text>
                </Abilities>
                <Abilities value={4} active={active}>20</Abilities>
            </Container>
        </Card>


        <Card value={5} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="electric">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Jolteon</Title>
                <Text className="hp" as="h3">70HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Jolteon} width="66%" height="auto" alt="Jolteon"/>
                <Text as="figcaption">Lightning Pokemon. Length: 2' 1'', Weight: 14 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={5} active={active}>Quick Attack
                    <Text className="abilityDesc" as="span"> Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage.</Text>
                </Abilities>
                <Abilities value={5} active={active}>10+</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={5} active={active}>Pin Missile
                    <Text className="abilityDesc" as="span"> Flip 4 coins. This attack does 20 damage times the number of heads.</Text>
                </Abilities>
                <Abilities value={5} active={active}>20x</Abilities>
            </Container>
        </Card>


        <Card value={6} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="fire">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Growlithe</Title>
                <Text className="hp" as="h3">70HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Growlithe} width="66%" height="auto" alt="Growlithe"/>
                <Text as="figcaption">Puppy Pokemon. Length: 2' 4'', Weight: 41.9 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={6} active={active}>Hind Kick
                    <Text className="abilityDesc" as="span"> Switch this Pokemon with 1 of your Benched Pokemon.</Text>
                </Abilities>
                <Abilities value={6} active={active}>10</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={6} active={active}>Flare</Abilities>
                <Abilities value={6} active={active}>20</Abilities>
            </Container>
        </Card>

        <Card value={7} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="water">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Psyduck</Title>
                <Text className="hp" as="h3">50HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Psyduck} width="66%" height="auto" alt="Psyduck"/>
                <Text as="figcaption">Duck Pokemon. Length: 2' 7'', Weight: 43 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={7} active={active}>Headache
                    <Text className="abilityDesc" as="span"> Your opponent can't play Trainer cards during his or her next turn.</Text>
                </Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={7} active={active}>Fury Swipes
                    <Text className="abilityDesc" as="span"> Flip 3 coins. This attack does 10 damage times the number of heads.</Text>
                </Abilities>
                <Abilities value={7} active={active}>10x</Abilities>
            </Container>
        </Card>


        <Card value={8} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="grass">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Oddish</Title>
                <Text className="hp" as="h3">50HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Oddish} width="66%" height="auto" alt="Oddish"/>
                <Text as="figcaption">Weed Pokemon. Length: 1' 4'', Weight: 12 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={8} active={active}>Stun Spore
                    <Text className="abilityDesc" as="span"> Flip a coin. If heads, the Defending Pokemon is now Paralyzed.</Text>
                </Abilities>
                <Abilities value={8} active={active}>10</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={8} active={active}>Sprout
                    <Text className="abilityDesc" as="span"> Search your deck for a Basic Pokemon named Oddish and put it onto your Bench. Shuffle your deck afterward (You can't use this attack if your Bench is full).</Text>
                </Abilities>
            </Container>
        </Card>


        <Card value={9} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="electric">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Magnemite</Title>
                <Text className="hp" as="h3">40HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Magnemite} width="66%" height="auto" alt="Magnemite"/>
                <Text as="figcaption">Magnet Pokemon. Length: 1' 0'', Weight: 13 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={9} active={active}>Thunder Wave
                    <Text className="abilityDesc" as="span"> Flip a coin. If heads, the Defending Pokemon is now Paralyzed.</Text>
                </Abilities>
                <Abilities value={9} active={active}>10</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={9} active={active}>Self-Destruct
                    <Text className="abilityDesc" as="span"> Does 10 damage to each Pokemon on each player's Bench (Don't apply Weakness and Resistance for Benched Pokemon). Magnemite does 40 damage to itself.</Text>
                </Abilities>
                <Abilities value={9} active={active}>40</Abilities>
            </Container>
        </Card>


        <Card value={10} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="fire">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Ninetales</Title>
                <Text className="hp" as="h3">100HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Ninetales} width="66%" height="auto" alt="Ninetales"/>
                <Text as="figcaption">Fox Pokemon. Length: 3' 2'', Weight: 43.9 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={10} active={active}>Lure
                    <Text className="abilityDesc" as="span"> Switch 1 of your opponent'S Benched Pokemon with his or her Active Pokemon. This new Active Pokemon can't retreat during your opponent's next turn.</Text>
                </Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={10} active={active}>Fire Blast
                    <Text className="abilityDesc" as="span"> Discard a Fire Energy attached to this Pokemon.</Text>
                </Abilities>
                <Abilities value={10} active={active}>120</Abilities>
            </Container>
        </Card>


        <Card value={11} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="water">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Gyarados</Title>
                <Text className="hp" as="h3">130HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Gyarados} width="66%" height="auto" alt="Psyduck"/>
                <Text as="figcaption">Atrocious Pokemon. Length: 2' 4'', Weight: 21.8 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={11} active={active}>Bubble Beam
                    <Text className="abilityDesc" as="span"> Flip a coin. If heads, your opponent'S Active Pokemon is now Paralyzed.</Text>
                </Abilities>
                <Abilities value={11} active={active}>50</Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={11} active={active}>Dragon Rage
                    <Text className="abilityDesc" as="span"> Flip 2 coins. If either of them is tails, this attack does nothin.</Text>
                </Abilities>
                <Abilities value={11} active={active}>180</Abilities>
            </Container>
        </Card>


        <Card value={12} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flexCol roundBorders" pokemonType="grass">
            <Container className="flexRow" as="div">
                <Title className="pokemonName" as="h3">Exeggutor</Title>
                <Text className="hp" as="h3">80HP</Text>
            </Container>
            <Container className="pokemonFigure" as="figure">
                <Image src={Exeggutor} width="66%" height="auto" alt="Oddish"/>
                <Text as="figcaption">Coconnut Pokemon. Length: 6' 7'', Weight: 265 lbs</Text>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={12} active={active}>Teleport
                    <Text className="abilityDesc" as="span"> Switch Exeggutor with 1 of your Benched Pokemon.</Text>
                </Abilities>
            </Container>
            <Container className="flexRow" as="div">
                <Abilities value={12} active={active}>Big Eggsplosion
                    <Text className="abilityDesc" as="span"> Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.</Text>
                </Abilities>
                <Abilities value={12} active={active}>20x</Abilities>
            </Container>
        </Card>
      </div>
  )
}

export default CardsSection