import { useState } from "react";
import { People, PersonItem } from "./types";

const App = ({ people }: People) => {
  const [persons, setPersons] = useState(people);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // checks for duplicate entries
  const checkIfPersonExists = (
    inputPerson: PersonItem,
    personList: PersonItem[]
  ) => {
    // some is an array method that returns true if at least one element passes the test (function passed)
    return personList.some(
      (personItem) =>
        personItem.name === inputPerson.name ||
        personItem.phone === inputPerson.phone
    );
  };

  // Add a new person to the phonebook
  const addNewPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };
    {
      !checkIfPersonExists(newPerson, persons)
        ? setPersons([...persons, newPerson])
        : alert(`Person is already added to the phonebook!`);
        setNewName("");
        setNewPhone("");
    }
  };

  // Handle name being input
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  // Handle phone being input
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhone(event.target.value);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <p>
        Filter shown with:{" "}
        <input value={searchQuery} onChange={handleSearchInput} />
      </p>

      <h2>Add a new contact</h2>
      <form onSubmit={addNewPerson} id="add-person-form">
        <div className="add-person-form-field">
          Name: <input value={newName} onChange={handleNameInput} required />
        </div>
        <div className="add-person-form-field">
          Phone: <input value={newPhone} onChange={handlePhoneInput} required />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Contacts</h2>
      <ul className="person-list">
        {filteredNotes.map((person, index) => (
          <li key={index} className="person-item">
            <span className="person-name">{person.name}</span><span className="person-phone">{person.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
