const RecipeController = {
    form: document.getElementById("recipeForm"),
    addIngredientButton: document.getElementById("addIngredient"),
    menuButton: document.getElementById("menuBtn"),
    nav: document.getElementById("nav"),

    init() {

        RecipeView.renderRecipes(
            RecipeModel.getAll()
        );

        RecipeView.addIngredientField();


        // Ajouter un ingrédient

        this.addIngredientButton.addEventListener("click", () => {
            RecipeView.addIngredientField();
        });


        // Afficher ou masquer le détail d'une recette

        RecipeView.list.addEventListener("click", (event) => {

            const button = event.target.closest(".recipe-title");

            if (!button) {
                return;
            }

            const id = Number(button.dataset.id);

            const detail = document.getElementById(
                `detail-${id}`
            );

            const arrow = button.querySelector(".arrow");

            detail.classList.toggle("visible");

            arrow.textContent =
                detail.classList.contains("visible")
                    ? "−"
                    : "＋";
        });


        // Ajouter une nouvelle recette

        this.form.addEventListener("submit", (event) => {

            event.preventDefault();

            const formData = new FormData(this.form);

            const ingredients = formData
                .getAll("ingredients[]")
                .map(value => value.trim())
                .filter(Boolean);

            const recipe = {
                title: formData.get("title").trim(),

                description: formData
                    .get("description")
                    .trim(),

                ingredients: ingredients,

                category: formData.get("category")
            };

            if (
                !recipe.title ||
                !recipe.description ||
                !recipe.category ||
                ingredients.length === 0
            ) {
                RecipeView.showMessage(
                    "Merci de compléter tous les champs."
                );

                return;
            }

            RecipeModel.add(recipe);

            RecipeView.renderRecipes(
                RecipeModel.getAll()
            );

            this.form.reset();

            RecipeView.ingredients.innerHTML = "";

            RecipeView.addIngredientField();

            RecipeView.showMessage(
                "La recette a bien été ajoutée au prototype."
            );

            document
                .getElementById("recettes")
                .scrollIntoView({
                    behavior: "smooth"
                });
        });


        // Menu mobile

        this.menuButton.addEventListener("click", () => {
            this.nav.classList.toggle("open");
        });

        this.nav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {
                    this.nav.classList.remove("open");
                });

            });
    }
};


document.addEventListener(
    "DOMContentLoaded",
    () => RecipeController.init()
);
