const prepareEnv = () => {
  delete process.env.FIREBASE_API_KEY
  process.env.DB_TYPE = 'sqlite'
  delete process.env.DB_HOST
  delete process.env.DB_USER
  delete process.env.DB_PASS
  delete process.env.DB_NAME
}

export default async () => {
  await prepareEnv()
}
