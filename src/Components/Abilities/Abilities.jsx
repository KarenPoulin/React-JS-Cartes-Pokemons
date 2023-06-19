import React from 'react'
import './Abilities.css'
import Text from '../Text/Text'

const Abilities = (props) => {
    const classnames = ["abilities"];

    if (props.className) {classnames.push(props.className)};

    if (props.value === props.active) {classnames.push("red")};
  
    return (
    <Text className={classnames.join(" ")}>{props.children}</Text>
  )
}

export default Abilities