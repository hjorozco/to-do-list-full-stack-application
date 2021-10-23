import { useEffect, useState } from 'react';
import TaskHttpServices from '../services/TaskHttpServices';

const EditTask = props => {

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

  const handleInputChange = e => {
    setTask({ ...task, [e.target.id]: e.target.value.trimLeft() });
  }

  const handleUpdateTask = e => {
    e.preventDefault();
    TaskHttpServices.updateTask(task, task.id)
      .then(() => props.history.push("/tasks"));
  }

  const handleCancel = e => {
    e.preventDefault();
    props.history.push("/tasks");
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
