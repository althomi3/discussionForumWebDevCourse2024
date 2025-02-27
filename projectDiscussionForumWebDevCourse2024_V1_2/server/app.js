import { Hono } from "@hono/hono";
// import { cors } from "@hono/hono/cors";
// import { logger } from "@hono/hono/logger";
import { ERROR_CTX_CONSOLE_DISCONNECT } from "https://deno.land/std@0.132.0/node/internal_binding/_winerror.ts";
// import postgres from "postgres";

const app = new Hono(); // instantiates hono object from hono web framework

// ---PROJECT IMPLEMENTATIONN SERVER SIDE---

// LP: ROUTING LANDING PAGE
app.get("/", (c) => c.text("Hello"));

// A: ROUTING GET REQUEST / /COURSES PATH
// client queries server with GET request, server returns the following JSON document
// '{"courses": [ {"id": 1, "name": "Web Software Development" }, {"id": 2, "name": "Device-Agnostic Design" } ] }'
app.get("/courses", (c) => {
    const data = {"courses": [ {"id": 1, "name": "Web Software Development" }, {"id": 2, "name": "Device-Agnostic Design" }]};
    return c.json(data);
});

// B: ROUTING / GET REQUEST / /COURSES/:ID
// client queries server on path /courses/:id
// server returns a JSON document:
//'{"course": {"id": :id, "name": "Course Name" } }'
// The name is a string (just "Course Name", not e.g. "Web Software Development",
//':id' is retrieved from the path and is a number).
app.get("/courses/:id", (c) => {
    const id = Number(c.req.param("id"));
    // const id = Number(id);
    const data = {"course": {"id": id, "name": "Course Name" }}
    return c.json(data);
});

// C: POST REQUEST / /COURSES
// clients query server to /courses path and send json data with post request
    // body contains a JSON document that looks as follows: '{"name": "Course Name" }'
// server returns a JSON document:  
    // returns a JSON document that looks as follows: '{"course": {"id": 3, "name": "Course Name" } }'. 
    // The value for "id" is always 3, but the name of the course should be extracted from the request.

app.post("/courses", async (c) => {
    const post_data = await c.req.json(); // retrieves json data from http request body
    // console.log(`this is the json data`, post_data); // for debugging
    const course_name = post_data.name; // accesses course name property
    console.log('Course name:', course_name); // for debugging
    const return_data = {"course": {"id":3, "name": course_name}} // defined json data for response
    return c.json(return_data); // returns json response
});

// D: GET REQUEST / /courses/:id/topics
// clients query server with GET request
// ':id' is a path variable
// server returns a JSON document that looks as follows: 
// '{"topics": [ { "id": 1, "name": "Topic 1" }, {"id": 2, "name": "Topic 2" } ] }'. 
// Nothing is done with the path variable.
app.get("/courses/:id/topics", (c) => {
    const id = c.req.param("id"); // stores path variable from request
    const response_data = {"topics": [ { "id": 1, "name": "Topic 1" }, {"id": 2, "name": "Topic 2" } ] }; // defines json response
    return c.json(response_data); // returns json response
});

// E: GET REQUEST / /courses/:cId/topics/:tId/posts
// clients query request to server and send ':cId' and ':tId' are path variables
// server returns a JSON document that looks as follows: 
// '{"posts": [ {"id": 1, "title": "Post 1" }, {"id": 2, "title": "Post 2" } ] }'. 
// Nothing is done with the path variables.

app.get("/courses/:cId/topics/:tId/posts", (c) => {
    const cID = c.req.param("cId");
    const tID = c.req.param("tId");
    const response_data = {"posts": [ {"id": 1, "title": "Post 1" }, {"id": 2, "title": "Post 2" } ] };
    return c.json(response_data);
});

// F: GET REQUEST / /courses/:cId/topics/:tId/posts/:pId
// clients query the server and send ':cId', ':tId', and ':pId' as path variables
// server returns a JSON document that looks as follows: 
// '{"post": {"id": :pId, "title": "Post Title" }, "answers": [ { "id": 1, "content": "Answer 1" }, {"id": 2, "content": "Answer 2" } ] }'. 
// The path variables :cId and :tId are not used.

app.get("/courses/:cId/topics/:tId/posts/:pId", (c) => {
    const cID = c.req.param("cId");
    const tID = c.req.param("tId");
    const pID = Number(c.req.param("pId")); // converts text-based id into number, all http requests are text-based
    const response_data = {"post": {"id": pID, "title": "Post Title" }, "answers": [ { "id": 1, "content": "Answer 1" }, {"id": 2, "content": "Answer 2" } ] }
    return c.json(response_data);
});

export default app;
