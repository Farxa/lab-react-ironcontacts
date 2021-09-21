import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import contactsArr from "./contacts.json";


function App() {
const fiveContacts = contactsArr.slice(0,5);

const [contacts, setContacts] = useState(fiveContacts)

const contactsList = contacts.map(contact => {
  return (
  <tr key={contact.id}>
  <td><img src={contact.pictureUrl} className='contactImg'/></td>
  <td>{contact.name}</td>
  <td>{contact.popularity}</td>
  {contact.wonOscar && <td>🏆</td>}
  {contact.wonEmmy && <td>🏆</td>}
  </tr>
  )
})

const addRandomContact = () => {
  const newContactsArr = contactsArr.slice();
  newContactsArr.splice([fiveContacts], 1);
  const randomContact = newContactsArr[Math.floor(Math.random() * (newContactsArr.length))];
  
  setContacts(contacts => [randomContact, ...contacts])

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>IronContacts</h1>
      </header>
      <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
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
