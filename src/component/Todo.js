function Todo({ todo , removeTodo , index, completeTodo}) {
    return (
        <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}

            <div>
                <button onClick={() => removeTodo(index)}>x</button>
                <button onClick={() => completeTodo(index)}>Complete</button>
            </div>
        </div>
    );
};
export default Todo;