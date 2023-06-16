import React from 'react'
import './Text.css'

const Text = (props) => {
    const Component = props.as || "p";
    const classnames = ["text"];

    if (props.className) {classnames.push(props.className)}

  return (
    <Component className={classnames.join(" ")}>{props.children}</Component>
  )
}

export default Text