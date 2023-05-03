const router = require('express').Router();
const locationRoutes = require('./locationRoutes.js');
const travelerRoutes = require('./travelerRoutes.js');
const tripRoutes = require('./tripRoutes.js');

router.use('/locations', locationRoutes);
router.use('/travelers', travelerRoutes);
router.use('/trips', tripRoutes);

module.exports = router;