import { useState, useEffect } from "react";
import personServices from "./services/persons";
import { PersonItem } from "./types";
import Search from "./components/Search";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState<PersonItem[]>([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    personServices.getAllData().then((initialData) => {
      setPersons(initialData);
    });
  }, []);

  // Handle name being input
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  // Handle phone being input
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhone(event.target.value);
  };

  // Handle filter input - input name / phone
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

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

    !checkIfPersonExists(newPerson, persons)
      ? // if person does not already exist, contact is added
        personServices
          .addNewItem(newPerson)
          .then((returnedPerson) => {
            setPersons([...persons, returnedPerson]);
            setNewName("");
            setNewPhone("");
          })
          .catch((error) => {
            console.log(error);
            alert("Error adding contact!");
          })
      : // if person does already exist in book, contact is NOT added
        (alert(`Person is already added to phonebook!`),
        setNewName(""),
        setNewPhone(""));
  };

  // Returns a filtered list of contacts - input name / phone
  const filteredPeople = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.phone.includes(searchQuery)
  );

  const deletePerson = (id: PersonItem["id"]) => {
    const personItem = persons.find((personItem) => personItem.id === id);
    if (window.confirm(`Delete ${personItem?.name}?`)) {
      personServices
        .deleteItem(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id ? person : null));
          console.log(persons.find((person) => person.id === id));
        })
        .catch((error) => {
          console.log(error);
          alert("Error deleting contact!");
        });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Search searchQuery={searchQuery} handleSearchInput={handleSearchInput} />

      <AddContact
        newName={newName}
        newPhone={newPhone}
        handleNameInput={handleNameInput}
        handlePhoneInput={handlePhoneInput}
        addNewPerson={addNewPerson}
      />

      <ContactList
        filteredPeople={filteredPeople}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
