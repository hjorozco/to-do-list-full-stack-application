import ListContainer from './ListContainer';
import addTaskIcon from '../images/addTask.svg';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom'

const Tasks = props => {

  return (
    <div className="Screen Tasks">
      <div className="TitleContainer">TO DO LIST
        <Link to="/add-task">
          <Tooltip title='add' arrow>
            <img className="AddTaskImage" src={addTaskIcon}
              width="50px" height="50px" alt="Add Task" />
          </Tooltip>
        </Link>
      </div>
      <ListContainer
        tasks={props.tasks}
        setTaskToWorkWith= {props.setTaskToWorkWith}
        changeCompleteStatus={props.changeCompleteStatus}
      />
    </div>
  );

}

export default Tasks;
