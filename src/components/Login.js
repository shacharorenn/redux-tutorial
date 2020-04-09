import React from 'react';
import {Formik, Form, Field} from 'formik';
// import {connect} from 'react-redux';
// import {setName} from '../redux/actions/user.action';

export default function Login({cb}) {

    const handleSubmit = (values) => {
        console.log(values);
        //props.changeNameFromLogin(values.name);
        cb(values.name);

    }

    return (
        <Formik
            initialValues = {{name: ''}}
            onSubmit = {handleSubmit}
        >
            {
                () => (
                    <Form>
                        <Field type="text" name="name"/>
                        <button type="submit">Login</button>
                    </Form>
                )
            }
        </Formik>
    )
}

// export default connect (
//     undefined,
//     (dispatch) => {
//         return {
//             changeNameFromLogin: function(newName) {
//                 dispatch(setName(newName));
//             }
//         }
//     }
// )(Login);