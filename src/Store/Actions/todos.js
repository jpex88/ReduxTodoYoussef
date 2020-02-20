import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from '../Types';

export const getTodos = () => {
    return {
        type: FETCH_TODOS
    }
}