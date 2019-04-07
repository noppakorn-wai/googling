import Sequelize from 'sequelize'
import models from './models'

const sequelize = new Sequelize({
  dialect: process.env.DB_TYPE || 'sqlite',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

const db = models.reduce((result, createModel) => {
  const model = createModel(sequelize, Sequelize.DataTypes)
  return {
    ...result,
    [model.name]: model,
  }
}, {})

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) db[modelName].associate(db)
})

db.sequelize = sequelize

export default db
