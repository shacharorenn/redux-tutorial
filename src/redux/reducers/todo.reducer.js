import {SET_TASKS, SET_SEARCH} from '../actions/todo.action';
import {keyBy} from 'lodash';
const initialState = {
    tasks :{},
    search: ''
}


export default function todoReducer(state=initialState,action){
    switch(action.type) {
        case SET_SEARCH:
            return {...state, search: action.payload}
        case SET_TASKS:
            return {...state, tasks: keyBy(action.payload, (singleTask) => singleTask.id)};
        default:
            return state;
    }
}