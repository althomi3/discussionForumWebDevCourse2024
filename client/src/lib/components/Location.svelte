
<script>
    // This component gets the location and shows it in a paragraph
    
        import { useLocationState } from "$lib/states/locationState.svelte.js";
      
        const locationState = useLocationState();
      </script>
      
      <p>At ({locationState.location.x}, {locationState.location.y})</p>