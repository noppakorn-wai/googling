import { run, send } from 'micro'

const getStatus = (req, res) => {
  switch (req.method) {
    case 'GET':
      return send(res, 200, {
        status: true,
      })
    default:
      return send(res, 405)
  }
}

const api = (req, res) => {
  if (req.url.startsWith('/api')) return getStatus(req, res)
  return send(res, 404)
}

export default (req, res) => run(req, res, api)
