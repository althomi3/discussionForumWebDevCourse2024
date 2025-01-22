<script>
    import TodoForm from "./TodoForm.svelte";
    import ToDoList from "./TodoList.svelte";

  
    let todos = $state([]);

    const removeTodo = (todo) => {
      todos = todos.filter((t) => t.id !== todo.id);
    };

    const addTodo = (e) => {
      const todo = Object.fromEntries(new FormData(e.target));
      todo.id = crypto.randomUUID();
      todos.push(todo);
      e.target.reset();
      e.preventDefault();
    };
  </script>
  
  <h1>Todos Nested Components</h1>
  
  <h2>Add Todo</h2>
  
  <TodoForm {todos} {addTodo}/>
  
  <h2>Existing todos</h2>
  
  <ToDoList {todos} {removeTodo}/>