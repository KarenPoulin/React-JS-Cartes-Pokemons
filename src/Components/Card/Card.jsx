import React from 'react'
import './Card.css'

const Card = (props) => {
    const classnames = ["card"];

    if (props.className) {classnames.push(props.className)};

    if (props.pokemonType) {classnames.push(props.pokemonType)}

    if (props.borders) {classnames.push(props.borders)}

  return (
    <div className={classnames.join(" ")}>{props.children}</div>
  )
}

export default Card