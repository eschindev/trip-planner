const Sequelize = require('sequelize');
const Traveler = require('./Traveler.js');
const Location = require('./Location.js');
const Trip = require('./Trip.js');

Traveler.belongsToMany(Location, {
    through: Trip
});

Location.belongsToMany(Traveler, {
    through: Trip
});

module.exports = { Traveler, Location, Trip };