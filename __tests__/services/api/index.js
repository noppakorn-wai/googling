import micro from 'micro'
import listen from 'test-listen'
import axios from 'axios'
import api from 'api'

test('should response with response true when request with GET /api', async () => {
  expect.assertions(1)
  const service = micro(api)
  const baseURL = await listen(service)
  const res = await axios.get(`${baseURL}/api`)
  expect(res.data.status).toBe(true)
  service.close()
})

test('should response with status 404 when given unexpeted url', async () => {
  expect.assertions(1)
  const service = micro(api)
  const baseURL = await listen(service)
  try {
    await axios.get(`${baseURL}/any-unhandled-url`)
  } catch (e) {
    expect(e.response.status).toBe(404)
  }
  service.close()
})
