import { run } from 'micro'

const login = async () => {
  return {
    status: true,
  }
}

export default (req, res) => run(req, res, login)
