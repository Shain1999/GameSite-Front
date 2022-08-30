import React from 'react'
import "./title.scss"
export interface Title{
    name:string
}
const Title = (props:Title) => {
  return (
    <div className="title"> <h1>{props.name}</h1></div>
    )
}

export default Title