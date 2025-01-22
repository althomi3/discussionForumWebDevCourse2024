<script>
    let { todo = {name: "fallbackname", done: false}, removeTodo } = $props();
    console.log("todo in TodoItem:", todo);
</script>
  
  <input type="checkbox" bind:checked={todo.done} id={todo.id} />
  <label for={todo.id}>
    {todo.name} ({todo.done ? "done" : "not done"})
  </label>

  <button onclick={() => removeTodo(todo)}>Remove</button>