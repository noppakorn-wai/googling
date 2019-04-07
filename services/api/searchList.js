import { run, send } from 'micro'
import { getProfile } from 'api/utils/auth'
import db from 'api/utils/db'

export const FIREBASE_LOGIN_URL = '/identitytoolkit/v3/relyingparty/verifyPassword'

const searchListHandler = async (req, res) => {
  const { id } = await getProfile(req)
  await db.sequelize.sync()
  const searcheRecords = await db.Search.findAll({
    where: { userId: id },
  })
  send(res, 200, {
    collection: searcheRecords,
  })
}

export default (req, res) => run(req, res, searchListHandler)
