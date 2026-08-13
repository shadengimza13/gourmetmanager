const RecipeModel = {
    recipes: [
        {
            id: 1,
            title: "Tajine de poulet au citron",
            category: "Plat",
            description: "Un plat mijoté aux saveurs douces, avec du citron confit et des olives.",
            ingredients: [
                "Poulet",
                "Citron confit",
                "Olives vertes",
                "Oignon",
                "Épices"
            ]
        },
        {
            id: 2,
            title: "Salade marocaine fraîche",
            category: "Entrée",
            description: "Une salade simple et fraîche à base de tomates, concombre et herbes.",
            ingredients: [
                "Tomates",
                "Concombre",
                "Persil",
                "Coriandre",
                "Huile d'olive"
            ]
        },
        {
            id: 3,
            title: "Ghriba aux amandes",
            category: "Dessert",
            description: "Un petit gâteau fondant aux amandes, parfait avec un thé à la menthe.",
            ingredients: [
                "Amandes",
                "Sucre",
                "Œuf",
                "Levure",
                "Fleur d'oranger"
            ]
        }
    ],

    getAll() {
        return this.recipes;
    },

    add(recipe) {
        recipe.id = Date.now();
        this.recipes.push(recipe);
    }
};
