import React from 'react';

// Displays a header section for the list, containing a "filter" select to let the user filter the
// tasks displayed on the list.
const ListHeader = props => {

    const handleChange = e => {
        props.setFilter(e.target.value);
    }

    return (
        <div className="ListFilter">
            <div className="ListFilterLabel1">Display</div>
            <select className="Input" onChange={handleChange} value={props.filter}>
                <option value="not completed">not completed</option>
                <option value="completed">completed</option>
                <option value="all">all</option>
            </select>
            <div className="ListFilterLabel2">tasks</div>
        </div>
    )
}

export default ListHeader;