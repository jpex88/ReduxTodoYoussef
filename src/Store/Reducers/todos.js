import * as TodoTypes from '../Types/todos';
const initialState = [];

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TodoTypes.FETCH_TODOS:
            return {
                ...state
            }
        default:
            return state;
    }
}