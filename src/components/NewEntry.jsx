import {React, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export default function NewEntry(props) {

  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [dateVisited, setDateVisited] = useState('');
  const [personalNote, setPersonalNote] = useState('');
  const [initializeFavorite, setInitializeFavorite] = useState(false);

  function updateInitializeFavorite () {
    setInitializeFavorite(!initializeFavorite);
  }

  const newEntry = {
    name: businessName,
    location: location,
    dateVisited: dateVisited,
    isFavorite: initializeFavorite,
    personalNote: personalNote,
    id: uuidv4()
  }
  
  
  return (
    <div className='new--entry'>
      <h2>Add New Business</h2>
      <form onSubmit={(e) => {
        props.addEntry(e, newEntry);
        setBusinessName("");
        setInitializeFavorite(false);
        setPersonalNote("");
        setDateVisited("");
        setLocation("");
      }}>
        <label for='name'>Business Name *</label>
        <input 
        required
        id='name'
        type='text' 
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        />        
        <label for='location'>Location *</label>         
        <input 
        required
        id='location'
        type='text' 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />        
        <label for='date'>Date Visited *</label>          
        <input 
        required
        id='date'
        type='date' 
        value={dateVisited}
        onChange={(e) => setDateVisited(e.target.value)}
        />            
        <label for='note'>Personal Note *</label>          
        <textarea 
        required
        id='note'
        type='text' 
        value={personalNote}
        onChange={(e) => setPersonalNote(e.target.value)}
        placeholder='How was your experience in regards to the safety and comfort of your service dog?'
        />
        <div className='favorite--container' >      
          <input 
          type='checkbox'
          id='fav'
          className='checkbox' 
          checked={initializeFavorite}
          onChange={updateInitializeFavorite}
          />   
          <label for='fav'>Favorite</label>
        </div>       
        <br/>
        <input type='submit' className='submit--button'/>
        <button onClick={(e) => {
        e.preventDefault();
        setBusinessName("");
        setInitializeFavorite(false);
        setPersonalNote("");
        setDateVisited(null);
        setLocation("");}} className='clear--button'>Clear</button>
      </form>
    </div>
  )
}
