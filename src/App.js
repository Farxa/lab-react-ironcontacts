import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import contactsArr from "./contacts.json";


function App() {
const fiveContacts = contactsArr.slice(0,5);

const [contacts, setContacts] = useState(fiveContacts)


const removeContact = (contactId) => {
  const contactsCopy = [...contacts];
  const removedContacts = contactsCopy.filter(contact => contact.id !== contactId);
  
  setContacts([...removedContacts])
}


const contactsList = contacts.map(contact => {
  return (
  <tr key={contact.id}>
  <td><img src={contact.pictureUrl} className='contactImg' alt="contact picture"/></td>
  <td>{contact.name}</td>
  <td>{contact.popularity}</td>
  {contact.wonOscar && <td>🏆</td>}
  {contact.wonEmmy && <td>🏆</td>}
  <td><button onClick={() => removeContact(contact.id)}>Delete</button></td>
  </tr>
  )
})


const addRandomContact = () => {
  const newContactsArr = contactsArr.slice();
  newContactsArr.splice(0, 5);
  const randomContact = newContactsArr[Math.floor(Math.random() * (newContactsArr.length))];
  
  setContacts(contacts => [...randomContact])
}

const sortByPopularity = () => {
  const sortedPopularity = contacts.sort((a,b) => b.popularity - a.popularity)
  setContacts(contacts => [...sortedPopularity])
}


const sortByName = () => {
  const sortedNames = contacts.sort((a, b) => a.name.localeCompare(b.name));
  setContacts(contacts => [...sortedNames])
}



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>IronContacts</h1>
      </header>
      <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button> 
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
          {contactsList}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
