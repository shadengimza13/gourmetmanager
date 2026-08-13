const RecipeView = {
    list: document.getElementById("recipeList"),
    ingredients: document.getElementById("ingredients"),
    message: document.getElementById("formMessage"),

    renderRecipes(recipes) {
        this.list.innerHTML = "";

        recipes.forEach((recipe) => {
            const card = document.createElement("article");
            card.className = "recipe-card";

            card.innerHTML = `
                <button class="recipe-title" type="button" data-id="${recipe.id}">
                    <div>
                        <h3>${this.escapeHTML(recipe.title)}</h3>
                        <span class="category">${this.escapeHTML(recipe.category)}</span>
                    </div>
                    <span class="arrow">＋</span>
                </button>

                <div class="recipe-detail" id="detail-${recipe.id}">
                    <p>${this.escapeHTML(recipe.description)}</p>

                    <strong>Ingrédients :</strong>

                    <ul class="ingredient-list">
                        ${recipe.ingredients
                            .map(ingredient => `<li>${this.escapeHTML(ingredient)}</li>`)
                            .join("")}
                    </ul>
                </div>
            `;

            this.list.appendChild(card);
        });
    },

    addIngredientField(value = "") {
        const row = document.createElement("div");
        row.className = "ingredient-row";

        row.innerHTML = `
            <input 
                type="text" 
                name="ingredients[]" 
                placeholder="Ex. 2 tomates" 
                value="${this.escapeHTML(value)}" 
                required
            >

            <button 
                type="button" 
                class="remove-ingredient"
            >
                ×
            </button>
        `;

        row.querySelector(".remove-ingredient").addEventListener("click", () => {
            row.remove();
        });

        this.ingredients.appendChild(row);
    },

    showMessage(text) {
        this.message.textContent = text;
    },

    escapeHTML(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }
};
