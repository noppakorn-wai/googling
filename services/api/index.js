import { run, send } from 'micro'
import { router, get, put, post, del } from 'microrouter'
import loginHandler from './login'
import profileHandler from './profile'
import searchGetHandler from './searchGet'
import searchCreateHandler from './searchCreate'
import searchListHandler from './searchList'

export const statusHandler = (req, res) => send(res, 200, { status: true })
export const notFoundHandler = (req, res) => send(res, 404, 'look like you are lost')

const api = router(
  get('/api', statusHandler),
  post('/api/login', loginHandler),
  get('/api/profile', profileHandler),
  get('/api/searches', searchListHandler),
  post('/api/searches', searchCreateHandler),
  get('/api/searches/:id', searchGetHandler),
  get('/*', notFoundHandler),
  put('/*', notFoundHandler),
  post('/*', notFoundHandler),
  del('/*', notFoundHandler),
)

export default (req, res) => run(req, res, api)
