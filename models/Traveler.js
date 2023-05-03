const { Model, DataTypes } = require('sequelize');

class Traveler extends Model {}

Traveler.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traveler',
    }
);

module.exports = Traveler;