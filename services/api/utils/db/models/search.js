export default (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    userId: DataTypes.STRING,
    numberOfKeywords: DataTypes.NUMBER,
  })

  Search.associate = (models) => {
    models.Search.hasMany(models.Keyword)
  }

  return Search
}
