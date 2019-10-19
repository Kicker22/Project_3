import React from 'react'
import Container from "react-bootstrap"

export default function Container(props) {
    return (
        <div className="container">
          {props.children}  
        </div>
    )
}
