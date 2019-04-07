export default (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    userId: DataTypes.STRING,
    fileName: DataTypes.STRING,
    numberOfKeywords: DataTypes.NUMBER,
    numberOfResults: DataTypes.NUMBER,
  })

  Search.associate = (models) => {
    models.Search.hasMany(models.Keyword)
  }

  return Search
}
