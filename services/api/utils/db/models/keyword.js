export default (sequelize, DataTypes) => {
  const Keyword = sequelize.define('Keyword', {
    keyword: DataTypes.STRING,
    numberOfAdWords: DataTypes.NUMBER,
    numberOfLinks: DataTypes.NUMBER,
    numberOfResults: DataTypes.NUMBER,
    cachedUrl: DataTypes.STRING,
  })

  Keyword.associate = (models) => {
    models.Keyword.belongsTo(models.Search, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    })
  }

  return Keyword
}
