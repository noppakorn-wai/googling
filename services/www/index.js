import { parse } from 'url'
import next from 'next'
import conf from './next.config'

const dev = process.env.NODE_ENV !== 'production'

const dir = (() => {
  if (dev) return './services/www'
  const { existsSync } = require('fs') // eslint-disable-line global-require
  if (existsSync('./.build')) return './.build'
  return '.'
})()

const app = next({ dev, dir, conf })

const handle = app.getRequestHandler()

function main(req, res) {
  const parsedUrl = parse(req.url, true)
  return handle(req, res, parsedUrl)
}

let preparing = true

app.prepare().then(() => {
  preparing = false
})

function setup(handler) {
  if (!preparing) return () => ({ preparing })
  return handler
}

export default setup(main)
