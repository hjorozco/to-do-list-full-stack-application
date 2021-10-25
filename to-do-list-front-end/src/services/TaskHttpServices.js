import axios from 'axios';

const TASKS_API_BASE_URL = "http://localhost:8081/api";
class TaskHttpServices {
    addTaskToDb(task) {
        return axios.post(TASKS_API_BASE_URL + "/addtask", task);
    }
    getTasks() {
        return axios.get(TASKS_API_BASE_URL + "/tasks");
    }
    updateTask(task) {
        return axios.put(TASKS_API_BASE_URL + "/task", task);
    }
    deleteTask(id) {
        return axios.delete(TASKS_API_BASE_URL + "/task/" + id);
    }
}

export default new TaskHttpServices();