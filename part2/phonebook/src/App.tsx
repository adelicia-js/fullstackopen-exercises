import { useState } from "react";
import { People, PersonItem } from "./types";

const App = ({ people }: People) => {
  const [persons, setPersons] = useState(people);
  const [newName, setNewName] = useState("");

  // checks for duplicate entries
  const checkIfNameExists = (inputName: string, personList: PersonItem[]) => {
    // some is an array method that returns true if at least one element passes the test (function passed)
    return personList.some((personItem) => personItem.name === inputName);
  };

  // Add a new person to the phonebook
  const addNewPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };
    {
      !checkIfNameExists(newName, persons)
        ? setPersons([...persons, newPerson])
        : alert(`${newName} is already added to the phonebook!`);
    }
  };

  // Handle changes to the input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
