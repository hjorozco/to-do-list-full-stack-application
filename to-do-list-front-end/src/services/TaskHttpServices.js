import axios from 'axios';

// API End Point location (Spring Application Apache Tomcat server) 
const TASKS_API_BASE_URL = "http://localhost:8081/api";

class TaskHttpServices {
    addTaskToDb(task) {
        return axios.post(TASKS_API_BASE_URL + "/add-task", task);
    }
    getTasksFromDb() {
        return axios.get(TASKS_API_BASE_URL + "/get-tasks");
    }
    updateTaskOnDb(task) {
        return axios.put(TASKS_API_BASE_URL + "/update-task", task);
    }
    deleteTaskFromDb(id) {
        return axios.delete(TASKS_API_BASE_URL + "/delete-task/" + id);
    }
}

export default new TaskHttpServices();