import { React, useState } from "react";


export default function EditEntry(props) {
    if (props.editorOpen) {
        const [editBusinessName, setEditBusinessName] = useState(props.entryToEdit.name);
        const [editLocation, setEditLocation] = useState(props.entryToEdit.location);
        const [editDateVisited, setEditDateVisited] = useState(props.entryToEdit.dateVisited);
        const [editPersonalNote, setEditPersonalNote] = useState(props.entryToEdit.personalNote);
        const [editFavorite, setEditFavorite] = useState(props.entryToEdit.isFavorite);
        const entryId = props.entryToEdit.id;
        
        function updateEditFavorite () {
        setEditFavorite(!editFavorite);
        }
    
        const editedEntry = {
        name: editBusinessName,
        location: editLocation,
        dateVisited: editDateVisited,
        isFavorite: editFavorite,
        personalNote: editPersonalNote,
        id: entryId
        }
    
    
        return (
            <div className='edit--entry'>
                <div className="edit-form-background" onKeyDown={(e) => {props.escape(e)}}>       
                    <form onSubmit={(e) => {
                        props.closeEditor(e, editedEntry);          
                        }}>
                        <label for='edit-name'>Business Name</label>
                        <input 
                        autoFocus
                        required
                        id="edit-name"
                        type='text' 
                        value={editBusinessName}                
                        onChange={(e) => setEditBusinessName(e.target.value)}
                        />        
                        <label for='edit-location'>Location</label>         
                        <input 
                        required
                        type='text' 
                        id="edit-location"
                        value={editLocation}
                        onChange={(e) => setEditLocation(e.target.value)}
                        />        
                        <label for='edit-date'>Date Visited</label>          
                        <input 
                        required
                        id="edit-date"
                        type='date' 
                        value={editDateVisited}
                        onChange={(e) => setEditDateVisited(e.target.value)}
                        />            
                        <label for='edit-note'>Personal Note</label>          
                        <textarea 
                        required
                        id="edit-note"
                        type='text' 
                        value={editPersonalNote}
                        onChange={(e) => setEditPersonalNote(e.target.value)}
                        />
                        <div className='favorite--container' >      
                            <input 
                            id="edit-fav"
                            type='checkbox'
                            className='checkbox' 
                            checked={editFavorite}
                            onChange={updateEditFavorite}
                            />   
                            <label for='edit-fav'>Favorite</label>
                        </div>       
                        <br/>
                        <input type='submit' className='save--button' value='Save' tabIndex={0}/>
                        <button onClick={props.cancelEdit} className="cancel-edit" tabIndex={0}>Cancel</button>
                    </form>
                    
              </div> 
            </div>
          )
    }
    
    
}
