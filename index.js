const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefDetails = require("./data/chef-details.json");
const recipe = require("./data/recipe.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Food Club is running...");
});

app.get("/chef-details", (req, res) => {
    res.send(chefDetails);
});

app.get("/chef-details/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefDetails?.find((chefInfo) => chefInfo.id === id);
    res.send(chef);
});

app.get("/recipe", (req, res) => {
    res.send(recipe);
});

app.get("/recipe/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedRecipe = recipe?.find((recipeInfo) => recipeInfo.id === id);
    res.send(selectedRecipe);
});

app.listen(port, () => {
    console.log(`Clever Cookie is running on port: ${port}`);
});
