// USES LOCAL STORAGE FOR SHARED STATE
import { browser } from "$app/environment"; //imports browser variable to check for local storage used in browser

const LOCATION_KEY = "location"; // const var as a key to store the location in local storage
let initialLocation = { x: 0, y: 0 }; // initializes location
// console.log("initiallocation", initialLocation); // Object { x: 0, y: 0 }

if (browser && localStorage.hasOwnProperty(LOCATION_KEY)) { // gets initial coordinate if the variable already exists in browser storage or local storage
    try {
        const storedLocation = localStorage.getItem(LOCATION_KEY); // gets data from local storage
        console.log("Item from localStorage:", storedLocation); // {"x":0,"y":0} = stringified data

        // Parse the stored JSON string
        const parsedLocation = JSON.parse(storedLocation); // parses the location date
        console.log("parsed location", parsedLocation) // Object { x: 0, y: 0 } JSON data

        // Ensure the parsed object has the correct structure
        if (parsedLocation && typeof parsedLocation.x === "number" && typeof parsedLocation.y === "number") {
            initialLocation = parsedLocation;
        } else {
            console.warn("Invalid format in localStorage. Resetting to default.");
            localStorage.setItem(LOCATION_KEY, JSON.stringify(initialLocation));
        }
    } catch (error) {
        console.error("Failed to parse localStorage value:", error);
        localStorage.setItem(LOCATION_KEY, JSON.stringify(initialLocation)); // Reset to default
    }
};

// SET REACTIVE LOCATION STATE
let locationState = $state({x: initialLocation.x, y: initialLocation.y}); // initializes location state
console.log("init locationstate", locationState)


const useLocationState = (initialLocation) => { // fun returns location and defines property to update a location state
  return {
    get location() {
        console.log("location state", locationState);
      return locationState; // fun contains getter that returns locationState.
      // The properties below are calledd on that object
    },
    up: () => {
      locationState.y++;
      localStorage.setItem(LOCATION_KEY, JSON.stringify(locationState)); // need to stringify data. 
      // otherwise, data has wrong format and catch error above is triggered
    },
    down: () => {
        locationState.y--;
        localStorage.setItem(LOCATION_KEY, JSON.stringify(locationState));
    },
    left:() => {
        locationState.x--;
        localStorage.setItem(LOCATION_KEY, JSON.stringify(locationState));
    },
    right:() => {
        locationState.x++;
        localStorage.setItem(LOCATION_KEY, JSON.stringify(locationState));
    },
  };
};

export { useLocationState };
