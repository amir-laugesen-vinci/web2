import { Router } from "express";
import { Drink, NewDrink } from "../types";

const router = Router(); // Déclaration du router

// Tableau pour stocker les boissons (assure-toi qu'il est défini)
const drinks: Drink[] = [];

// Route POST pour ajouter une nouvelle boisson
router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (
      !body ||
      typeof body !== "object" ||
      !("title" in body) ||
      !("image" in body) ||
      !("volume" in body) ||
      !("price" in body) ||
      typeof body.title !== "string" ||
      typeof body.image !== "string" ||
      typeof body.volume !== "number" ||
      typeof body.price !== "number" ||
      !body.title.trim() ||
      !body.image.trim() ||
      body.volume <= 0 ||
      body.price <= 0
    ) {
      return res.sendStatus(400);
    }
  
    const { title, image, volume, price } = body as NewDrink;
  
    const nextId =
      drinks.reduce((maxId, drink) => (drink.id > maxId ? drink.id : maxId), 0) +
      1;
  
    const newDrink: Drink = {
      id: nextId,
      title,
      image,
      volume,
      price,
    };
  
    drinks.push(newDrink);
    return res.json(newDrink);
  });
  

// Route GET pour récupérer toutes les boissons
router.get("/", (_req, res) => {
  return res.json(drinks); // Renvoie le tableau de boissons
});

export default router; // Exporte le routeur
