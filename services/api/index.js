import { parse as parseUrl } from 'url'
import { run, send } from 'micro'
import loginHandler from './login'

const api = (req, res) => {
  const { pathname } = parseUrl(req.url)
  switch (`${req.method} ${pathname}`) {
    case 'POST /api/login':
      loginHandler(req, res)
      break
    default:
      send(res, 404, 'look like you are lost')
      break
  }
}

export default (req, res) => run(req, res, api)
