import React from 'react';
import connect from "react-redux";
import api from "../../Services/api";
import {getTodos} from "../../Store/Reducers/todos";
import {todosReducer} from "../../Store/Reducers/todos";

class TodosList extends React.Component {

    async componentDidMount() {
        this.getAllTodos();
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo) => <h1>{todo.title}</h1>)}
            </div>
            )
    }
}

const mapStateToProps= (state) => {
    todos: state.todosReducer;
}

const mapDispatchToProps = (dispatch) => {
    getAllTodos: () => dispatch(getTodos());
}

export default connect(mapStateToProps,mapDispatchToProps)(TodosList);