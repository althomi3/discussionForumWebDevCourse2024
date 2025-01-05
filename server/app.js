import { Hono } from "@hono/hono";
// import { cors } from "@hono/hono/cors";
// import { logger } from "@hono/hono/logger";
import { ERROR_CTX_CONSOLE_DISCONNECT } from "https://deno.land/std@0.132.0/node/internal_binding/_winerror.ts";
// import postgres from "postgres";

const app = new Hono(); // instantiates hono object from hono web framework

// ---PROJECT IMPLEMENTATIONN SERVER SIDE---

// ROUTING LANDING PAGE
app.get("/", (c) => c.text("Hello"));

// ROUTING /COURSES PATH
// client queries server with GET request, server returns the following JSON document
// '{"courses": [ {"id": 1, "name": "Web Software Development" }, {"id": 2, "name": "Device-Agnostic Design" } ] }'
app.get("/courses", (c) => {
    const data = {"courses": [ {"id": 1, "name": "Web Software Development" }, {"id": 2, "name": "Device-Agnostic Design" }]};
    return c.json(data);
});

export default app;
