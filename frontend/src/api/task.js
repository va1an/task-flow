import api from '../api/axios';

export const getTasks = (params) => {
    return api.get("/task/all-tasks", { params });
}

export const createTask = (data) => {
    return api.post("/task/create", data);
}

export const updateTask = (id, data) => {
    return api.put(`/task/update/${id}`, data);
}

export const deleteTask = (id) => {
    return api.delete(`task/delete/${id}`);
}

export const getSingleTask = (id) => {
    return api.get(`/task/${id}`);
}