export const SET_TASKS = '[todo] SET TASKS';
export const SET_SEARCH = '[todo] SET_SEARCH';


export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}
export function setSearch(searchTerm) {
    return {
        type: SET_SEARCH,
        payload: searchTerm
    }
}

export function fetchTasks(searchTerm) {
    debugger;
    return async function(dispatch) {
        dispatch(setSearch(searchTerm));
        const response =  await fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchTerm}`);
        const data = await response.json();
        dispatch(setTasks(data));
    }

}