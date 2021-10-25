import { useState } from 'react';
import TaskHttpServices from '../services/TaskHttpServices';

const EditTask = props => {

  const [task, setTask] = useState(props.task);

  const handleInputChange = e => {
    setTask({ ...task, [e.target.id]: e.target.value.trimLeft() });
  }

  const handleUpdateTask = e => {
    e.preventDefault();

    // Update task on the MySQL database by doing a PUT request to the API
    TaskHttpServices.updateTask(task)
      .then(() => {
        // Update task on the "tasks" state of the App component (Source of truth)
        props.editTaskOnState(task);
        props.history.push("/");
      })
      .catch((e) => alert(`Your task was not updated. ${e.message}.`));
  }

  const handleCancel = e => {
    e.preventDefault();
    props.history.push("/");
  }

  return (
    <div className="Screen Operation">
      <div className="TitleContainer">
        Edit task
      </div>
      <div className="Container FormContainer">
        <form className="Form" onSubmit={handleUpdateTask} onReset={handleCancel}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="Input FormInput"
            onChange={handleInputChange}
            value={task.title}
            required
          />
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            className="TextArea Input FormInput"
            onChange={handleInputChange}
            value={task.details}
            rows="3"
          />
          <div className="Bold FormInput">{task.completed ? "Done." : "Not done."}</div>
          <div className="FormButtonsContainer">
            <button className="Button SubmitButton" type="submit">UPDATE</button>
            <button className="Button ResetButton" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default EditTask;
