import { useEffect, useState } from 'react';
import ListContainer from './ListContainer';
import TaskHttpServices from '../services/TaskHttpServices';
import addTaskIcon from '../images/addTask.svg';
import Tooltip from '@material-ui/core/Tooltip';

const Tasks = props => {

  const [tasks, setTasks] = useState([]);

  // When component mounts get tasks data from MySQL database
  useEffect(() => {
    TaskHttpServices.getTasks().then(result => setTasks(result.data));
  }, []);

  const showAddTaskForm = () => {
    props.history.push("/add-task");
  }

  const showDeleteTaskForm = id => {
    props.history.push(`/delete-task/${id}`);
  }

  const changeCompleteStatus = id => {
    let tempTasks = tasks.slice();
    let taskIndex = tempTasks.findIndex(task => task.id === id);
    tempTasks[taskIndex].completed = !tempTasks[taskIndex].completed;
    setTasks(tempTasks);
  }

  return (
    <div className="Screen Tasks">
      <div className="TitleContainer">TO DO LIST
        <Tooltip title='add' arrow>
          <img className="AddTaskImage" src={addTaskIcon} width="50px" height="50px"
            onClick={showAddTaskForm} alt="Add Task"/>
        </Tooltip>
      </div>
      <ListContainer
        tasks={tasks}
        showDeleteTaskForm={showDeleteTaskForm}
        changeCompleteStatus={changeCompleteStatus}
      />
    </div>
  );

}

export default Tasks;
