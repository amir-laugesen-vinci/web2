interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface Film {
  id: number;               // Identifiant unique du film
  title: string;            // Titre du film
  director: string;         // Réalisateur du film
  duration: number;         // Durée du film en minutes
  budget?: number;          // Budget de production du film (optionnel)
  description?: string;     // Description ou résumé du film (optionnel)
  imageUrl?: string;        // URL de l'image du film (optionnel)
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Film };
