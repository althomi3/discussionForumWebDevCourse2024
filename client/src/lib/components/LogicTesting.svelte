<script>
    let name = "Svelte";
    let version = 5;
    let condition = 4;
    let list = [1,2,3,4];
    let library = { name: "Svelte", version: 5 };
    let todos = [
    { id: 1, name: "Learn Deno basics", done: true },
    { id: 2, name: "Learn Hono basics", done: true },
    { id: 3, name: "Learn Svelte basics", done: false },
  ];
</script> 

<h1>Hello {name.toLocaleUpperCase()} {version * 2}!</h1>
<!-- inline expression is conditional logic. i
f condition is 4, show yes, if not show no-->
<h2>Hello {condition === 4 ? "Yes" : "No"} {version * 2}!</h2> 

<!-- id condition is true, content is rendered-->
{#if version === 5}
  <h1>Great choice!</h1>
{/if}

<!--Conditional Logic-->
<!--if verison is 5, show h1, else show other h1s-->
{#if version === 5}
    <h1>You've picked the version {version}. Great choice!</h1>
{:else if version < 5}
    <h1>Your version is {version}. Time to update it!</h1>
{:else}
    <h1>Your version is {version} -- you are from the future!</h1>
{/if}

<!--Looping-->
{#each list as item} <!--for each item in the collection list, display this item as item in p-->
<p>{item}</p>
{/each}

<!--Showing objects-->
<h1>My {library.name} version is {library.version}</h1>

<!--use if and each looping on objects-->
<ul>
    {#each todos as todo}
      <li>{todo.name}</li>
    {/each}

</ul>

<!--use if and each looping on objects to show logic
this code shows check boxes depending on the state of the todo
-->

<ul>
    {#each todos as todo}
      <li>
        <input type="checkbox" checked={todo.done} id={todo.id} />
        <label for={todo.id}>{todo.name} (id: {todo.id})</label>
      </li>
    {/each}
  </ul>


