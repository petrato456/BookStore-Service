import Fastify from "fastify";

const app = Fastify();

app.get("/health", () => ({ status: "ok" }));

app.listen({ port: 3333 }).then(() => {
  console.log("Server running on port 3333");
});
