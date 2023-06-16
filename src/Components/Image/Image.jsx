import React from 'react'
import './Image.css'

const Image = (props) => {
    let loading = "lazy";
    const classnames = ["img"];

    if (props.className) {classnames.push(props.className)};
    if (props.loading) {loading = props.loading};

  return (
    <img className={classnames.join(" ")} src={props.src} alt={props.alt} width={props.width} height={props.height} loading={loading} />
  )
}

export default Image