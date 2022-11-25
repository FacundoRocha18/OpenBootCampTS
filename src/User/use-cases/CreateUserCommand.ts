import { User } from '../entities/User'
import { IPerson, IUser } from '../../Shared/types'
import { Command } from '../../Shared/Command'

export const CreateUserCommand = (user: IPerson) => {
  return new Command((): IUser => {
    const createdUser = new User(user.name, user.age)
    return createdUser.getUser()
  })
}
