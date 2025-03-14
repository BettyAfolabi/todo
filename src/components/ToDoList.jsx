import ShowToDo from "./ShowToDo";
import useToDoContext from "./use-todo-context";

function ToDoList() {
  const { todos } = useToDoContext();

  return (
    <div>
      {todos.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "20px", color: "#884332" }}>
          Your tasks here
        </p>
      ) : (
        todos.map((todo) => (
          <ShowToDo key={todo.id} todo={todo} todoId={todo.id} />
        ))
      )}
    </div>
  );
}

export default ToDoList;
