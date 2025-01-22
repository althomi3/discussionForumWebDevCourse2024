<script>
    let count = $state(0);
    let countState = $state({
      count: 0,
      note: "single digits",
      numbers: [],
    });

    let message = $state("default");


    setInterval(() => {
      countState.count++;
  
      if (countState.count > 9) {
        countState.note = "not single digits";
      }
    }, 1000);

    const counter_up = () => {
        count++;
        messageChange();
    };

    const counter_down = () => {
        count--;
        messageChange();
    };

    const counter_reset = () => {
        count=0;
        messageChange();
    };

    const messageChange = () => {
      if (count === 1) {
          message = "Click, clickiti click click click.";
        }
        else if (count === 5) {
          message = "I know I'll get tired of these clicking exercises.";
        }
        else {
          message = "default"
        }
        
    };

    setInterval(() => {
    countState.count++;

    countState.numbers.push(countState.count); // adds a new number to the list

    if (countState.count > 9) {
      countState.note = "not single digits";
    }
  }, 1000);

  // logs event in console and returns parameters of event as count
  const incrementCount = (event) => {
    console.log(event);
    count = event.x * event.y;
  };

  // this code listens to an input field. when a user clicks on the input field, the input text is changed
  let text = $state("");

  /*const textInput = (event) => {
    text = event.target.value;
  };*/

  

</script>
  
<h1>Count: {count}</h1>
<button onclick={counter_up} name="Increment">Increment</button>
<button onclick={counter_down} name=Decrement>Decrement</button>
<button onclick={counter_reset} name="Reset">Reset</button>
<p>{message}</p>
<p>Count: {count} ({count > 9 ? "not single digits" : "single digits"})</p>
<p>Count: {countState.count} ({countState.note})</p> <!--updates count object-->
<p>Sum: {countState.numbers.reduce((a, b) => a + b, 0)}</p> <!--updates sum of numbers in list every time a number is added via the logic above-->
<button onclick={incrementCount}>Increment</button>

<!--this html belong to textInput fun
/<input type="text" oninput={textInput} />

<p>Text: {text}</p> -->

<!--bind directive: binds value to variable (upstream data flow)-->
<input type="text" bind:value={text} />
<p>Text: {text}</p>
<p>Length: {text.length}</p>