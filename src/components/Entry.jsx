import React from 'react'

export default function Entry(props) {
  const id = props.id;
  let displayDate = "";
  const year = props.dateVisited.slice(0, 4);
  const month = props.dateVisited.slice(5, 7);
  const day = props.dateVisited.slice(8, 10);

  switch (month) {
    case "01": 
      displayDate = "January ";
      break;
    case "02":
      displayDate = "February ";
      break;
    case "03":
      displayDate = "March ";
      break;
    case "04":
      displayDate = "April ";
      break;
    case "05":
      displayDate = "May ";
      break;
    case "06":
      displayDate = "June ";
      break;
    case "07":
      displayDate = "July ";
      break;
    case "08":
      displayDate = "August ";
      break;
    case "09":
      displayDate = "September ";
      break;
    case "10":
      displayDate = "October ";
      break;
    case "11":
      displayDate = "November ";
      break;
    case "12":
      displayDate = "December ";
      break;
  }

  displayDate += day + ", " + year;

  return (
    <div className='entry'>
      <h3>{props.name} <span>{props.isFavorite ? "❤️" : ""}</span></h3>
      <p>{props.location}</p>
      <p>Visited: {displayDate}</p>
      <p className='note'>{props.personalNote}</p>
      <button className='entry--button' onClick={() => props.openEditor(id)}>Edit</button>
      <button className='entry--button' onClick={() => props.deleteEntry(id)}>Delete</button>
    </div>
  )
}
