import micro from 'micro'
import Axios from 'axios'
import profile, { FIREBASE_PROFILE_URL } from 'api/profile'
import MockAdapter from 'axios-mock-adapter'
import listen from 'test-listen'

const MOCK_PROFILE_RES = {
  users: [
    {
      email: 'user@test.com',
    },
  ],
}

const axios = Axios.create()
const mock = new MockAdapter(Axios)

test('should response with correct email', async () => {
  mock.onPost(FIREBASE_PROFILE_URL).reply(200, MOCK_PROFILE_RES)
  expect.assertions(1)
  const service = micro(profile)
  const baseURL = await listen(service)
  const res = await axios.get(baseURL)
  expect(res.data.email).toBe(MOCK_PROFILE_RES.users[0].email)
  service.close()
})
