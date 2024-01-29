import { ContactListProps } from "../types";

export default function ContactList(props: ContactListProps) {

  return (
    <>
      <h2>Contacts</h2>
      <ul className="person-list">
        {props.filteredPeople.map((person, index) => (
          <li key={index} className="person-item">
            <span className="person-name">{person.name}</span>
            <span className="person-phone">{person.phone}</span>
            <span>
              <button id="delete-contact-button" onClick={() => props.deletePerson(person.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
