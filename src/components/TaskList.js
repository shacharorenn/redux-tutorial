import React from 'react';
import {connect} from 'react-redux';

function TaskList ({tasks}) {
    return (
        <ul>
            {
                Object.values(tasks).map((singleTask) => <li key={singleTask.id}>{singleTask.title}</li>)
            }
        </ul>
    )
}


export default connect (
    (state) => {
        return {
            tasks: state.todo.tasks
        }
    },
    null
)(TaskList);