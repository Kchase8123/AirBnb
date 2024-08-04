'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(Spot, {
        foreignKey: 'imageableId',
        constraints: false,
        scope: {
          imageableType: 'spot'
          }
        });
      Image.belongsTo(Review, {
        foreignKey: 'imageableId',
        constraints: false,
        scope: {
          imageableType: 'review'
          }
        });
      
    }
  }
  Image.init({
    imageableId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageableType: {
      type: DataTypes.ENUM('Spot', 'Review'),
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preview: {
      type:DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Image;
};
