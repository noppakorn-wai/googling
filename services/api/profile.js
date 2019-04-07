import { run, send } from 'micro'
import { getProfile } from 'api/utils/auth'

export const FIREBASE_PROFILE_URL = '/identitytoolkit/v3/relyingparty/getAccountInfo'

const profileHandler = async (req, res) => {
  const profile = await getProfile(req)
  send(res, 200, profile)
}

export default (req, res) => run(req, res, profileHandler)
