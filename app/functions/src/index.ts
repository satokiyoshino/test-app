import * as functions from 'firebase-functions'
import next from 'next'


const nextApp = next({dev: false})
const handle = nextApp.getRequestHandler()


export const main =
functions.https.onRequest(async (req, res) => {
    nextApp.prepare().then(() => handle(req, res))
})