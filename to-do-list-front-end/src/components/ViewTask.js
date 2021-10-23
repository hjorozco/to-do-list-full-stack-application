import { useEffect, useState } from 'react';
import TaskHttpServices from '../services/TaskHttpServices';

const ViewTask = props => {

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

  const handleBack = e => {
    e.preventDefault();
    props.history.push("/tasks");
  }

  return (
    <div className="Screen Operation">
      <div className="TitleContainer">
        View task
      </div>
      <div className="Container FormContainer">
        <form className="Form" onSubmit={handleBack}>
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
          <div className="Bold FormInput">{task.completed ? "Done." : "Not done."}</div>
          <div className="FormButtonsContainer">
            <button className="Button SubmitButton" type="submit">BACK</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default ViewTask;
