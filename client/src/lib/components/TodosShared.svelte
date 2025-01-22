<script>
    import { useTodoState } from "$lib/states/todoState.svelte.js";
  
    import TodoFormSharedState from "./TodoFormSharedState.svelte";
    import TodoItemSharedState from "./TodoItemSharedState.svelte";
  
    let todoState = useTodoState();
  </script>
  
  <h1>Todos Shared State</h1>
  
  <h2>Add Todo</h2>
  
  <TodoFormSharedState />
  
  <h2>Existing todos</h2>
  
  <ul>
    {#each todoState.todos as todo}
      <li>
        <TodoItemSharedState {todo} />
      </li>
    {/each}
  </ul>