import fs, { PathOrFileDescriptor } from 'fs'
import { Command } from '../../../Shared/Command'
import database from '../../database.json'

export const GetUsersDBCommand = () => {
	return new Command(() => database.users)
}
