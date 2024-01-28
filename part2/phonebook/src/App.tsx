import { useState, useEffect } from "react";
import axios from "axios";
import { PersonItem } from "./types";
import Search from "./components/Search";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState<PersonItem[]>([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:3001/persons').then(response=>{
      console.log(response.data);
      setPersons(response.data);
    });
  },[]);

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
        axios.post('http://localhost:3001/persons', newPerson).then(response=>{
          console.log(response.data);
          setPersons([...persons, response.data]);
          setNewName("");
          setNewPhone("");
        })
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

  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <Search searchQuery={searchQuery} handleSearchInput={handleSearchInput}/>

      <AddContact newName={newName} newPhone={newPhone} handleNameInput={handleNameInput} handlePhoneInput={handlePhoneInput} addNewPerson={addNewPerson}/>

      <ContactList filteredNames={filteredNames}/>

    </div>
  );
};

export default App;
