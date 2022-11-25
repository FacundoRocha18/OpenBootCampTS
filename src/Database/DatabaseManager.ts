import { Command } from '../Shared/Command'

export class DatabaseManager {
  private readonly database: any

  constructor () {
    this.database = {}
  }

  execute (command: Command, ...args: any[]) {
    return command.execute(this.database, ...args)
  }
}
