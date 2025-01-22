<script>
    /*let inputText = $state(""); // initializes a reactive text message
    let outputText = $state("") // initializes output text
    
    const conditionalSecret = () => {
        if (inputText === "AW96B6") {
            outputText = "Impossible!";
        }
        else if (inputText === "Alohomora") {
            outputText = "Opening up!";
        }
    };*/
    let password = $state("");
    let checked = $state(false);


</script>



<!----<label for="password">Enter the secret password:</label> adds a label to the input field with the id password
adds bind directive so that value is passed to function. calls function on onput
<input id="password" type="password" bind:value={inputText} oninput={conditionalSecret}/>
<p>{outputText}</p>-->

<h1>Assignment: Password and Checked</h1>
<label for="password">Enter the secret password:</label>
<input id="password" type="password" bind:value={password} />
<input type="checkbox" bind:checked={checked}/>

{#if password === "AW96B6" && checked==true}
  <p>Impossible!</p>
{:else if password === "Alohomora" && checked==true}
  <p>Opening up!</p>
{/if}