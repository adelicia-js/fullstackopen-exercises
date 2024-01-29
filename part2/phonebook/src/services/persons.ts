import axios from "axios";
import { PersonItem } from "../types";

const baseURL = "http://localhost:3001/persons";

const getAllData = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const addNewItem = (newPerson: PersonItem) => {
  const request = axios.post(baseURL, newPerson);
  return request.then((response) => response.data);
};

const updateItem = (id?: PersonItem["id"], updatedPerson?: PersonItem) => {
  const request = axios.put(`${baseURL}/${id}`, updatedPerson);
  return request.then((response) => response.data);
};

const deleteItem = (id: PersonItem["id"]) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((response) => response.data);
};

export default { getAllData, addNewItem, updateItem, deleteItem };
