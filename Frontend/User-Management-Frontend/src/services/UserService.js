import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const getAllUsers = async () => axios.get(API_URL);

export const getUserById = async (id) => axios.get(`${API_URL}/${id}`);

export const saveUser = async (user) => axios.post(API_URL, user);

export const updateUser = async (id, user) => axios.put(`${API_URL}/${id}`, user);

export const deleteUser = async (id) => axios.delete(`${API_URL}/${id}`);