import { useEffect, useRef, useState } from 'react';
import TaskHttpServices from '../services/TaskHttpServices';

const AddTask = props => {

  let titleRef = useRef();

  const [task, setTask] = useState({
    id: 0,
    title: '',
    details: '',
    completed: 0,
  });

  // When component mounts send the focus to the title of the form.
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleInputChange = e => {
    setTask({ ...task, [e.target.id]: e.target.value.trimLeft() });
  }

  const handleAddTask = e => {
    e.preventDefault();

    let taskToAdd = {
      id: Date.now(),
      title: task.title,
      details: task.details,
      completed: 0,
    }
    
    TaskHttpServices.addTask(taskToAdd).then(() => {
      props.history.push('/tasks');
    }).catch(() => {
      alert("Your task was not saved. Please try again.");
    });
  }

  const handleCancel = e => {
    e.preventDefault();
    props.history.push("/tasks");
  }

  return (
    <div className="Screen Operation">
      <div className="TitleContainer">
        Add task
      </div>
      <div className="Container FormContainer">
        <form className="Form" onSubmit={handleAddTask} onReset={handleCancel}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="Input FormInput"
            ref={titleRef}
            onChange={handleInputChange}
            value={task.title}
            required
          />
          <label htmlFor="details">Details (optional)</label>
          <textarea
            id="details"
            className="TextArea Input FormInput"
            onChange={handleInputChange}
            value={task.details}
            rows="3"
          />
          <div className="FormButtonsContainer">
            <button className="Button SubmitButton" type="submit">ADD</button>
            <button className="Button ResetButton" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default AddTask;
