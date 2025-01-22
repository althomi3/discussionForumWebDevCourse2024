<script>
// This component contains code that imports a separated state. Instead of declaring the state here, it imports the state
// vom a separate svelte component

    // let count = $state(0); this code would have defined count as a state within this component

    import { useCountState } from "$lib/states/countState.svelte.js"; // imports state defined in separate svelte component
    const countState = useCountState(); // assigns export from component to a var
</script>
  
  <h1>Separated Component from State</h1>
  <p>Count is {countState.count}</p> <!--gets count from imported component-->
  <!--<button onclick={() => count++}>Increment</button> This inline expression would have changed the count an triggered the reactivity of the state-->
  <button onclick={() => countState.increment()}>Increment</button> <!--calls fun from imported component that increments the count. 
  It executes the same functionality as the inline expression above-->
