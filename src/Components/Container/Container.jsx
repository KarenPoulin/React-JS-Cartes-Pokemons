import React from 'react'
import './Container.css'

const Container = (props) => {
    const Component = props.as || "div";
    const classnames = ["container"];
    const asProps = ["div", "section", "ol", "ul", "figure"];
   
    if (props.className) {classnames.push(props.className)};

    if (props.as && !asProps.includes(props.as)) {
      throw new Error(
          `Invalid prop 'as' of value '${
              props.as
          }' supplied to 'Container', expected one of ${asProps.join(", ")}.`
      );
  }

  return (
    <Component className={classnames.join(' ')}>{props.children}</Component>
  )
}

export default Container