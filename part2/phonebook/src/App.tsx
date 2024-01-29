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
      console.log('initial contact book: ', initialData);
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
      (personItem) => personItem.name === inputPerson.name
    );
  };

  // Add a new person to the phonebook
  const addNewPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      phone: newPhone,
    };

    if (!checkIfPersonExists(newPerson, persons)) {
      // if person does not already exist, contact is added
      personServices
        .addNewItem(newPerson)
        .then((addedPerson) => {
          console.log('added contact: ', addedPerson);
          setPersons([...persons, addedPerson]);
          setNewName("");
          setNewPhone("");
        })
        .catch((error) => {
          console.log(error);
          alert("Error adding contact!");
        });
    } else {
      // if person already exists, you may update contact.
      const existingPerson = persons.find(
        (person) => person.name === newPerson.name
      );

      if (
        window.confirm(
          `${existingPerson?.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        personServices
          .updateItem(existingPerson?.id, newPerson)
          .then((updatedPerson) => {
            console.log('old contact: ', existingPerson, 'new contact: ', updatedPerson);
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson
              )
            );
            setNewName("");
            setNewPhone("");
          })
          .catch((error) => {
            console.log(error);
            alert("Error updating contact!");
          });
      } else {
        setNewName("");
        setNewPhone("");
      }
    }
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
          setPersons(
            persons.filter((person) => (person.id !== id ? person : null))
          );
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
