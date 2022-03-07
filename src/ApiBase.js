import axios from 'axios';

const URL = 'http://localhost:3004/api/todos'

const apiBaseURL = axios.create({
	baseURL: URL
});

const apiBase = {
    AddToDo: (description) => apiBaseURL.post(URL, { description }),
    Refresh: (search) => apiBaseURL.get(`${URL}?sort=-createdAt${search}`),
    Remove: (todoId) => apiBaseURL.delete(`${URL}/${todoId}`),
    MarkAsDone: (todoId, done) => apiBaseURL.put(`${URL}/${todoId}`, done),
    MarkAsPending: (todoId, done) => apiBaseURL.put(`${URL}/${todoId}`, done),
    


}

export default apiBase;
