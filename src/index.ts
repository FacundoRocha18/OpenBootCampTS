import express from 'express'
import { router as UsersRouter } from './Presenters/routers/UsersRouter'

const api = express()

api.use(express.json())

api.get('/', (req, res) => {
	res.send('Hello world!')
})

api.use('/api/users/', UsersRouter)

api.listen(8000, () => {
	console.log(`Server running at: http://localhost:8000 at: ${new Date().toLocaleTimeString()}`)
})
