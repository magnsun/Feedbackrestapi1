const express = require('express');
const router = express.Router();
const heroController = require('../controller/HeroController');

// Define routes and bind them to controller functions
router.get('/', heroController.getAllheroes);
router.get('/:id', heroController.getHeroById);
router.post('/', heroController.createhero);
router.put('/:id', heroController.updatehero);
router.delete('/:id', heroController.deletehero);

// Export the router
module.exports = router;