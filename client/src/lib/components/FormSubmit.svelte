<script>

// form data can be retrieved from the bind:directive or from the form object itself
// the form object is contained in the target propoerty of the event object
// with that target property, an instance of FormData is created
// this instance can be turned into an obejct with Object.fromEntries

    let text = $state("");
  
    const submitForm = (e) => { // e = event object that is created on submit
      console.log(text);
      e.preventDefault(); // default behavior is that form is submitted which we want to prevent. default causes page load
    };

    // FUN: retrieves from data from event
    const submitFormByEvent = (e) => {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        data.id = crypto.randomUUID(); // assigns a unique id to the object created
        e.target.reset(); // resets the form
        e.preventDefault();
    };
  </script>
  
  <h3>Form data from bind directive</h3>
  <form onsubmit={submitForm}>
    <label for="textfield">Text field</label>
    <input
      id="textfield"
      name="textfield"
      type="text"
      bind:value={text}
      placeholder="Enter text"
    />
    <input type="submit" value="Submit form" />
  </form>

  <h3>Form data from event</h3>
  <form onsubmit={submitFormByEvent}>
    <label for="textfield">Text field</label>
    <input id="textfield" name="textfield" type="text" placeholder="Enter text" />
    <input type="submit" value="Submit form" />
  </form>