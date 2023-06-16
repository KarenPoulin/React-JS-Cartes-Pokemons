import React from 'react'
import './Title.css'
import Text from '../Text/Text'

const Title = (props) => {
    const classnames = ["title"];
    const asProps = ["h1", "h2", "h3", "h4", "h5", "h6"];

    if (props.className) {classnames.push(props.className)};


    if (props.as && !asProps.includes(props.as)) {
        throw new Error(
            `Invalid prop 'as' of value '${props.as}'supplied to 'Title', expected on of ${asProps.join(", ")}.`
        );
        }

  return (
    <Text className={classnames.join(" ")} as={props.as || "h1"}>{props.children}</Text>
  )
}

export default Title