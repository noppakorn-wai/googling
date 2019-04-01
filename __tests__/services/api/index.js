import micro from 'micro'
import listen from 'test-listen'
import axios from 'axios'
import api from 'api'

test('should response with response true', async () => {
  expect.assertions(1)
  const service = micro(api)
  const baseURL = await listen(service)
  const res = await axios.post(`${baseURL}/api/login`)
  expect(res.data.status).toBe(true)
  service.close()
})
