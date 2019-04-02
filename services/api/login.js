import axios from 'axios'
import { run, send } from 'micro'
import { json } from './utils/bodyParser'

export const FIREBASE_LOGIN_URL = '/identitytoolkit/v3/relyingparty/verifyPassword'

const loginHandler = async (req, res) => {
  const { email, password } = await json(req)
  const { data } = await axios({
    method: 'POST',
    baseURL: 'https://www.googleapis.com',
    url: FIREBASE_LOGIN_URL,
    params: { key: process.env.FIREBASE_API_KEY },
    data: { email, password, returnSecureToken: true },
  })
  send(res, 200, {
    email: data.email,
    displayName: data.displayName,
    idToken: data.idToken,
    refreshToken: data.refreshToken,
  })
}

export default (req, res) => run(req, res, loginHandler)
