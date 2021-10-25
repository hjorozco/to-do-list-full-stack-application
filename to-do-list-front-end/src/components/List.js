import viewIcon from '../images/view.svg';
import editIcon from '../images/edit.svg';
import deleteIcon from '../images/delete.svg';
import completeIcon from '../images/complete.svg';
import notCompleteIcon from '../images/notComplete.svg';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom'

// Display a list of tasks
const List = props => {

    const handleChangeCompleteStatus = (id) => {
        props.changeCompleteStatus(id);
    }

    return (
        <ul className="List">
            {
                props.tasks.map(
                    (task) => {
                        let listItem =
                            <div className="TaskContainer" key={task.id}>
                                <Tooltip
                                    title={task.completed ? "set not done" : "set done"}
                                    arrow>
                                    <button
                                        className="TaskButton"
                                        onClick={() => handleChangeCompleteStatus(task.id)}>
                                        <img
                                            width="20"
                                            height="20"
                                            alt={task.completed ? "Mark not completed" : "Mark completed"}
                                            src={task.completed ? completeIcon : notCompleteIcon}
                                        />
                                    </button>
                                </Tooltip>
                                <li>
                                    {/* If the task is completed, display with a line going through*/}
                                    {
                                        task.completed ?
                                            <div className="LineThrough">{task.title}</div> :
                                            task.title
                                    }
                                </li>
                                <div className="TaskButtonsContainer">
                                    <Link to="/view-task">
                                        <Tooltip title='view' arrow>
                                            <button className="TaskButton" onClick={() => props.setTaskToWorkWith(task)}>
                                                <img width="20" height="20" alt="View task" src={viewIcon} />
                                            </button>
                                        </Tooltip>
                                    </Link>
                                    <Link to="/edit-task">
                                        <Tooltip title='edit' arrow>
                                            <button className="TaskButton" onClick={() => props.setTaskToWorkWith(task)}>
                                                <img width="20" height="20" alt="Edit task" src={editIcon} />
                                            </button>
                                        </Tooltip>
                                    </Link>
                                    <Link to="/delete-task">
                                        <Tooltip title='delete' arrow>
                                            <button className="TaskButton" onClick={() => props.setTaskToWorkWith(task)}>
                                                <img width="20" height="20" alt="Delete task" src={deleteIcon} />
                                            </button>
                                        </Tooltip>
                                    </Link>
                                </div>
                            </div>;
                        if (props.filter === "completed" && task.completed)
                            return listItem;
                        else if (props.filter === "not completed" && !task.completed)
                            return listItem;
                        else if (props.filter === "all")
                            return listItem;
                        return null;
                    }
                )
            }
        </ul>
    );
}

export default List;