import * as functions from 'firebase-functions'
import next from 'next'
import express from 'express'

import { router } from './api'


const nextApp = next({dev: false})
const handle = nextApp.getRequestHandler()


export const main =
    functions.https.onRequest(async (req, res) => {
        const app = express()

        app.use('/api', router);

        app.get('*', async (req, res) => {
            await nextApp.prepare()
            handle(req, res)
        })
        app(req, res)
    })