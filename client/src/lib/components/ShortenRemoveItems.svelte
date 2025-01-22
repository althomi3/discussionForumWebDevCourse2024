<script>
    let items = $state([]);
  
    const addItem = (e) => {
      const item = Object.fromEntries(new FormData(e.target));
      items.push(item);
      item.id = crypto.randomUUID();
      console.log(item);
      e.target.reset();
      e.preventDefault();
    };

    // Fun: 
    // in: item from list in html template that was clicked by user
    // action: check whether name is longer than 3 chars. if yes, slice it by one char
    const shortenItem = (item) => {
        console.log("item", item);
        console.log("item name", item.name);
        const selectedItems = items.find((i) => i.id == item.id); // i = value returned by callback function find
        console.log("selectedItems", selectedItems);
        console.log("selectedItems name", selectedItems.name);
        console.log("The old item name length is:", selectedItems.name.length);
        if (selectedItems.name.length > 3) {
            selectedItems.name = selectedItems.name.slice(0,-1); // reduces string by one letter
            console.log("The new item length is:", selectedItems.name.length);
        }
        else if (selectedItems.name.length <= 3){
            items = items.filter((i) => i.id !== item.id); // filters items array by keeping the items that are not similar to the item to be removed
            console.log("item removed");
        };
    };
  </script>
  
  <form onsubmit={addItem}>
    <label for="name">Type in the item name:</label>
    <input id="name" name="name" type="text" /><br />
    <input type="submit" value="Add" />
  </form>
  
  <p>Items:</p>
  
  <ul>
    {#each items as item}
      <li onclick={() => shortenItem(item)}>{item.name}</li>
    {/each}
  </ul>
  
  <p>The list has {items.length} item{items.length === 1 ? "" : "s"}.</p>
  