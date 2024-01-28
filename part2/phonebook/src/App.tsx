import { useState } from "react";
import { People, PersonItem } from "./types";

const App = ({ people }: People) => {
  const [persons, setPersons] = useState(people);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

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
    };
    {
      !checkIfPersonExists(newPerson, persons)
        ? setPersons([...persons, newPerson])
        : alert(`Person is already added to the phonebook!`);
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

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} required />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneInput} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
