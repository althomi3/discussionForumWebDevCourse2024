<script>
    let todos = $state([])
    const submitFormItem = (e) => {
        const formData = new FormData(e.target);
        const todo = Object.fromEntries(formData);
        console.log(todo);
        todo.id = crypto.randomUUID(); // assigns a unique id to the object created
        todos.push(todo);
        e.target.reset(); // resets the form
        e.preventDefault();
    };
</script>


<h1>Assignment Item List</h1>
<form onsubmit={submitFormItem}>
    <label for="item">Type in the item name:</label>
    <input id="item" name="item" type="text" /><br />
    <input type="submit" value="Add" />
</form>
  
<p>Items:</p>

<p>The list has {todos.length} {todos.length === 1 ? "item" : "items"}.</p>
  
<ul>
    {#each todos as todo}
    <li>
      {todo.item}
    </li>
    {/each}
</ul>
  
<!-- 
    -->