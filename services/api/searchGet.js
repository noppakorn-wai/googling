import { createError, run, send } from 'micro'
import { getProfile } from 'api/utils/auth'
import db from 'api/utils/db'

const searchGetHandler = async (req, res) => {
  const { id: userId } = await getProfile(req)
  const { id } = req.params
  if (!id) throw createError(400, 'BAD_REQUEST')
  await db.sequelize.sync()
  const searchRecord = await db.Search.findOne({
    where: {
      id,
      userId,
    },
    include: [
      {
        model: db.Keyword,
      },
    ],
  })
  if (!searchRecord) throw createError(404, 'NOT_FOUND')
  const searchResult = searchRecord.dataValues
  send(res, 200, {
    id: searchResult.id,
    createdAt: searchResult.createdAt,
    updatedAt: searchResult.updatedAt,
    keywords: searchResult.Keywords.map((keyword) => ({
      id: keyword.id,
      keyword: keyword.keyword,
      status: keyword.cachedUrl ? 'ready' : 'pending',
      numberOfAdWords: keyword.numberOfAdWords,
      numberOfLinks: keyword.numberOfLinks,
      numberOfResults: keyword.numberOfResults,
      cachedUrl: keyword.cachedUrl,
    })),
  })
}

export default (req, res) => run(req, res, searchGetHandler)
