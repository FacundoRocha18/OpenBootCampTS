import { CreateUserCommand } from "./Command"
import { IPerson } from "./types"
import { UserManager } from "./UserManager"

const manager = new UserManager()

const user: IPerson = {
	name: 'Facundo',
	age: 21
}



console.log(manager.execute(CreateUserCommand(user)))