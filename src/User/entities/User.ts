import { randomUUID } from 'crypto'
import { Person } from '../../Shared/Person'
import { IUser } from '../../Shared/types'

export class User extends Person {
  private readonly uuid: string
  private readonly signUpDate: Date

  constructor (
    name: string,
    age: number
  ) {
    super(name, age)
    this.uuid = randomUUID()
    this.name = name
    this.age = age
    this.signUpDate = new Date()
  }

  getUser (): IUser {
    return {
      uuid: this.uuid,
      name: this.name,
      age: this.age,
      signUpDate: this.signUpDate
    }
  }
}
