import axios from "axios";
import { PersonItem } from "../types";

const getAll = () => {
    const request = axios.get('http://localhost:3001/persons');
    return request.then(response => response.data);
}

const addNew = (newPerson: PersonItem) => {
    const request = axios.post('http://localhost:3001/persons', newPerson);
    return request.then(response => response.data);
}

export default {getAll, addNew};