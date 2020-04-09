import React from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
// import {Provider} from 'react-redux';
// import store from './redux/store';
import Search from './components/Search';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import {setName} from './redux/actions/user.action';

function App({changeNameFromLogin}) {
  return (
    // <Provider store={store}>
      <div className="App">
        <Header/>
        <Login cb={changeNameFromLogin}/>
        <Search/>
        <TaskList/>
      </div>
    // </Provider>
  );
}
export default connect (
    undefined,
    (dispatch) => {
        return {
            changeNameFromLogin: function(newName) {
                dispatch(setName(newName));
            }
        }
    }
)(App);
//export default App;
