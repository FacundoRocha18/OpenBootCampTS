import { User } from '../entities/User'
import { IPerson } from '../../types'
import { Command } from '../../Command'

export const CreateUserCommand = (user: IPerson) => {
  return new Command(() => {
    const createdUser = new User(user.name, user.age)
    return `Nuevo usuario creado: ${createdUser.getUser().name}`
  })
}
