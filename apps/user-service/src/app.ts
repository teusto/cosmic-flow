import fastify from "fastify";
import fjwt, { FastifyJWT } from "@fastify/jwt";
import fCookie from "@fastify/cookie";
import { userRoutes } from "./modules/user.route";
import { userSchemas } from "./modules/user.schema";

const app = fastify({ logger: true }); // you can disable logging

app.register(fjwt, { secret: "supersecretcode-CHANGE_THIS-USE_ENV_FILE" });
app.register(userRoutes, { prefix: "service/users" });

app.addHook("preHandler", (req, res, next) => {
    req.jwt = app.jwt;
    return next();
});

app.register(fCookie, { secret: 'some-secret-key', hook: 'preHandler' })

for (let schema of [...userSchemas]) {
  app.addSchema(schema);
}

// graceful shutdown
const listeners = ["SIGINT", "SIGTERM"];
listeners.forEach((signal) => {
  process.on(signal, async () => {
    await app.close();
    process.exit(0);
  });
});

async function main() {
  await app.listen({
    port: 8000,
    host: "0.0.0.0",
  });
}
main();

app.get("/healthcheck", (req, res) => {
  res.send({ message: "Success" });
});
