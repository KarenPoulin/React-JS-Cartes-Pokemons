import React from 'react'
import './Text.css'

const Text = (props) => {
    const Component = props.as || "p";
    const classnames = ["text"];
    const asProps =["p", "span", "div", "strong", "em", "small", "s", "figcaption", "h1", "h2", "h3", "h4", "h5", "h6", "li"];

    if (props.className) {classnames.push(props.className)};

    if (props.as && !asProps.includes(props.as)) {
      throw new Error(
          `Invalid prop 'as' of value '${
              props.as
          }' supplied to 'Text', expected one of ${asProps.join(", ")}.`
      );
  }

  return (
    <Component className={classnames.join(" ")}>{props.children}</Component>
  )
}

export default Text