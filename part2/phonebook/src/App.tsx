import { useState } from "react";
import { People, PersonItem } from "./types";
import Search from "./components/Search";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

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
      <h1>Phonebook</h1>

      <Search searchQuery={searchQuery} handleSearchInput={handleSearchInput}/>

      <AddContact newName={newName} newPhone={newPhone} handleNameInput={handleNameInput} handlePhoneInput={handlePhoneInput} addNewPerson={addNewPerson}/>
      <ContactList filteredNotes={filteredNotes}/>

    </div>
  );
};

export default App;
