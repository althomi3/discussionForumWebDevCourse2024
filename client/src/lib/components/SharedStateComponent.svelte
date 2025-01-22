<script>
// Component imports a shared state
    import { useCountState } from "$lib/states/countState.svelte.js";
    const counter = useCountState();
  </script>
  <h1>Shared State Component</h1>
  <p>Count multiplied by two is {counter.count * 2}</p>