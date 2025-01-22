// USES LOCAL STORAGE FOR SHARED STATE
import { browser } from "$app/environment"; //imports browser variable to check for local storage used in browser

const COUNT_KEY = "count"; // const var as a key to store the count in local storage
let initialCount = 0; // sets initial count
if (browser && localStorage.hasOwnProperty(COUNT_KEY)) { // gets initial count if the variable already exists in browser storage or local storage
  initialCount = parseInt(localStorage.getItem(COUNT_KEY)); // parseInt parses the retrieved string into an integer
}

// CREATES SHARED STATE ACROSS COMPONENTS
let countState = $state(0); // by moving the instanziation out of the fun, the state is now created new every time comopnent calls it

const useCountState = (initialCount) => {
    // CREATES NEW STATE FOR EVERY COMPONENT
    //let countState = $state(0); // this makes sure the state is initiated when a component uses the code
    // by returning the state in the fun below, each component gets its own object
    // thereby, each component get its own count = state NOT shared
  
    return {
      get count() {
        return countState;
      },
      increment: () => {countState++;
      localStorage.setItem(COUNT_KEY, countState); // USES LOCAL STORAGE TO STORE UPDATED COUNT
      },
    };
  };
  
  export { useCountState }; // exports the component