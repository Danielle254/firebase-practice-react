import './App.css'
import {React, useEffect, useState}  from 'react'
import Banner from './components/Banner'
import NewEntry from './components/NewEntry'
import OrganizeList from './components/OrganizeList'
import EntryList from './components/EntryList'
import Footer from './components/Footer'
import EditEntry from './components/EditEntry'
import {onSnapshot, addDoc, doc, deleteDoc, setDoc } from 'firebase/firestore'
import { entriesCollection, database } from './firebase'

function App() {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(() => JSON.parse(localStorage.getItem('SDAT_sort')) || "date");  
  const [filterFavorites, setFilterFavorites] = useState(JSON.parse(localStorage.getItem('SDAT_filter')) || false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [entryToEdit, setEntryToEdit] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(entriesCollection, function(snapshot) {
      const entriesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setData(entriesArr);
    })
    return unsubscribe
  }, []);


  async function addEntry (e, entry) {
    e.preventDefault();
    try {
      const docRef = await addDoc(entriesCollection, entry);
    }
    catch (e) {
      console.log("there was an error adding doc");
    }    
  }


  async function deleteEntry (id) {
    const docRef = doc(database, "entries", id);
    await deleteDoc(docRef);
  }  


  function changeSort () {         
    if (sortBy === "date") { 
      setSortBy("name");       
      localStorage.setItem('SDAT_sort', JSON.stringify("name"));        
    }
    if (sortBy === "name") {
      setSortBy("date");
      localStorage.setItem('SDAT_sort', JSON.stringify("date"));        
    }    
  }
  

  function toggleFilterFavorites () {    
    setFilterFavorites(!filterFavorites);    
    localStorage.setItem('SDAT_filter', JSON.stringify(!filterFavorites));
  }

  
  function openEditor (id) {   
    const editIndex = data.findIndex((each) => each.id === id);    
    setEntryToEdit(data[editIndex]);
    setEditorOpen(true);
  }

  function escape (e) {
    if (e.key === "Escape") {
      setEditorOpen(false);
    }
  }

  async function closeEditor (e, entry) {
    e.preventDefault();
    setEditorOpen(false);

    const docRef = doc(database, "entries", entry.id);
    await setDoc(docRef, entry);
    
    /* const indexToUpdate = data.findIndex((each) => each.id === entry.id);
    console.log(indexToUpdate);
    const newData = data.toSpliced(indexToUpdate, 1, entry);
    setData(newData); */
  }

  function cancelEdit () {
    setEditorOpen(false);
  }

  

  return (
    <div className='App'>
      <div className='home--container-background'>
        <div className='home--container'>
          <Banner />      
          <NewEntry 
          addEntry={addEntry}
          />
        </div>
      </div>
      <OrganizeList 
      sortBy={sortBy}
      data={data}
      changeSort={changeSort}
      toggleFilterFavorites={toggleFilterFavorites} 
      filterFavorites={filterFavorites}       
      />
      <EntryList 
      data={data}
      sortBy={sortBy}
      filterFavorites={filterFavorites}
      deleteEntry={deleteEntry}
      openEditor={openEditor}
      />
      <EditEntry
      entryToEdit={entryToEdit}
      editorOpen={editorOpen}
      closeEditor={closeEditor}
      cancelEdit={cancelEdit} 
      escape={escape}
      />      
      <Footer />
    </div>
  )
}

export default App
