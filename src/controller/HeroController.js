const heroModel = require('../models/heroModel');

exports.getAllheroes = (req, res) => {
    res.json(heroModel.getAllheroes());
};

// Function to retrieve an item based on ID
exports.getHeroById = (req, res) => {
    const item = heroModel.getHeroById(parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};
exports.createhero= (req, res) => {
    const newItem = heroModel.createhero(req.body);
    res.status(201).json(newItem);
};

// Function to update an existing item based on ID
exports.updatehero = (req, res) => {
    const updatedItem = heroModel.updatehero(parseInt(req.params.id), req.body);
    if (updatedItem) {
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

// Function to delete an item based on ID
exports.deletehero = (req, res) => {
    const deletedItem = heroModel.deletehero(parseInt(req.params.id));
    if (deletedItem) {
        res.json(deletedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};
