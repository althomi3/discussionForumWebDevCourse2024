<script>
// This component uses the location
// It contains buttons
// On click, the location is updated accordingly
// The component Location uses the location an displays it in a pragraph
    import { useLocationState } from "$lib/states/locationState.svelte.js";
  
    const locationState = useLocationState();
  </script>
  <h1>Assignment Shared Component State</h1>
  <p>On button click, the locationstate is updated. 
    One component displays the new location in a paragraph.
    One component contains the buttons to click and trigger the movement / change of location.
  </p>

  <table>
    <tbody>
      <tr>
        <td></td>
        <td>
          <button onclick={() => locationState.up()}>Up</button>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <button onclick={() => locationState.left()}>Left</button>
        </td>
        <td>
          <button onclick={() => locationState.down()}>Down</button>
        </td>
        <td>
          <button onclick={()=> locationState.right()}>Right</button>
        </td>
      </tr>
    </tbody>
  </table>
  