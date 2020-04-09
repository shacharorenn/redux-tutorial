import React from 'react';
import { Formik, Form, Field } from 'formik';
import {connect} from 'react-redux';
import {fetchTasks} from '../redux/actions/todo.action'

function Search ({tasks,fetchTasks}){

    const handleSubmit = (values) => {
        console.log(values);
        console.log(tasks);
        debugger;
        fetchTasks(values.search);
    }
    const findNewest = () => { 
        let newest = null;
        for(let task of Object.values(tasks)){
            debugger;
            const currentDate = new Date(task.when);
            if(newest ===  null || newest < currentDate){
                newest = currentDate;
            }
        }
        return newest && newest.toISOString();
    }
    return (
        <Formik
            initialValues={{search: ''}}
            onSubmit={handleSubmit}
        >
            <Form>
                <Field type="search" name="search" />
                <div>
                    <p>
                        Num of results : {Object.keys(tasks).length}
                    </p>
                    <p>
                        Newest task: {findNewest()}
                    </p>
                </div>
            </Form>
        </Formik>
    )
}

export default connect(
    (state) => ({
        tasks: state.todo.tasks
    }),
    {
        fetchTasks
    }
)(Search);