import { useRef } from 'react';

const Form = props => {

    let taskRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (taskRef.current.value.trim() !== "") {
            props.addTask({
                task: taskRef.current.value.trim(),
                completed: false,
                id: Date.now(),
            });
        }
        taskRef.current.value = "";
    }

    const handleReset = e => {
        e.preventDefault();
        taskRef.current.value = "";
    }

    return (
        <div className="Container FormContainer">

            <div className="FormTitle">
                <div>What do you need to do?</div>
            </div>

            <form className="Form" onSubmit={handleSubmit} onReset={handleReset}>

                <textarea
                    className="Input FormInput"
                    ref={taskRef}
                    required
                />

                <div className="FormButtonsContainer">
                    <button className="Button SubmitButton" type="submit">Add</button>
                    <button className="Button ResetButton" type="reset">Clear</button>
                </div>

            </form>
        </div>
    );
}

export default Form;