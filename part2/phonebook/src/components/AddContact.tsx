import { AddContactProps } from "../types";

export default function AddContact(props: AddContactProps) {
  return (
    <>
      <h2>Add a new contact</h2>
      <form onSubmit={props.addNewPerson} id="add-person-form">
        <div className="add-person-form-field">
          Name: <input value={props.newName} onChange={props.handleNameInput} required />
        </div>
        <div className="add-person-form-field">
          Phone: <input value={props.newPhone} onChange={props.handlePhoneInput} required />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
