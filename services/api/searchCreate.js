import { createError, run, send } from 'micro'
import { json } from 'api/utils/bodyParser'
import { getProfile } from 'api/utils/auth'
import db from 'api/utils/db'

const searchCreateHandler = async (req, res) => {
  const { id: userId } = await getProfile(req)
  const { keywords } = await json(req)
  if (!keywords?.length) throw createError(400, 'BAD_REQUEST')
  await db.sequelize.sync()
  const tx = await db.sequelize.transaction()
  try {
    const searchRecord = await db.Search.create(
      {
        userId,
        numberOfKeywords: keywords.length,
      },
      { transaction: tx },
    )
    const searchId = searchRecord.id
    await db.Keyword.bulkCreate(
      keywords.map((keyword) => ({
        keyword,
        SearchId: searchId,
      })),
      { transaction: tx },
    )
    await tx.commit()
    send(res, 200, searchRecord)
  } catch (e) {
    console.error(e)
    await tx.rollback()
    throw createError(500, 'INTERNAL_SERVER_ERROR')
  }
}

export default (req, res) => run(req, res, searchCreateHandler)
