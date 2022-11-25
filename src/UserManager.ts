import { Command } from "./Command"
import { IUser } from "./types"

export class UserManager {

	private users: IUser[]

	constructor() {
		this.users = []
	}

	execute(command: Command, ...args: any[]) {
		return command.execute(this.users, ...args)
	}
}