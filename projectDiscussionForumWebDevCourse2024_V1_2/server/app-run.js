// This code imports methods from app.js
import app from "./app.js";


// get request
Deno.serve(app.fetch); // uses app which is a hono object, by providing fetch property, we start the server