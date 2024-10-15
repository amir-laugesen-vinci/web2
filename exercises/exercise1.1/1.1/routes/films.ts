import { Router } from "express";
import { Film } from "../types";

const films:Film[] = [
    {
      id: 1,
      title: "Overlord: First Kingdom",
      director: "Naoyuki Itou",
      duration: 120,
      budget: 50,
      description: "An epic battle unfolds as Ainz Ooal Gown seeks to expand his dominion in a new kingdom.",
      imageUrl: "https://example.com/overlord-first-kingdom.jpg"
    },
    {
      id: 2,
      title: "Dragon Ball Super: Broly",
      director: "Tatsuya Nagamine",
      duration: 100,
      budget: 8,
      description: "Goku and Vegeta face off against the powerful Saiyan warrior Broly, pushing their limits to save Earth.",
      imageUrl: "https://example.com/dragon-ball-broly.jpg"
    },
    {
      id: 3,
      title: "Sly Cooper: Thieves in Time",
      director: "John Cooper",
      duration: 110,
      budget: 45,
      description: "Master thief Sly Cooper embarks on a time-traveling adventure to protect the legacy of his family.",
      imageUrl: "https://example.com/sly-cooper-thieves.jpg"
    }
  ];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;
