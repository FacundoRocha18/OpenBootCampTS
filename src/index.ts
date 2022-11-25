import { CreateUserCommand } from './User/use-cases/UserCreator'
import { UserManager } from './User/UserManager'
import fs from 'fs'
import database from './Database/database.json'

const manager = new UserManager()

const newUser = manager.execute(CreateUserCommand({
	name: 'Facundo',
	age: 21
}))

console.log(newUser)

fs.writeFileSync(`${__dirname}/database.json`, newUser)
