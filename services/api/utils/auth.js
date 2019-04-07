import axios from 'axios'
import { createError } from 'micro'

export const FIREBASE_PROFILE_URL = '/identitytoolkit/v3/relyingparty/getAccountInfo'

export const getIdToken = (req) => {
  if (req.headers.authorization) return req.headers.authorization
  return req.headers.cookie?.match(/idToken=([^;]+);/)?.[1]
}

export const getProfile = async (req) => {
  const idToken = getIdToken(req)
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
    return {
      id: user.localId,
      email: user.email,
    }
  } catch (e) {
    switch (e?.response?.data?.error?.message) {
      case 'INVALID_ID_TOKEN':
      case 'MISSING_ID_TOKEN':
        throw createError(401, 'UNAUTHORIZE', e)
      default:
        console.error('[ERROR]', e?.response?.status, e?.response?.data)
        throw createError(401, 'INTERNAL_SERVER_ERROR', e)
    }
  }
}
