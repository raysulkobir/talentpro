import { added } from "../actions";

const addTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:8000/api/todo', {
            method: 'POST',
            body: JSON.stringify({
                text: todoText,
                completed: false,
                color: "red"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const todo = await response.json();
        dispatch(added(todo))
    }
}

export default addTodo;