<script>
    let checked = $state(false);
    let todo = $state({ name: "", done: false }); // add reactive object with reactive attributes
  </script>
  
  <input type="checkbox" bind:checked={checked} />

  <p>Checked: {checked}</p>
  
  <h2>Add Todo</h2>
  
  <form>
    <label for="name">Todo</label>
    <input
      id="name"
      type="text"
      bind:value={todo.name}
      placeholder="Enter a new todo"
    />
    <div>
      <input id="done" name="done" type="checkbox" bind:checked={todo.done} />
      <label for="done">Done</label>
    </div>
  </form>
  
  <p>
    Todo: {todo.name}
  </p>
  <p>
    Done: {todo.done ? "Yes" : "No"} <!-- uses inline expression to apply conditional logic directly in HTML-->
  </p>