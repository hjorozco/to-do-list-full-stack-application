import { useEffect, useState } from 'react';
import TaskHttpServices from '../services/TaskHttpServices';
import Tasks from './Tasks';

const DeleteTask = props => {

  const [task, setTask] = useState({
    id: 0,
    title: '',
    details: '',
    completed: 0,
  });

  // When component mounts get tasks data from MySQL database
  useEffect(() => {
    TaskHttpServices.getTask(props.match.params.id).then(response => {
      setTask(response.data);
    })
  }, [props.match.params.id]);

  const handleDeleteTask = e => {
    e.preventDefault();

    TaskHttpServices.deleteTask(task.id)
      .then(() => props.history.push("/tasks"));
  }

  const handleCancel = e => {
    e.preventDefault();
    props.history.push("/tasks");
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
          {!task.completed?<div className="Bold FormInput">Not done yet!</div>: null}
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
