import { json as parseJsonBody } from 'micro'

export const json = (req) => {
  /**
   * Google cloud function will automatically parse json body
   * which mess with internal http.ClientRequest and lead to error when using micro.json as parser
   * so if we expect json body on Google cloud function just using req.body should be sufficient
   */
  if (process.env.GCLOUD_PROJECT) return req.body
  return parseJsonBody(req)
}
