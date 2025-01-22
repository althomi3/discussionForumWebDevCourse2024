<script>
    import TodoItem from "./TodoItem.svelte";
  
    let { todos, removeTodo } = $props(); // Get props
    // console.log("Todos:", todos);
</script>
  
  <ul>
    {#each todos as todo}
      <li>
        <TodoItem {todo} {removeTodo} />
      </li>
    {/each}
  </ul>
  