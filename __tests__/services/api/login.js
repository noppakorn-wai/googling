import micro from 'micro'
import Axios from 'axios'
import login, { FIREBASE_LOGIN_URL } from 'api/login'
import MockAdapter from 'axios-mock-adapter'
import listen from 'test-listen'

const MOCK_LOGIN_REQ = {
  email: 'user@test.com',
  password: 'password',
}

const MOCK_LOGIN_RES = {
  email: MOCK_LOGIN_REQ.email,
}

const axios = Axios.create()
const mock = new MockAdapter(Axios)

test('should response with correct email', async () => {
  mock.onPost(FIREBASE_LOGIN_URL).reply(200, MOCK_LOGIN_RES)
  expect.assertions(1)
  const service = micro(login)
  const baseURL = await listen(service)
  const res = await axios.post(baseURL, MOCK_LOGIN_REQ)
  expect(res.data.email).toBe(MOCK_LOGIN_RES.email)
  service.close()
})
