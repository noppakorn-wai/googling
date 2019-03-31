import api from 'api'
import www from 'www'

const handler = (req, res) => {
  if (req.url.startsWith('/api')) api(req, res)
  else www(req, res)
}

export default handler
