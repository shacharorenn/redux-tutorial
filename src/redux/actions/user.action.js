//represent change in por state
 
export const SET_NAME = '[user] SET NAME';

export function setName (newName) {
    return {
        type: SET_NAME,
        payload: newName
    }
}