import React from 'react';

export default function Wrapper(props) {
    return (
        <div className="Container">
          {props.children}  
        </div>
    )
}
