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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>IronContacts</h1>
      </header>
      <div>
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
