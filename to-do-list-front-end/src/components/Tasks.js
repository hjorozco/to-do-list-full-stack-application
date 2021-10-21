import { useEffect, useRef, useState } from 'react';
import ListContainer from './ListContainer';
import TaskHttpServices from '../services/TaskHttpServices';
import addTaskIcon from '../images/addTask.svg';
import Tooltip from '@material-ui/core/Tooltip';

const Tasks = () => {

  const [tasks, setTasks] = useState([]);

  // When component mounts
  useEffect(() => {
    TaskHttpServices.getTasks().then(res => setTasks(res.data));
  }, []);

  let mount = useRef();
  useEffect(() => {
    // When component mounts do nothing
    if (!mount.current) {
      mount.current = true
      return
    }
    // When state changes, save it on local storage.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = task => {
    setTasks(tasks => [...tasks, task]);
  }

  const removeTask = taskId => {
    setTasks(tasks => tasks.filter(task => task.id !== taskId));
  }

  const changeCompleteStatus = taskId => {
    let tempTasks = tasks.slice();
    let taskIndex = tempTasks.findIndex(task => task.id === taskId);
    tempTasks[taskIndex].completed = !tempTasks[taskIndex].completed;
    setTasks(tempTasks);
  }

  return (
    <div className="Tasks">
      <div className="TasksTitleContainer">TO DO LIST
        <Tooltip title='add' arrow>
          <img className="AddTaskImage" src={addTaskIcon} width="50px" height="50px" />
        </Tooltip>
      </div>
      <ListContainer
        tasks={tasks}
        removeTask={removeTask}
        changeCompleteStatus={changeCompleteStatus}
      />
    </div>
  );

}

export default Tasks;
