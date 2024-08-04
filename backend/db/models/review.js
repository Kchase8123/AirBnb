'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(Spot, { foreignKey: 'spotId' });
      Review.belongsTo(User, { foreignKey: 'userId' });
      Review.hasMany(Image, {
        foreignKey: 'imageableId',
        constraints: false,
        scope: {
          imageableType: 'review'
        }
      });
    }
  }
  Review.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false
      //check stars between 1 and 5
    }
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Review;
};
