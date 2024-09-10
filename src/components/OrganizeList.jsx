import React from 'react'

export default function OrganizeList(props) {

  let dateButton, nameButton = "";

  if (props.sortBy === "date") {
    dateButton = 'sort--button selected';
    nameButton = 'sort--button';
  }
  if (props.sortBy === "name") {
    dateButton = 'sort--button';
    nameButton = 'sort--button selected';
  }
  
  const filterButton = props.filterFavorites ? "filter--button selected" : "filter--button";
  
  if (props.data.length === 0) {
    return null;
  }
  return (
    <div className='nav--background'>
      <h2>My Businesses</h2>
      <div className='nav'>
        <div className='sort' >
          <p>Sort By:</p>
          <button className={dateButton} onClick={props.changeSort}>Date Visited</button>
          <button className={nameButton} onClick={props.changeSort}>Business Name</button>
        </div>
        <div className='filter'>
          <p>Filter By:</p>
          <button className={filterButton} onClick={props.toggleFilterFavorites}>Favorites ❤️</button>
        </div>
      </div>
    </div>
  )
}
