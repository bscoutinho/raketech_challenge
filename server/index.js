const jsonServer = require("json-server");
const cloneDeep = require("lodash.clonedeep");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

// Add custom middleware before JSON Server router
server.use(middlewares);
server.use(router);
server.listen(4000, () => {
  console.log("Raketech Server is running on port 4000");
});
