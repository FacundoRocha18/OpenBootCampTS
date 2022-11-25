import express from 'express'

// User Manager and Commands
import { UserManager } from './User/UserManager'
import { CreateUserCommand } from './User/use-cases/CreateUserCommand'

// Database Manager and Commands
import { DatabaseManager } from './Database/DatabaseManager'
import { SaveUserDBCommand } from './Database/use-cases/Users/SaveUserCommand'
import { GetUsersDBCommand } from './Database/use-cases/Users/GetUsersCommand'

// Types
import { IUser } from './Shared/types'

const api = express()
const manager = new UserManager()
const databaseManager = new DatabaseManager()

api.use(express.json())

api.get('/', (req, res) => {
	res.send('Hello world!')
})

api.get('/api/users/', (req, res) => {

	try {
		res.status(200).send(databaseManager.execute(GetUsersDBCommand()))

	} catch (error) {
		res.status(500).send({ message: 'Failed to get users data' + error })
	}
})

api.post('/api/users/', (req, res) => {
	try {

		const newUser = manager.execute(CreateUserCommand(req.body))

		const users: IUser[] = databaseManager.execute(GetUsersDBCommand())

		databaseManager.execute(SaveUserDBCommand(`${__dirname}/Database/database.json`, newUser, users))

		res.send('User data saved succesfully')
	} catch (error) {
		console.log(error)
		res.status(500).send(error)
	}
})

api.listen(8000, () => {
	console.log('Server running at: http://localhost:8000')
})
