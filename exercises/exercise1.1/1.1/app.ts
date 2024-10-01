import express from "express";
import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";

const app = express();
const port = 3000;

// Middleware pour parser les JSON et les données encodées en URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers existants pour users et pizzas
app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);

// Tableau "hardcodé" de films
const films = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "Un voleur qui infiltre les rêves des gens.",
    imageUrl: "https://example.com/inception.jpg"
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    budget: 63,
    description: "Un pirate informatique découvre la réalité.",
    imageUrl: "https://example.com/matrix.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
    budget: 185,
    description: "Batman affronte le Joker dans Gotham.",
    imageUrl: "https://example.com/darkknight.jpg"
  }
];

// Route pour lire toutes les ressources (films)
app.get('/films', (req, res) => {
  res.json(films);  // Renvoie la liste des films en format JSON
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur myMovies lancé sur le port ${port}`);
});

export default app;