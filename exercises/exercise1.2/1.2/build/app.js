"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const pizzas_1 = __importDefault(require("./routes/pizzas"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware pour parser les JSON et les données encodées en URL
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Variable pour compter les requêtes GET
let getCounter = 0;
// Middleware pour compter et afficher les requêtes GET
const countGetRequests = (req, res, next) => {
    if (req.method === 'GET') {
        getCounter++;
        console.log(`GET counter : ${getCounter}`);
    }
    next(); // Passe à la prochaine étape (route ou middleware)
};
// Appliquer le middleware à toutes les routes
app.use(countGetRequests);
// Routers existants pour users et pizzas
app.use("/users", users_1.default);
app.use("/pizzas", pizzas_1.default);
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
// Route pour lire toutes les ressources films
app.get('/films', (req, res) => {
    res.json(films); // Renvoie la liste des films en format JSON
});
// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur myMovies lancé sur le port ${port}`);
});
exports.default = app;
