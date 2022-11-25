import fs, { PathOrFileDescriptor } from 'fs'
import { Command } from '../../../Shared/Command'
import { IUser } from '../../../Shared/types'

export const SaveUserDBCommand = (path: PathOrFileDescriptor, newUser: IUser, users: IUser[]) => {
	return new Command((): string => {
		users.push(newUser)

		const newDatabaseState = {
			users: users
		}

		console.log(newDatabaseState)

		fs.writeFileSync(path, JSON.stringify(newDatabaseState, null, 2))
		return `New user saved on database: ${newUser.name}`
	})
}
