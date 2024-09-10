import React from 'react'
import Entry from './Entry'

export default function EntryList(props) {
  let displayData = [];
  let entries;

  function compareAlpha(a,b) {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
    return 0;
  }

  function compareDate(a,b) {
    const date1 = new Date(a.dateVisited);
    const date2 = new Date(b.dateVisited);

    return date2 - date1;
  }

  if (props.sortBy === "date") {
    displayData = props.data.sort(compareDate);
  }
  if (props.sortBy === "name") {
    displayData = props.data.sort(compareAlpha);
  }
  
  if (props.filterFavorites) {
    entries = displayData.filter((each) => each.isFavorite).map(
      entry => {
        return (
          <Entry 
          name={entry.name}
          location={entry.location}
          dateVisited={entry.dateVisited}
          isFavorite={entry.isFavorite}
          personalNote={entry.personalNote}
          id={entry.id}
          key={entry.id}
          deleteEntry={props.deleteEntry}
          openEditor={props.openEditor}
          />
        )
      }
    )
  } else {
    entries = displayData.map(
      entry => {
        return (
          <Entry 
          name={entry.name}
          location={entry.location}
          dateVisited={entry.dateVisited}
          isFavorite={entry.isFavorite}
          personalNote={entry.personalNote}
          id={entry.id}
          key={entry.id}
          deleteEntry={props.deleteEntry}
          openEditor={props.openEditor}
          />
        )
      }
    )
  }
  
  if (props.data.length === 0) {
    return null;
  }
  return (
    <div className='entry--list-background'>
      <div className='entry--list'>
        {entries}
      </div>
    </div>
  )
}
