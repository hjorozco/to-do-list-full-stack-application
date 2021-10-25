import { useState } from 'react';
import TaskHttpServices from '../services/TaskHttpServices';

const DeleteTask = props => {

  const [task] = useState(props.task);

  const handleDeleteTask = e => {
    e.preventDefault();
    // Delete task on the MySQL database by doing a DELETE request to the API
    TaskHttpServices.deleteTaskFromDb(task.id)
      .then(() => {
        // Delete task on the "tasks" state of the App component (Source of truth)
        props.deleteTaskFromState(task.id);
        props.history.push("/");
      })
      .catch((e) => alert(`Your task was not deleted. ${e.message}.`));
  }

  const handleCancel = e => {
    e.preventDefault();
    props.history.push("/");
  }

  return (
    <div className="Screen Operation">
      <div className="TitleContainer">
        Delete task
      </div>
      <div className="Container FormContainer">
        <form className="Form" onSubmit={handleDeleteTask} onReset={handleCancel}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="Input FormInput"
            value={task.title}
            disabled={true}
          />
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            className="TextArea Input FormInput"
            value={task.details}
            disabled={true}
            rows="3"
          />
          <div className="Bold FormInput">
            {task.completed ? "Done. You can delete it safely." : "Not done. Are you sure you want to delete it?"}
          </div>
          <div className="FormButtonsContainer">
            <button className="Button SubmitButton" type="submit">DELETE</button>
            <button className="Button ResetButton" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default DeleteTask;
