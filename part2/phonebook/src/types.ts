export type SearchProps = {
  searchQuery: string;
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type AddContactProps = {
  newName: string;
  handleNameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newPhone: string;
  handlePhoneInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addNewPerson: (event: React.FormEvent<HTMLFormElement>) => void; 
}

export type ContactListProps = {
  filteredPeople: PersonItem[];
  deletePerson: (id: PersonItem["id"]) => void;
}

export interface PersonItem {
  name: string;
  phone: string;
  id?: string | number;
}

export interface NotificationProps {
  message: string | null;
  messageType: string;
}

export interface People {
  people: PersonItem[];
}
