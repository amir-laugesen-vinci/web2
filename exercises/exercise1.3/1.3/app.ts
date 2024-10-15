import express from "express";
import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import filmRouter from "./routes/films";
import drinkRouter from "./routes/drinks";

const app = express();

// Middleware pour parser les JSON et les données encodées en URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers existants pour users et pizzas
app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/films", filmRouter);
app.use("/drinks", drinkRouter);


export default app;