import * as functions from 'firebase-functions'
import apiHandler from './api'
import wwwHandler from './www'

export const api = functions.https.onRequest(apiHandler)
export const www = functions.https.onRequest(wwwHandler)
