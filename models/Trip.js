const { Model, DataTypes } = require('sequelize');

class Trip extends Model {}

Trip.init(
    {
        tripBudget: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        travelerAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        travelerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            references: {
                model: 'traveler',
                key: 'id'
            }
        },
        lcoationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            references: {
                model: 'location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip',
    }
);

module.exports = Trip;