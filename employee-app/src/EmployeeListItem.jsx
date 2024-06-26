import React from 'react'

function EmployeeListItem(props) {
    // destructure props to access data 
    const { imgUrl, name, position } = props 
  return (
    <div>
        <img src={imgUrl} alt={name} />
        <h2>{name}</h2>
        <p>{position}</p>
    </div>
  )
}

export default EmployeeListItem