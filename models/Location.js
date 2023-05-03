const { Model, DataTypes } = require('sequelize');

class Location extends Model {}

Location.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location',
    }
);

module.exports = Location;