require('dotenv').config();
const express = require("express");
const path = require("path");

const {
  pageLayout,
  frontPage,
  errorPage,
  searchResults,
  pokemonCard,
} = require("./helpers/html");

const port = process.env.PORT;
const app = express();

const pokedex = require("./pokedex.json");

app.use(express.static(path.resolve(__dirname, "static")));

app.get("/", (req, res) => {
  const pageContent = frontPage();

  res.send(pageLayout({ title: "Portada", content: pageContent }));
});

app.get("/search", (req, res) => {
  const { query } = req.query;
  
  if (query.length < 2) {
    const error = new Error("La cadena de búsqueda debe tener más de 1 caracteres");
    error.code = 400;
    throw error;
  }
  
  const matchedPokemon = pokedex.filter((pokemon) => {
    return pokemon.name.english.toLowerCase().includes(query.toLowerCase());
  });

  if (matchedPokemon.length === 0) {
    const error = new Error("Ningún pokémon encontrado");
    error.code = 404;
    throw error;
  }

  const pageContent = searchResults({ results: matchedPokemon });
  res.send(
    pageLayout({
      title: `Resultados de la búsqueda: ${query}`,
      content: pageContent,
    })
  );
});

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;

  const [pokemon] = pokedex.filter((pokemon) => pokemon.id === Number(id));

  if (!pokemon) {
    const error = new Error("Pokémon no encontrado");
    error.code = 404;
    throw error;
  }

  const pageContent = pokemonCard({ pokemon });

  res.send(
    pageLayout({
      title: `${pokemon.name.english} / ${pokemon.name.japanese}`,
      content: pageContent,
    })
  );
});

app.use((error, req, res, next) => {
  const pageContent = errorPage({ message: error.message });

  res
    .status(error.code || 500)
    .send(
      pageLayout({ title: `Error: ${error.message}`, content: pageContent })
    );
});

app.use((req, res) => {
  const pageContent = errorPage({ message: "Página no encontrada" });

  res
    .status(404)
    .send(
      pageLayout({ title: "Error: Página no encontrada", content: pageContent })
    );
});

app.listen(3000, () => {
  console.log(`Servidor web funcionando en http://localhost:${port}`);
});
