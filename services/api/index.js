import { parse as parseUrl } from 'url'
import { run, send } from 'micro'
import loginHandler from './login'
import profileHandler from './profile'

const api = (req, res) => {
  const { pathname } = parseUrl(req.url)
  switch (`${req.method} ${pathname}`) {
    case 'GET /api':
      send(res, 200, { status: true })
      break
    case 'POST /api/login':
      loginHandler(req, res)
      break
    case 'GET /api/profile':
      profileHandler(req, res)
      break
    default:
      send(res, 404, 'look like you are lost')
      break
  }
}

export default (req, res) => run(req, res, api)
