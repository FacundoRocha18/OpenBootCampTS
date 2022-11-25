import { User } from "./User"
import { IPerson, IUser } from './types'

export class Command {
	readonly execute: Function
	constructor(execute: Function) {
		this.execute = execute
	}
}

export const CreateUserCommand = (user: IPerson) => {

	return new Command(() => {
		const newUser = new User(user.name, user.age)
		return `Nuevo usuario creado: ${newUser.getUser()}`
	})
}