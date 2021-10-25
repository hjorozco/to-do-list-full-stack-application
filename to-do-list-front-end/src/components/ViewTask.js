import { useState } from 'react';

const ViewTask = props => {

  const [task] = useState(props.task);

  const handleBack = e => {
    e.preventDefault();
    props.history.push("/");
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
