import axios from 'axios'
import { run, send } from 'micro'

export const FIREBASE_PROFILE_URL = '/identitytoolkit/v3/relyingparty/getAccountInfo'

const profileHandler = async (req, res) => {
  const idToken = req.headers?.authorization || req.headers?.cookie?.match(/idToken=([^;]*);/)?.[1]
  try {
    const {
      data: {
        users: [user],
      },
    } = await axios({
      method: 'POST',
      baseURL: 'https://www.googleapis.com',
      url: FIREBASE_PROFILE_URL,
      params: { key: process.env.FIREBASE_API_KEY },
      data: { idToken },
    })
    send(res, 200, {
      email: user.email,
    })
  } catch (e) {
    switch (e?.response?.data?.error?.message) {
      case 'INVALID_ID_TOKEN':
        send(res, 401, {
          code: 'UNAUTHORIZE',
        })
        break
      default:
        console.error('[ERROR]', e?.response?.status, e?.response?.data)
        send(res, 500, {
          code: 'INTERNAL_SERVER_ERROR',
        })
    }
  }
}

export default (req, res) => run(req, res, profileHandler)
