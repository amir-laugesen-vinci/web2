import express, { RequestHandler } from "express";
import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";

const app = express();

// Middleware pour parser les JSON et les données encodées en URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Variable pour compter les requêtes GET
let getCounter = 0;

// Middleware pour compter et afficher les requêtes GET
const countGetRequests: RequestHandler = (req, _res, next) => {
  if (req.method === "GET") {
    getCounter++;
    console.log(`GET counter : ${getCounter}`);
  }
  next(); // Passe à la prochaine étape (route ou middleware)
};

// Appliquer le middleware à toutes les routes
app.use(countGetRequests);

// Routers existants pour users et pizzas
app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);

export default app;
