import { useEffect, useRef, useState } from 'react';
import ListHeader from "./ListHeader";
import List from "./List";

const ListContainer = props => {

    const [filter, setFilter] = useState("not completed");

    // When component mounts, read data from local storage and assign it  to state
    useEffect(() => {
        setFilter(localStorage.getItem("filter") || "not completed");
    }, []);

    let mount = useRef();
    useEffect(() => {
        // When component mounts do nothing
        if (!mount.current) {
            mount.current = true
            return
        }
        // When state changes, save it on local storage.
        localStorage.setItem("filter", filter);
    }, [filter]);

    return (
        <div className="Container ListContainer">
            <ListHeader
                setFilter={setFilter}
                filter={filter}
            />
            <List
                tasks={props.tasks}
                showDeleteTaskForm={props.showDeleteTaskForm}
                changeCompleteStatus={props.changeCompleteStatus}
                filter={filter}
            />
        </div>
    );

}

export default ListContainer;

