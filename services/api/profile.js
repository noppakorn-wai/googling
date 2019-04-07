import { run, send } from 'micro'
import { getProfile } from 'api/utils/auth'

export const FIREBASE_PROFILE_URL = '/identitytoolkit/v3/relyingparty/getAccountInfo'

const profileHandler = async (req, res) => {
  try {
    const profile = await getProfile(req)
    send(res, 200, profile)
  } catch (e) {
    send(res, e.status, {
      code: e.code,
    })
  }
}

export default (req, res) => run(req, res, profileHandler)
