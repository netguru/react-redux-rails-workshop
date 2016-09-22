import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
});

export function getUsers() {
  return api.get('/users');
}

export function getUser(userId) {
  return api.get(`/users/${userId}`);
}

export function deleteUser(userId) {
  return api.delete(`/users/${userId}`);
}

export function addUser(email, password) {
  return api.post(`/users`, {
    email,
    password,
  });
}

export function updateUser(userId, changes) {
  return api.put(`/users/${userId}`, changes);
}
