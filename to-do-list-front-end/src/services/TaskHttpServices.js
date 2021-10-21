import axios from 'axios';

const TASKS_API_BASE_URL = "http://localhost:8081/api";
class TaskHttpServices {

    addTask(task) {
        return axios.post(TASKS_API_BASE_URL + "/addtask", task);
    }

    getTasks() {
        return axios.get(TASKS_API_BASE_URL + "/tasks");
    }

    getTask(id) {
        return axios.get(TASKS_API_BASE_URL + "/task/" + id);
    }

    updateTask(task, id) {
        return axios.put(TASKS_API_BASE_URL + "/task/" + id, task);
    }

    deleteTask(id) {
        return axios.delete(TASKS_API_BASE_URL + "/task/" + id);
    }

}

export default new TaskHttpServices();