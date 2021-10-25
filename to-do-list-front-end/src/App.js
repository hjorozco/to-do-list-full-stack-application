import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TaskHttpServices from './services/TaskHttpServices';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import Footer from './components/Footer';
import './App.css';

// This component is the single source of truth of this application
const App = () => {

  // State that holds the data from the tasks on the TO DO LIST
  const [tasks, setTasks] = useState([]);

  // State that holds a task selected by the user to perform an operation in it.
  const [task, setTask] = useState({});

  // When component mounts get tasks data from MySQL database by using a GET request to the API
  useEffect(() => {
    TaskHttpServices.getTasksFromDb()
      .then(result => setTasks(result.data))
      .catch((e) => alert(`Can not read TO DO LIST from database. ${e.message}.`));
  }, []);

  // Add a task to the "tasks" state
  const addTaskToState = task => {
    setTasks(tasks => [...tasks, task]);
  }

  // Set the "task" state that contains the task that will be shown on the "ViewTask", "EditTask" and 
  // "DeleteTask" components.
  const setTaskToWorkWith = task => {
    setTask(task);
  }

  // Update the "tasks" state with the task that was updated by the user.
  const updateTaskOnState = updatedTask => {
    let tasksCopy = tasks.slice();
    let taskToUpdateIndex = tasksCopy.findIndex(task => task.id === updatedTask.id);
    tasksCopy[taskToUpdateIndex] = updatedTask;
    setTasks(tasksCopy);
  }

  // Delete the task selected by the user from the "tasks" state
  const deleteTaskFromState = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  // Update the "tasks" state with the task that was updated by the user (changed its "completed" value)
  const changeCompleteStatus = id => {
    let tasksCopy = tasks.slice();
    let taskToUpdateIndex = tasksCopy.findIndex(task => task.id === id);
    let updatedTask = tasksCopy[taskToUpdateIndex];
    updatedTask.completed = updatedTask.completed ? 0 : 1;
    // Update "completed" field of the task in MySQL database by doing a PUT request to the API
    TaskHttpServices.updateTaskOnDb(updatedTask)
      .then(() => {
        // Update "completed" property of the task on the state.
        tasksCopy[taskToUpdateIndex] = updatedTask;
        setTasks(tasksCopy);
      })
      .catch((e) => alert(`Your task was not updated. ${e.message}.`));
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add-task" render={props => (
            <AddTask {...props} addTaskToState={addTaskToState} />
          )} />
          <Route path="/view-task" render={props => (
            <ViewTask {...props} task={task} />
          )} />
          <Route path="/edit-task" render={props => (
            <EditTask {...props} task={task} updateTaskOnState={updateTaskOnState} />
          )} />
          <Route path="/delete-task" render={props => (
            <DeleteTask {...props} task={task} deleteTaskFromState={deleteTaskFromState} />
          )} />
          <Route path="/">
            <Tasks
              tasks={tasks}
              setTaskToWorkWith={setTaskToWorkWith}
              changeCompleteStatus={changeCompleteStatus}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default (App);
