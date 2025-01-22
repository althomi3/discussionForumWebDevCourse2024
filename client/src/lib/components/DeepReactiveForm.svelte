<script>
    let todos = $state([]); // todo is deeply reactive meaning that its properties are reactive
  
    const addTodo = (e) => {
      const todo = Object.fromEntries(new FormData(e.target));
      todo.id = crypto.randomUUID();
      todos.push(todo);
      e.target.reset();
      e.preventDefault();
    };

    const removeTodo = (todo) => { // filters todos by removing the todo with the given id
    todos = todos.filter((t) => t.id !== todo.id);
    };

  </script>
  
  <h1>Deeply Reactive ToDos</h1>
  
  <h2>Add Todo</h2>
  
  <form onsubmit={addTodo}>
    <label for="name">Todo</label>
    <input id="name" name="name" type="text" placeholder="Enter a new todo" />
    <div>
      <input id="done" name="done" type="checkbox" />
      <label for="done">Done</label>
    </div>
    <input type="submit" value="Add Todo" />
  </form>
  
  <h2>Existing todos</h2>
  
  <ul>
    {#each todos as todo}
      <li>
        <input type="checkbox" bind:checked={todo.done} id={todo.id} /> <!--changes on deeply reactive properties trigger UI refresh-->
        <label for={todo.id}>
          {todo.name} ({todo.done ? "done" : "not done"})
        </label>
        <button onclick={() => removeTodo(todo)}>Remove</button> <!--removes todo-->
      </li>
    {/each}
  </ul>