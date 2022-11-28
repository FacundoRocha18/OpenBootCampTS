import { Singleton } from "./design-patterns/creationals/singleton"

// * Creational design patterns
const singleton = Singleton.getInstance()

const singleton2 = Singleton.getInstance()

// * Check if singleton works
if ( singleton === singleton2 ) {
	console.log('Singleton works, both variables contain the same instance')
} else {
	console.log('Singleton failed, variables contain different instances')
}

/* import express from 'express'

const api = express()

api.use(express.json())

api.get('/', (req, res) => {
	res.send('Hello world!')
})

api.listen(8000, () => {
	console.log(`Server running at: http://localhost:8000 at: ${new Date().toLocaleTimeString()}`)
}) */
