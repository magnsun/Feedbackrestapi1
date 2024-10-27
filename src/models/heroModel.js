let heroes = [];

module.exports = {
    getAllheroes: () => heroes,

    // Function to retrieve an item based on ID
    getHeroById: id => heroes.find(hero => hero.id === id),
    // Funktion til at oprette et nyt hero
    createhero: hero => {
        hero.id = heroes.length + 1;
        heroes.push(hero);
        return hero;
    },

    // Function to update an existing item based on ID
    updatehero: (id, updatedItem) => {
        let index = heroes.findIndex(hero => hero.id === id);
        if (index !== -1) {
            // Update item with new data
            heroes[index] = { ...heroes[index], ...updatedItem };
            return heroes[index];
        }
        return null;
    },

    // Function to delete an item based on ID
    deletehero: id => {
        // Find the index of item based on ID
        let index = heroes.findIndex(hero => hero.id === id);
        if (index !== -1) {
            // Remove item from list and return it
            return heroes.splice(index, 1);
        }
        return null;
    }
};
