import { Command } from '../Shared/Command'
import { IUser } from '../Shared/types'

export class UserManager {
  private readonly users: IUser[]

  constructor () {
    this.users = []
  }

  execute (command: Command, ...args: any[]) {
    return command.execute(this.users, ...args)
  }
}
