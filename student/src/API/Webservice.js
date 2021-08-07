import axios from 'axios';

const url = "http://localhost:3003/Student";

export const getStudents = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
};

export const addStudent = async (student) => {
    return await axios.post(url, student);
}   

export const updateStudent = async (id, student) => {
    return await axios.put(`${url}/${id}`, student);
};

export const deleteStudent = async (id) => {
    return await axios.delete(`${url}/${id}`);
};